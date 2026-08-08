import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { REMS_FIREBASE_CONFIG } from "./firebase-config.js";
export async function getPublicStudents(fallbackStudents){
  try{
    const app=initializeApp(REMS_FIREBASE_CONFIG);
    const db=getFirestore(app);
    const snap=await getDoc(doc(db,"rems_public","profiles"));
    if(!snap.exists()) return fallbackStudents;
    const remote=snap.data()?.profiles||{};
    return fallbackStudents.map(s=>remote[s.id]?{...s,...remote[s.id]}:s);
  }catch(err){
    console.warn("Public REMS data unavailable; static profiles are used.",err);
    return fallbackStudents;
  }
}
