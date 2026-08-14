import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { REMS_FIREBASE_CONFIG } from "./firebase-config.js";

const norm=v=>String(v||"").toLowerCase().replace(/[’`]/g,"'").replace(/\s+/g," ").trim();

export async function getPublicStudents(fallbackStudents=[]){
  const base=[...(fallbackStudents||[])];
  try{
    const app=getApps().length?getApps()[0]:initializeApp(REMS_FIREBASE_CONFIG);
    const db=getFirestore(app);

    const [profilesSnap,mediaSnap]=await Promise.all([
      getDocs(collection(db,"rems_public_profiles")),
      getDocs(collection(db,"rems_student_media"))
    ]);

    const media={};
    mediaSnap.forEach(docSnap=>{
      const data=docSnap.data()||{};
      if(data?.id) media[data.id]=data;
    });

    const cloud=[];
    profilesSnap.forEach(docSnap=>{
      const data=docSnap.data()||{};
      if(data?.id && data?.published===true){
        cloud.push({...data,photoData:media[data.id]?.photoData||""});
      }
    });

    const byId=new Map(cloud.map(x=>[String(x.id),x]));
    const byName=new Map(cloud.map(x=>[norm(x.name),x]));
    const merged=base.map(item=>{
      const remote=byId.get(String(item.id))||byName.get(norm(item.name));
      if(!remote) return item;
      return {
        ...item,
        ...remote,
        id:item.id,
        name:item.name,
        group:String(remote.group||item.group||"").trim()
      };
    });

    const baseIds=new Set(base.map(x=>String(x.id)));
    const baseNames=new Set(base.map(x=>norm(x.name)));
    cloud.forEach(x=>{
      if(!baseIds.has(String(x.id)) && !baseNames.has(norm(x.name))) merged.push(x);
    });

    return merged.sort((a,b)=>{
      const ga=String(a.group||""),gb=String(b.group||"");
      if(ga!==gb) return ga.localeCompare(gb,"uk");
      return String(a.name||"").localeCompare(String(b.name||""),"uk");
    });
  }catch(err){
    console.warn("Public student data unavailable; static profiles are used.",err);
    return base;
  }
}
