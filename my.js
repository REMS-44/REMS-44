import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { REMS_FIREBASE_CONFIG } from "./firebase-config.js";

const appFirebase=getApps().length?getApps()[0]:initializeApp(REMS_FIREBASE_CONFIG);
const db=getFirestore(appFirebase);
const root=document.getElementById("app");
const key=new URLSearchParams(location.search).get("key")||"";
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const isoToday=()=>new Date().toISOString().slice(0,10);
const fullDate=d=>new Date(d+"T12:00:00").toLocaleDateString("uk-UA",{weekday:"long",day:"numeric",month:"long"});
const shortDate=d=>new Date(d+"T12:00:00").toLocaleDateString("uk-UA",{day:"2-digit",month:"2-digit",year:"numeric"});
const timeText=x=>{
  const a=String(x.startTime||"").trim(),b=String(x.endTime||"").trim();
  if(a&&b)return `${a}–${b}`;
  return a||b||"";
};
const whenLabel=d=>{
  const today=new Date(isoToday()+"T12:00:00");
  const cur=new Date(d+"T12:00:00");
  const diff=Math.round((cur-today)/86400000);
  if(diff===0)return "Сьогодні";
  if(diff===1)return "Завтра";
  if(diff===-1)return "Вчора";
  return fullDate(d);
};

function eventCard(x){
  const meta=[timeText(x),x.location].filter(Boolean).join(" · ");
  return `<article class="event-card" style="--project:${esc(x.projectColor||"#d9ff38")}">
    <div class="event-date"><span>${esc(whenLabel(x.date))}</span><small>${esc(shortDate(x.date))}</small></div>
    <div class="event-main">
      <div class="project-name"><i></i>${esc(x.projectName||"Активність")}</div>
      <h3>${esc(x.type||"Подія")}</h3>
      ${meta?`<p class="event-meta">${esc(meta)}</p>`:""}
      ${x.note?`<p class="event-note">${esc(x.note)}</p>`:""}
    </div>
  </article>`;
}

function render(data){
  document.title=`${data.name||"Мій розклад"} — REMS-44`;
  const items=Array.isArray(data.items)?data.items:[];
  const today=isoToday();
  const upcoming=items.filter(x=>x.date>=today);
  const past=items.filter(x=>x.date<today).reverse();

  root.innerHTML=`<section class="hero">
    <div class="eyebrow">Персональний розклад · ${esc(data.group||"REMS-44")}</div>
    <h1>${esc(data.name||"Студент")}</h1>
    <p>Тут відображаються лише твої проєкти та активності. Дані оновлюються автоматично з REMS Control.</p>
    <div class="updated">Оновлено: ${data.updatedAt?new Date(data.updatedAt).toLocaleString("uk-UA",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"щойно"}</div>
  </section>
  <section class="schedule-section">
    <div class="section-head"><h2>Найближчі</h2><span>${upcoming.length}</span></div>
    <div class="events">${upcoming.map(eventCard).join("")||'<div class="empty">Найближчих активностей поки немає.</div>'}</div>
  </section>
  ${past.length?`<details class="past"><summary>Минулі активності · ${past.length}</summary><div class="events past-events">${past.map(eventCard).join("")}</div></details>`:""}
  <footer><span>REMS-44</span><span>Кафедра режисури естради і шоу</span></footer>`;
}

if(!key){
  root.innerHTML='<div class="error"><b>Особисте посилання відсутнє.</b><p>Відкрий посилання, яке надіслав викладач.</p></div>';
}else{
  onSnapshot(doc(db,"rems_student_schedules",key),snap=>{
    if(!snap.exists()){
      root.innerHTML='<div class="error"><b>Розклад не знайдено.</b><p>Можливо, посилання ще не активоване або було змінене.</p></div>';
      return;
    }
    render(snap.data()||{});
  },err=>{
    console.error(err);
    root.innerHTML='<div class="error"><b>Не вдалося завантажити розклад.</b><p>Перевір інтернет-з’єднання та спробуй ще раз.</p></div>';
  });
}
