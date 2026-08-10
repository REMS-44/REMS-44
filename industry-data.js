import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { REMS_FIREBASE_CONFIG } from "./firebase-config.js";
const app=getApps().length?getApps()[0]:initializeApp(REMS_FIREBASE_CONFIG);
const db=getFirestore(app);

const MEDIA_PREFIX="firestore-media://";
const mediaCache=new Map();

async function resolveMedia(value){
  const s=String(value||"").trim();
  if(!s.startsWith(MEDIA_PREFIX)) return s;
  const id=s.slice(MEDIA_PREFIX.length);
  if(!id) return "";
  if(mediaCache.has(id)) return mediaCache.get(id);
  try{
    const snap=await getDoc(doc(db,"rems_industry_media",id));
    const data=snap.exists()?String(snap.data()?.data||""):"";
    mediaCache.set(id,data);
    return data;
  }catch(e){
    console.error("Media load failed",id,e);
    return "";
  }
}

async function hydrateMeeting(x){
  const out={...x};
  out.cover=await resolveMedia(out.cover);
  if(Array.isArray(out.blocks)){
    out.blocks=await Promise.all(out.blocks.map(async b=>{
      const z={...b};
      if(z.url) z.url=await resolveMedia(z.url);
      if(z.url2) z.url2=await resolveMedia(z.url2);
      if(Array.isArray(z.items)) z.items=await Promise.all(z.items.map(resolveMedia));
      return z;
    }));
  }
  return out;
}

export async function getMeetings(){
  const snap=await getDocs(collection(db,"rems_industry_meetings"));
  const a=[];
  snap.forEach(d=>{
    const x=d.data()||{};
    if(x.published===true)a.push({...x,id:d.id});
  });
  a.sort((a,b)=>String(b.date||"").localeCompare(String(a.date||"")));
  return await Promise.all(a.map(hydrateMeeting));
}

export async function getMeeting(id){
  if(!id)return null;
  const s=await getDoc(doc(db,"rems_industry_meetings",id));
  if(!s.exists())return null;
  const x={...s.data(),id:s.id};
  if(x.published!==true)return null;
  return await hydrateMeeting(x);
}
