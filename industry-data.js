import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { REMS_FIREBASE_CONFIG } from "./firebase-config.js";
const app=getApps().length?getApps()[0]:initializeApp(REMS_FIREBASE_CONFIG);
const db=getFirestore(app);
export async function getMeetings(){const snap=await getDocs(collection(db,"rems_industry_meetings"));const a=[];snap.forEach(d=>{const x=d.data()||{};if(x.published===true)a.push({...x,id:d.id});});return a.sort((a,b)=>String(b.date||"").localeCompare(String(a.date||"")));}
export async function getMeeting(id){if(!id)return null;const s=await getDoc(doc(db,"rems_industry_meetings",id));if(!s.exists())return null;const x={...s.data(),id:s.id};return x.published===true?x:null;}
