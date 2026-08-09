import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { REMS_FIREBASE_CONFIG } from "./firebase-config.js";

export async function getPublicStudents(fallbackStudents=[]){
  try{
    const app=initializeApp(REMS_FIREBASE_CONFIG);
    const db=getFirestore(app);
    const snap=await getDocs(collection(db,"rems_public_profiles"));
    const published=[];
    snap.forEach(docSnap=>{
      const data=docSnap.data();
      if(data?.id && data?.published===true) published.push(data);
    });
    if(published.length){
      return published.sort((a,b)=>String(a.name||"").localeCompare(String(b.name||""),"uk"));
    }
    return fallbackStudents;
  }catch(err){
    console.warn("Public REMS data unavailable; static profiles are used.",err);
    return fallbackStudents;
  }
}
