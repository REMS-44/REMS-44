import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { REMS_FIREBASE_CONFIG } from "./firebase-config.js";

const clean=v=>String(v||"")
  .toLowerCase()
  .replace(/[’`]/g,"'")
  .replace(/[^a-zа-яіїєґ0-9' ]/gi," ")
  .replace(/\s+/g," ")
  .trim();

const firstAlias=v=>{
  const x=clean(v).replace(/'/g,"");
  const aliases={
    "даша":"даря","даря":"даря",
    "катя":"катерина","катерина":"катерина",
    "даніїл":"данііл","данііл":"данііл","данило":"данило",
    "андрій":"андрій","артем":"артем","марія":"марія","поліна":"поліна",
    "світлана":"світлана","саміра":"саміра","мирослава":"мирослава"
  };
  return aliases[x]||x;
};

const personKey=name=>{
  const p=clean(name).split(" ").filter(Boolean);
  if(!p.length) return "";
  return `${p[0]}|${firstAlias(p[1]||"")}`;
};

const mergeProfile=(base,remote)=>({
  ...base,
  ...remote,
  id:base.id,
  studentId:String(base.studentId||remote?.studentId||""),
  name:base.name,
  group:String(base.group||remote?.group||"").trim(),
  photoData:String(remote?.photoData||"")
});

export async function getPublicStudents(fallbackStudents=[]){
  const base=[...(fallbackStudents||[])];

  try{
    const app=getApps().length?getApps()[0]:initializeApp(REMS_FIREBASE_CONFIG);
    const db=getFirestore(app);

    const [profilesSnap,mediaSnap]=await Promise.all([
      getDocs(collection(db,"rems_public_profiles")),
      getDocs(collection(db,"rems_student_media"))
    ]);

    const mediaById=new Map();
    mediaSnap.forEach(docSnap=>{
      const d=docSnap.data()||{};
      const id=String(d.id||docSnap.id||"");
      if(id) mediaById.set(id,d);
    });

    const cloud=[];
    profilesSnap.forEach(docSnap=>{
      const d=docSnap.data()||{};
      if(d?.published!==true) return;
      const id=String(d.id||docSnap.id||"");
      cloud.push({
        ...d,
        id,
        photoData:String(mediaById.get(id)?.photoData||"")
      });
    });

    const byId=new Map(cloud.map(x=>[String(x.id||""),x]));
    const byStudentId=new Map(cloud.filter(x=>x.studentId!=null).map(x=>[String(x.studentId),x]));
    const byPerson=new Map();
    cloud.forEach(x=>{
      const k=personKey(x.name);
      if(k && !byPerson.has(k)) byPerson.set(k,x);
    });

    const used=new Set();
    const merged=base.map(item=>{
      const remote=
        byId.get(String(item.id||"")) ||
        byStudentId.get(String(item.studentId||"")) ||
        byPerson.get(personKey(item.name));

      if(remote){
        used.add(String(remote.id||""));
        return mergeProfile(item,remote);
      }
      return item;
    });

    // Future groups/students published from REMS Control can appear automatically.
    // Existing old short-name profiles are not appended if they match a canonical person.
    const canonicalPersonKeys=new Set(base.map(x=>personKey(x.name)));
    cloud.forEach(x=>{
      if(used.has(String(x.id||""))) return;
      if(canonicalPersonKeys.has(personKey(x.name))) return;
      merged.push(x);
    });

    return merged.sort((a,b)=>
      String(a.name||"").localeCompare(String(b.name||""),"uk")
    );
  }catch(err){
    console.warn("Public student data unavailable; static profiles are used.",err);
    return base;
  }
}
