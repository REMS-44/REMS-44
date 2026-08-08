import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { REMS_FIREBASE_CONFIG } from "./firebase-config.js";

export async function getPublicStudents(fallbackStudents){
  try{
    const app=initializeApp(REMS_FIREBASE_CONFIG);
    const db=getFirestore(app);
    const snap=await getDocs(collection(db,"rems_public_profiles"));
    const remote={};
    snap.forEach(docSnap=>{
      const data=docSnap.data();
      if(data?.id) remote[data.id]=data;
    });
    if(!Object.keys(remote).length) return fallbackStudents;
    return fallbackStudents.map(s=>remote[s.id]?{...s,...remote[s.id]}:s);
  }catch(err){
    console.warn("Public REMS data unavailable; static profiles are used.",err);
    return fallbackStudents;
  }
}
