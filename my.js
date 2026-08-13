import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, doc, onSnapshot, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { REMS_FIREBASE_CONFIG } from "./firebase-config.js";

const firebaseApp = getApps().length ? getApps()[0] : initializeApp(REMS_FIREBASE_CONFIG);
const db = getFirestore(firebaseApp);
const root = document.getElementById("app");
const KEY_STORAGE = "rems44_personal_schedule_key";
const keyFromUrl = new URLSearchParams(location.search).get("key") || "";

if (keyFromUrl) {
  try { localStorage.setItem(KEY_STORAGE, keyFromUrl); } catch {}
}

const key = keyFromUrl || (() => {
  try { return localStorage.getItem(KEY_STORAGE) || ""; }
  catch { return ""; }
})();

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const MONTHS = ["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];
const WEEKDAYS = ["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];

let currentMonth = null;
let selectedDate = null;
let activeProject = null;
let acknowledgements={},scheduleData=null,ackUnsubs=[];
const ackId=x=>`${key}__${x.__id}`;
function startAckWatch(items){ackUnsubs.forEach(f=>f());ackUnsubs=[];acknowledgements={};items.forEach(x=>ackUnsubs.push(onSnapshot(doc(db,"rems_student_acknowledgements",ackId(x)),s=>{if(s.exists())acknowledgements[x.__id]=s.data();else delete acknowledgements[x.__id];if(scheduleData)render(scheduleData,false)})))}
async function toggleAck(x){const ref=doc(db,"rems_student_acknowledgements",ackId(x));if(acknowledgements[x.__id])return deleteDoc(ref);return setDoc(ref,{scheduleKey:key,eventId:String(x.__id),projectId:String(x.projectId||""),projectName:String(x.projectName||"Проєкт"),date:String(x.date||""),type:String(x.type||""),studentName:String(scheduleData?.name||""),acknowledgedAt:new Date().toISOString()})}

const isoDate = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const todayISO = () => isoDate();
const parseDate = s => new Date(`${s}T12:00:00`);
const monthKey = s => String(s||"").slice(0,7);
const timeText = x => {
  const a = String(x.startTime||"").trim();
  const b = String(x.endTime||"").trim();
  if (a && b) return `${a}–${b}`;
  return a || b || "";
};
const monthLabel = key => {
  const [y,m] = key.split("-").map(Number);
  return `${MONTHS[m-1]} ${y}`;
};
const shiftMonth = (key,delta) => {
  const [y,m] = key.split("-").map(Number);
  const d = new Date(y,m-1+delta,1,12);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`;
};
const updatedText = value => {
  if(!value) return "Дані оновлено";
  const d = new Date(value);
  if(Number.isNaN(d.getTime())) return "Дані оновлено";
  const t = d.toLocaleTimeString("uk-UA",{hour:"2-digit",minute:"2-digit"});
  return d.toDateString() === new Date().toDateString()
    ? `Оновлено сьогодні о ${t}`
    : `Оновлено ${d.toLocaleDateString("uk-UA",{day:"numeric",month:"long"})} о ${t}`;
};
const eventDateLabel = d => parseDate(d).toLocaleDateString("uk-UA",{day:"numeric",month:"long"});
const fullDate = d => parseDate(d).toLocaleDateString("uk-UA",{weekday:"long",day:"numeric",month:"long",year:"numeric"});

function fallbackLogo(name=""){
  const n = String(name).toLowerCase();
  if(n.includes("дитяче євробачення")) return "logos/junior-eurovision.png";
  if(n.includes("голос країни") || n.includes("голос 14")) return "logos/holos-krainy.png";
  if(n.includes("танцюють всі")) return "logos/tantsiuiut-vsi.png";
  if(n.includes("фабрика зірок")) return "logos/fabryka-zirok.png";
  return "";
}

function projectInfo(data,x){
  const p = (data.projects && x.projectId && data.projects[x.projectId]) || {};
  return {
    id:String(x.projectId||""),
    name:x.projectName || p.name || "Проєкт",
    color:x.projectColor || p.color || "#c9ff38",
    logo:x.projectLogo || p.logo || fallbackLogo(x.projectName || p.name || "")
  };
}

function logoHtml(p,cls){
  return p.logo
    ? `<div class="${cls}"><img src="${esc(p.logo)}" alt="${esc(p.name)}"></div>`
    : `<div class="${cls} fallback">${esc(p.name)}</div>`;
}

function sortItems(data){
  return (Array.isArray(data.items)?data.items:[])
    .filter(x=>x&&x.date)
    .map((x,i)=>({...x,__id:String(i)}))
    .sort((a,b)=>`${a.date} ${a.startTime||""}`.localeCompare(`${b.date} ${b.startTime||""}`));
}

function nearest(items){ return items.find(x=>x.date>=todayISO()) || null; }

function projectList(data,items){
  const map = new Map();
  items.forEach(x=>{
    const p = projectInfo(data,x);
    const k = p.id || p.name;
    if(!map.has(k)) map.set(k,{...p,events:[]});
    map.get(k).events.push(x);
  });
  return [...map.values()].map(p=>{
    const upcoming = p.events.filter(x=>x.date>=todayISO());
    return {...p,next:upcoming[0]||null,upcomingCount:upcoming.length};
  }).sort((a,b)=>{
    if(a.next&&b.next) return a.next.date.localeCompare(b.next.date);
    if(a.next) return -1;
    if(b.next) return 1;
    return a.name.localeCompare(b.name,"uk");
  });
}

function nearestBlock(data,item){
  if(!item) return `<section class="nearest"><div class="section-kicker">Найближче</div><div class="empty-text">Найближчих активностей поки немає.</div></section>`;
  const p = projectInfo(data,item);
  return `<section class="nearest">
    <div class="section-kicker">Найближче</div>
    <article class="nearest-card" style="--pc:${esc(p.color)}">
      ${logoHtml(p,"nearest-logo")}
      <div class="nearest-copy">
        <div class="nearest-project">${esc(p.name)}</div>
        <h2>${esc(item.type||"Подія")}</h2>
        <div class="nearest-meta">
          <span>${esc(eventDateLabel(item.date))}</span>
          ${timeText(item)?`<span>${esc(timeText(item))}</span>`:""}
          ${item.location?`<span>${esc(item.location)}</span>`:""}
        </div>
      </div>
    </article>
  </section>`;
}

function projectDetailBlock(data,items,projectKey){
  const filtered = items.filter(x=>{
    const p=projectInfo(data,x);
    return (p.id||p.name)===projectKey;
  });
  if(!filtered.length) return "";
  const p = projectInfo(data,filtered[0]);
  const upcoming = filtered.filter(x=>x.date>=todayISO());
  const rows = upcoming.length ? upcoming : filtered;
  return `<div class="project-detail" style="--pc:${esc(p.color)}">
    <div class="project-detail-head">
      ${logoHtml(p,"project-detail-logo")}
      <div><div class="section-kicker">Дати проєкту</div><h3>${esc(p.name)}</h3></div>
    </div>
    <div class="project-date-list">
      ${rows.map(x=>`<article class="project-date-row">
        <div class="project-date">${esc(eventDateLabel(x.date))}</div>
        <div><b>${esc(x.type||"Подія")}</b><span>${[timeText(x),x.location].filter(Boolean).map(esc).join(" · ")}</span></div>
      </article>`).join("")}
    </div>
  </div>`;
}

function projectsBlock(data,items){
  const projects=projectList(data,items);
  return `<section class="projects-section">
    <div class="section-head">
      <div><div class="section-kicker">Мої проєкти</div><h2>Де я задіяний</h2></div>
      ${activeProject?`<button class="clear-filter" id="clearProject">Показати всі</button>`:""}
    </div>
    ${projects.length?`<div class="project-grid">${projects.map(p=>`<button class="project-card ${activeProject===(p.id||p.name)?"active":""}" data-project="${esc(p.id||p.name)}" style="--pc:${esc(p.color)}">
      ${logoHtml(p,"project-card-logo")}
      <div class="project-card-copy"><h3>${esc(p.name)}</h3><div class="project-card-meta">${p.next?`<span>${p.upcomingCount} ${p.upcomingCount===1?"найближча дата":"найближчих дат"}</span><b>Наступна — ${esc(eventDateLabel(p.next.date))}</b>`:`<span>Немає майбутніх дат</span>`}</div></div>
    </button>`).join("")}</div>`:`<div class="empty-text">Наразі проєктів немає.</div>`}
    ${activeProject?projectDetailBlock(data,items,activeProject):""}
  </section>`;
}

function dayDetails(data,items){
  if(!selectedDate) return `<div class="day-details empty-day">Натисни на дату, щоб побачити події цього дня.</div>`;
  const dayItems=items.filter(x=>x.date===selectedDate);
  return `<div class="day-details">
    <div class="day-details-head"><div class="section-kicker">Обраний день</div><h3>${esc(fullDate(selectedDate))}</h3></div>
    ${dayItems.length?`<div class="day-detail-list">${dayItems.map(x=>{const p=projectInfo(data,x);return `<article class="day-detail-card" style="--pc:${esc(p.color)}">
      ${logoHtml(p,"day-detail-logo")}
      <div><div class="day-detail-project">${esc(p.name)}</div><h4>${esc(x.type||"Подія")}</h4><p>${[timeText(x),x.location].filter(Boolean).map(esc).join(" · ")}</p>${x.note?`<small>${esc(x.note)}</small>`:""}<button class="ack-btn ${acknowledgements[x.__id]?"done":""}" data-ack="${esc(x.__id)}">${acknowledgements[x.__id]?"✓ Ознайомлено":"✓ Ознайомився"}</button></div>
    </article>`}).join("")}</div>`:`<div class="empty-day">У цей день подій немає.</div>`}
  </div>`;
}

function compactCalendar(data,items){
  const [year,month]=currentMonth.split("-").map(Number);
  const first=new Date(year,month-1,1,12);
  const offset=(first.getDay()+6)%7;
  const days=new Date(year,month,0,12).getDate();
  const filteredItems=activeProject?items.filter(x=>{const p=projectInfo(data,x);return (p.id||p.name)===activeProject;}):items;
  const byDate=new Map();
  filteredItems.filter(x=>monthKey(x.date)===currentMonth).forEach(x=>{if(!byDate.has(x.date))byDate.set(x.date,[]);byDate.get(x.date).push(x)});
  let cells="";
  for(let i=0;i<offset;i++) cells+=`<button class="cal-day outside" disabled></button>`;
  for(let d=1;d<=days;d++){
    const date=`${year}-${String(month).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    const evs=byDate.get(date)||[];
    const markers=evs.slice(0,4).map(x=>{const p=projectInfo(data,x);return `<i style="background:${esc(p.color)}"></i>`}).join("");
    cells+=`<button class="cal-day ${date===selectedDate?"selected":""} ${date===todayISO()?"today":""}" data-date="${date}"><span class="cal-number">${d}</span><span class="cal-markers">${markers}</span>${evs.length>4?`<small>+${evs.length-4}</small>`:""}</button>`;
  }
  const trailing=(7-((offset+days)%7))%7;
  for(let i=0;i<trailing;i++) cells+=`<button class="cal-day outside" disabled></button>`;
  return `<section class="calendar-section">
    <div class="section-head calendar-head"><div><div class="section-kicker">Мій календар</div><h2>${esc(monthLabel(currentMonth))}</h2></div><div class="month-nav"><button id="prevMonth">←</button><button id="nextMonth">→</button></div></div>
    <div class="calendar-shell"><div class="weekdays">${WEEKDAYS.map(w=>`<div>${w}</div>`).join("")}</div><div class="calendar-grid">${cells}</div></div>
    ${dayDetails(data,filteredItems)}
  </section>`;
}

function bind(data,items){
  document.querySelectorAll(".project-card").forEach(btn=>btn.onclick=()=>{
    activeProject=btn.dataset.project||null;
    const projectItems=items.filter(x=>{const p=projectInfo(data,x);return (p.id||p.name)===activeProject;});
    const future=projectItems.find(x=>x.date>=todayISO())||projectItems[0];
    if(future){currentMonth=monthKey(future.date);selectedDate=future.date;}
    render(data,false);
  });
  document.querySelector("#clearProject")?.addEventListener("click",()=>{activeProject=null;selectedDate=null;render(data,false)});
  document.querySelector("#prevMonth")?.addEventListener("click",()=>{currentMonth=shiftMonth(currentMonth,-1);selectedDate=null;render(data,false)});
  document.querySelector("#nextMonth")?.addEventListener("click",()=>{currentMonth=shiftMonth(currentMonth,1);selectedDate=null;render(data,false)});
  document.querySelectorAll(".cal-day[data-date]").forEach(btn=>btn.onclick=()=>{selectedDate=btn.dataset.date;render(data,false)});
  document.querySelectorAll("[data-ack]").forEach(btn=>btn.onclick=async()=>{const x=items.find(i=>i.__id===btn.dataset.ack);if(!x)return;btn.disabled=true;try{await toggleAck(x)}catch(err){console.error(err);alert("Не вдалося зберегти підтвердження.")}finally{btn.disabled=false}});
}

function render(data,restartAck=true){
  scheduleData=data;
  document.title=`${data.name||"Мій простір"} — REMS-44`;
  const items=sortItems(data);
  if(restartAck) startAckWatch(items);
  const next=nearest(items);
  if(!currentMonth) currentMonth=monthKey(next?.date||items.at(-1)?.date||todayISO());
  root.innerHTML=`<section class="profile-head"><div class="eyebrow">Персональний простір · ${esc(data.group||"REMS-44")}</div><h1>${esc(data.name||"Студент")}</h1><div class="updated"><i></i>${esc(updatedText(data.updatedAt))}</div></section>${nearestBlock(data,next)}${projectsBlock(data,items)}${compactCalendar(data,items)}<footer><span>REMS-44</span><span>Персональний простір студента</span></footer>`;
  bind(data,items);
}

if(!key){
  root.innerHTML='<div class="error"><b>Особисте посилання відсутнє.</b><p>Відкрий посилання, яке надіслав викладач.</p></div>';
}else{
  onSnapshot(doc(db,"rems_student_schedules",key),snap=>{
    if(!snap.exists()){root.innerHTML='<div class="error"><b>Сторінку не знайдено.</b><p>Можливо, посилання ще не активоване або було змінене.</p></div>';return;}
    render(snap.data()||{});
  },err=>{console.error(err);root.innerHTML='<div class="error"><b>Не вдалося завантажити дані.</b><p>Перевір інтернет-з’єднання та спробуй ще раз.</p></div>';});
}

if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(console.error));}
