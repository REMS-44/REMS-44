import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { REMS_FIREBASE_CONFIG } from "./firebase-config.js";

const appFirebase=getApps().length?getApps()[0]:initializeApp(REMS_FIREBASE_CONFIG);
const db=getFirestore(appFirebase);
const root=document.getElementById("app");
const key=new URLSearchParams(location.search).get("key")||"";
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const MONTHS=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];
const WEEKDAYS=["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];
let currentMonth=null,selectedDate=null;

const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const todayISO=()=>iso(new Date());
const parseDate=s=>new Date(`${s}T12:00:00`);
const monthKey=s=>String(s||"").slice(0,7);
const monthLabel=k=>{const [y,m]=k.split("-").map(Number);return `${MONTHS[m-1]} ${y}`};
const shiftMonth=(k,delta)=>{const [y,m]=k.split("-").map(Number);const d=new Date(y,m-1+delta,1,12);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`};
const timeText=x=>{const a=String(x.startTime||"").trim(),b=String(x.endTime||"").trim();return a&&b?`${a}–${b}`:(a||b||"")};
const fullDate=s=>parseDate(s).toLocaleDateString("uk-UA",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
const updatedText=v=>{if(!v)return"Розклад оновлено";const d=new Date(v);if(Number.isNaN(d.getTime()))return"Розклад оновлено";const t=d.toLocaleTimeString("uk-UA",{hour:"2-digit",minute:"2-digit"});return d.toDateString()===new Date().toDateString()?`Розклад оновлено сьогодні о ${t}`:`Розклад оновлено ${d.toLocaleDateString("uk-UA",{day:"numeric",month:"long"})} о ${t}`};

function fallbackLogo(name=""){
  const n=String(name).toLowerCase();
  if(n.includes("дитяче євробачення"))return"logos/junior-eurovision.png";
  if(n.includes("голос країни")||n.includes("голос 14"))return"logos/holos-krainy.png";
  if(n.includes("танцюють всі"))return"logos/tantsiuiut-vsi.png";
  if(n.includes("фабрика зірок"))return"logos/fabryka-zirok.png";
  return"";
}
function projectInfo(data,x){
  const p=(data.projects&&x.projectId&&data.projects[x.projectId])||{};
  return{name:x.projectName||p.name||"Проєкт",color:x.projectColor||p.color||"#d9ff38",logo:x.projectLogo||p.logo||fallbackLogo(x.projectName||p.name||"")};
}
function logoHtml(p,cls){
  return p.logo?`<div class="${cls}"><img src="${esc(p.logo)}" alt="${esc(p.name)}"></div>`:`<div class="${cls} fallback">${esc(p.name)}</div>`;
}
function nextEvent(items){return items.find(x=>x.date>=todayISO())||null}
function nextStrip(data,x){
  if(!x)return"";
  const p=projectInfo(data,x);
  return `<div class="next-strip"><span class="next-label">Наступна подія</span><span class="next-sep">•</span><b>${esc(parseDate(x.date).toLocaleDateString("uk-UA",{day:"numeric",month:"long"}))}</b><span class="next-sep">•</span><span>${esc(x.type||"Подія")}</span>${logoHtml(p,"next-logo")}${timeText(x)?`<span class="next-time">${esc(timeText(x))}${x.location?`, ${esc(x.location)}`:""}</span>`:""}</div>`;
}
function compactEvent(data,x){
  const p=projectInfo(data,x);
  return `<button class="cal-event" data-event-id="${esc(x.__id)}" style="--pc:${esc(p.color)}">${logoHtml(p,"cal-logo")}<span class="cal-time">${esc(timeText(x)||x.type||"")}</span></button>`;
}
function buildCalendar(data,items){
  const [year,month]=currentMonth.split("-").map(Number);
  const first=new Date(year,month-1,1,12),offset=(first.getDay()+6)%7,days=new Date(year,month,0,12).getDate();
  const byDate=new Map();
  items.filter(x=>monthKey(x.date)===currentMonth).forEach(x=>{if(!byDate.has(x.date))byDate.set(x.date,[]);byDate.get(x.date).push(x)});
  let cells="";
  for(let i=0;i<offset;i++)cells+=`<button class="day-cell outside" disabled></button>`;
  for(let day=1;day<=days;day++){
    const date=`${year}-${String(month).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
    const evs=byDate.get(date)||[];
    cells+=`<button class="day-cell${selectedDate===date?" selected":""}${date===todayISO()?" today":""}" data-date="${date}"><span class="day-number">${day}</span><span class="day-events">${evs.slice(0,2).map(x=>compactEvent(data,x)).join("")}${evs.length>2?`<span class="more-events">+${evs.length-2}</span>`:""}</span></button>`;
  }
  const trailing=(7-((offset+days)%7))%7;
  for(let i=0;i<trailing;i++)cells+=`<button class="day-cell outside" disabled></button>`;
  return `<section class="calendar-panel"><div class="calendar-toolbar"><button class="month-arrow" id="prevMonth">←</button><h2>${esc(monthLabel(currentMonth))}</h2><button class="month-arrow" id="nextMonth">→</button></div><div class="calendar-scroll"><div class="month-grid">${WEEKDAYS.map(w=>`<div class="weekday">${w}</div>`).join("")}${cells}</div></div></section>`;
}
function sidePanel(data,items){
  if(!selectedDate)return`<aside class="day-panel empty-panel"><div class="empty-panel-copy">Натисни на день у календарі, щоб побачити деталі.</div></aside>`;
  const dayItems=items.filter(x=>x.date===selectedDate);
  return `<aside class="day-panel"><div class="day-panel-head"><h2>${esc(parseDate(selectedDate).toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}))}</h2><span>${esc(parseDate(selectedDate).toLocaleDateString("uk-UA",{weekday:"long"}))}</span></div><div class="day-list">${dayItems.length?dayItems.map(x=>{const p=projectInfo(data,x);return`<article class="day-event-card" style="--pc:${esc(p.color)}"><div class="day-event-accent"></div>${logoHtml(p,"day-logo")}<div class="day-event-copy"><div class="day-project">${esc(p.name)}</div><h3>${esc(x.type||"Подія")}</h3>${timeText(x)?`<div class="day-meta">◷ ${esc(timeText(x))}</div>`:""}${x.location?`<div class="day-meta">⌖ ${esc(x.location)}</div>`:""}${x.note?`<div class="day-note">${esc(x.note)}</div>`:""}</div></article>`}).join(""):`<div class="no-events">У цей день подій немає.</div>`}</div></aside>`;
}
function legend(data,items){
  const map=new Map();
  items.forEach(x=>{const p=projectInfo(data,x);if(!map.has(p.name))map.set(p.name,p)});
  return `<div class="legend">${[...map.values()].map(p=>`<span class="legend-item"><i style="background:${esc(p.color)}"></i>${esc(p.name)}</span>`).join("")}</div>`;
}
function bind(data,items){
  document.querySelector("#prevMonth")?.addEventListener("click",()=>{currentMonth=shiftMonth(currentMonth,-1);selectedDate=null;render(data)});
  document.querySelector("#nextMonth")?.addEventListener("click",()=>{currentMonth=shiftMonth(currentMonth,1);selectedDate=null;render(data)});
  document.querySelectorAll(".day-cell[data-date]").forEach(btn=>btn.addEventListener("click",e=>{if(e.target.closest(".cal-event"))return;selectedDate=btn.dataset.date;render(data)}));
  document.querySelectorAll(".cal-event").forEach(btn=>btn.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();const x=items.find(i=>i.__id===btn.dataset.eventId);if(x){selectedDate=x.date;render(data)}}));
}
function render(data){
  document.title=`${data.name||"Мій розклад"} — REMS-44`;
  const items=(Array.isArray(data.items)?data.items:[]).filter(x=>x&&x.date).map((x,i)=>({...x,__id:String(i)})).sort((a,b)=>`${a.date} ${a.startTime||""}`.localeCompare(`${b.date} ${b.startTime||""}`));
  const nearest=nextEvent(items);
  if(!currentMonth)currentMonth=monthKey(nearest?.date||items.at(-1)?.date||todayISO());
  if(!selectedDate&&nearest&&monthKey(nearest.date)===currentMonth)selectedDate=nearest.date;
  root.innerHTML=`<section class="hero"><div><h1>${esc(data.name||"Студент")}</h1><div class="status"><i></i>${esc(updatedText(data.updatedAt))}</div></div></section>${nextStrip(data,nearest)}<div class="calendar-layout">${buildCalendar(data,items)}${sidePanel(data,items)}</div>${legend(data,items)}<footer><span>REMS-44</span><span>Персональний розклад</span></footer>`;
  bind(data,items);
}
if(!key){
  root.innerHTML='<div class="error"><b>Особисте посилання відсутнє.</b><p>Відкрий посилання, яке надіслав викладач.</p></div>';
}else{
  onSnapshot(doc(db,"rems_student_schedules",key),snap=>{
    if(!snap.exists()){root.innerHTML='<div class="error"><b>Розклад не знайдено.</b><p>Можливо, посилання ще не активоване або було змінене.</p></div>';return}
    render(snap.data()||{});
  },err=>{console.error(err);root.innerHTML='<div class="error"><b>Не вдалося завантажити розклад.</b><p>Перевір інтернет-з’єднання та спробуй ще раз.</p></div>'});
}
