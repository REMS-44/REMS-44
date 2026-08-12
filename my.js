import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { REMS_FIREBASE_CONFIG } from "./firebase-config.js";

const appFirebase = getApps().length ? getApps()[0] : initializeApp(REMS_FIREBASE_CONFIG);
const db = getFirestore(appFirebase);
const root = document.getElementById("app");
const key = new URLSearchParams(location.search).get("key") || "";

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
}[c]));

const MONTHS = ["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];
const WEEKDAYS = ["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];

const localISODate = (date = new Date()) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};
const parseDate = d => new Date(`${d}T12:00:00`);
const isoToday = () => localISODate();
const timeText = x => {
  const a = String(x.startTime || "").trim();
  const b = String(x.endTime || "").trim();
  if (a && b) return `${a}–${b}`;
  return a || b || "";
};
const fullDate = d => parseDate(d).toLocaleDateString("uk-UA", {
  weekday:"long", day:"numeric", month:"long", year:"numeric"
});
const updatedText = value => {
  if (!value) return "Оновлено щойно";
  const dt = new Date(value);
  if (Number.isNaN(dt.getTime())) return "Оновлено щойно";
  const time = dt.toLocaleTimeString("uk-UA",{hour:"2-digit",minute:"2-digit"});
  return `Оновлено ${dt.toLocaleDateString("uk-UA",{day:"numeric",month:"long"})} о ${time}`;
};

function injectCalendarStyles(){
  if(document.getElementById("remsMyCalendarV1")) return;
  const st=document.createElement("style");
  st.id="remsMyCalendarV1";
  st.textContent=`
    .my-month-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:28px 0 14px}
    .my-month-title{font-size:clamp(22px,3vw,34px);font-weight:900;letter-spacing:-.035em}
    .my-month-nav{display:flex;gap:8px}
    .my-month-nav button{width:42px;height:42px;border:1px solid rgba(255,255,255,.15);border-radius:12px;background:rgba(255,255,255,.06);color:#fff;font:inherit;font-size:20px;cursor:pointer}
    .my-calendar{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));border:1px solid rgba(255,255,255,.12);border-radius:18px;overflow:hidden;background:rgba(255,255,255,.025)}
    .my-weekday{padding:10px;text-align:center;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.55);border-bottom:1px solid rgba(255,255,255,.12)}
    .my-day{min-height:145px;padding:9px;border-right:1px solid rgba(255,255,255,.09);border-bottom:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.015);min-width:0}
    .my-day:nth-child(7n){border-right:0}
    .my-day.empty{background:rgba(255,255,255,.008)}
    .my-day.today{box-shadow:inset 0 0 0 2px #d9ff38}
    .my-day-number{font-size:13px;font-weight:900;margin-bottom:7px;color:#fff}
    .my-day.today .my-day-number{color:#d9ff38}
    .my-events{display:grid;gap:6px}
    .my-cal-event{position:relative;display:grid;grid-template-columns:44px minmax(0,1fr);gap:7px;align-items:center;width:100%;border:0;border-left:3px solid var(--pc,#d9ff38);border-radius:9px;padding:5px;background:rgba(255,255,255,.075);color:#fff;text-align:left;cursor:pointer;font:inherit;overflow:hidden}
    .my-cal-logo{width:44px;height:34px;border-radius:6px;overflow:hidden;background:#111;display:grid;place-items:center;font-size:8px;font-weight:800;text-align:center}
    .my-cal-logo img{width:100%;height:100%;display:block;object-fit:contain;background:#111}
    .my-cal-copy{min-width:0}
    .my-cal-project{font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;color:var(--pc,#d9ff38);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .my-cal-type{font-size:10px;font-weight:800;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .my-cal-time{font-size:8px;color:rgba(255,255,255,.58);margin-top:2px}
    .my-more{font-size:9px;color:rgba(255,255,255,.55);padding:2px 4px}
    .my-empty-month{padding:50px 20px;text-align:center;border:1px solid rgba(255,255,255,.1);border-radius:18px;color:rgba(255,255,255,.55)}
    .my-next{margin:18px 0 26px}
    .my-next-label{font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.08em;color:#d9ff38;margin-bottom:9px}
    .my-next-card{display:grid;grid-template-columns:90px minmax(0,1fr);gap:14px;align-items:center;padding:14px;border:1px solid rgba(255,255,255,.13);border-left:4px solid var(--pc,#d9ff38);border-radius:15px;background:rgba(255,255,255,.045)}
    .my-next-logo{width:90px;height:58px;border-radius:9px;overflow:hidden;background:#111;display:grid;place-items:center;font-size:10px;font-weight:800;text-align:center}
    .my-next-logo img{width:100%;height:100%;object-fit:contain}
    .my-next-card h2{margin:3px 0 5px;font-size:20px}
    .my-next-meta{font-size:11px;color:rgba(255,255,255,.62)}
    .my-dialog{border:1px solid rgba(255,255,255,.16);border-radius:18px;padding:0;background:#17181d;color:#fff;width:min(520px,92vw);box-shadow:0 30px 80px rgba(0,0,0,.55)}
    .my-dialog::backdrop{background:rgba(0,0,0,.68);backdrop-filter:blur(5px)}
    .my-dialog-body{padding:20px}
    .my-dialog-head{display:grid;grid-template-columns:100px minmax(0,1fr);gap:15px;align-items:center;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,.1)}
    .my-dialog-logo{width:100px;height:64px;border-radius:10px;overflow:hidden;background:#0d0e11;display:grid;place-items:center;font-size:10px;font-weight:800;text-align:center}
    .my-dialog-logo img{width:100%;height:100%;object-fit:contain}
    .my-dialog-project{font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.06em;color:var(--pc,#d9ff38)}
    .my-dialog h2{margin:5px 0 0;font-size:24px}
    .my-dialog-rows{display:grid;gap:0;margin-top:8px}
    .my-dialog-row{display:grid;grid-template-columns:90px 1fr;gap:12px;padding:11px 0;border-bottom:1px solid rgba(255,255,255,.08)}
    .my-dialog-row span{font-size:10px;color:rgba(255,255,255,.48);text-transform:uppercase}
    .my-dialog-row b{font-size:12px}
    .my-dialog-close{width:100%;margin-top:16px;padding:11px;border:0;border-radius:10px;background:#fff;color:#111;font-weight:800;cursor:pointer}
    @media(max-width:760px){
      .my-month-toolbar{margin-top:20px}
      .my-calendar{grid-template-columns:repeat(7,minmax(74px,1fr));overflow:visible;min-width:620px}
      .my-calendar-scroll{overflow-x:auto;padding-bottom:8px;margin-right:-16px}
      .my-day{min-height:118px;padding:6px}
      .my-cal-event{grid-template-columns:1fr;padding:5px}
      .my-cal-logo{width:100%;height:30px}
      .my-cal-project{display:none}
      .my-next-card{grid-template-columns:72px minmax(0,1fr)}
      .my-next-logo{width:72px;height:50px}
    }
  `;
  document.head.appendChild(st);
}
injectCalendarStyles();

let currentData=null;
let currentMonth=null;

function fallbackLogo(name=""){
  const n=String(name).toLowerCase();
  if(n.includes("дитяче євробачення")) return "logos/junior-eurovision.png";
  if(n.includes("голос країни")||n.includes("голос 14")) return "logos/holos-krainy.png";
  if(n.includes("танцюють всі")) return "logos/tantsiuiut-vsi.png";
  if(n.includes("фабрика зірок")) return "logos/fabryka-zirok.png";
  return "";
}
function projectInfo(data,x){
  const p=(data.projects && x.projectId && data.projects[x.projectId]) || {};
  return {
    name:x.projectName || p.name || "Активність",
    color:x.projectColor || p.color || "#d9ff38",
    logo:x.projectLogo || p.logo || fallbackLogo(x.projectName || p.name || "")
  };
}
function logoHtml(info, cls){
  return `<div class="${cls}">${info.logo
    ? `<img src="${esc(info.logo)}" alt="${esc(info.name)}">`
    : `<span>${esc(info.name)}</span>`}</div>`;
}
function monthKey(dateStr){ return String(dateStr||"").slice(0,7); }
function monthLabel(key){
  const [y,m]=key.split("-").map(Number);
  return `${MONTHS[m-1]} ${y}`;
}
function shiftMonth(key,delta){
  const [y,m]=key.split("-").map(Number);
  const d=new Date(y,m-1+delta,1,12);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`;
}
function eventButton(data,x){
  const p=projectInfo(data,x);
  return `<button class="my-cal-event" data-event-id="${esc(x.__id)}" style="--pc:${esc(p.color)}">
    ${logoHtml(p,"my-cal-logo")}
    <span class="my-cal-copy">
      <span class="my-cal-project">${esc(p.name)}</span>
      <span class="my-cal-type">${esc(x.type||"Подія")}</span>
      ${timeText(x)?`<span class="my-cal-time">${esc(timeText(x))}</span>`:""}
    </span>
  </button>`;
}
function nearestCard(data,x){
  if(!x) return "";
  const p=projectInfo(data,x);
  return `<section class="my-next">
    <div class="my-next-label">Найближча подія</div>
    <div class="my-next-card" style="--pc:${esc(p.color)}">
      ${logoHtml(p,"my-next-logo")}
      <div>
        <div class="my-cal-project">${esc(p.name)}</div>
        <h2>${esc(x.type||"Подія")}</h2>
        <div class="my-next-meta">${esc(fullDate(x.date))}${timeText(x)?` · ${esc(timeText(x))}`:""}${x.location?` · ${esc(x.location)}`:""}</div>
      </div>
    </div>
  </section>`;
}
function renderCalendar(data,items){
  const key=currentMonth;
  const [year,month]=key.split("-").map(Number);
  const first=new Date(year,month-1,1,12);
  const days=new Date(year,month,0,12).getDate();
  const mondayOffset=(first.getDay()+6)%7;
  const byDate=new Map();
  items.filter(x=>monthKey(x.date)===key).forEach(x=>{
    if(!byDate.has(x.date)) byDate.set(x.date,[]);
    byDate.get(x.date).push(x);
  });

  let cells="";
  for(let i=0;i<mondayOffset;i++) cells+=`<div class="my-day empty"></div>`;
  for(let day=1;day<=days;day++){
    const date=`${year}-${String(month).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
    const evs=byDate.get(date)||[];
    cells+=`<div class="my-day ${date===isoToday()?"today":""}">
      <div class="my-day-number">${day}</div>
      <div class="my-events">
        ${evs.slice(0,3).map(x=>eventButton(data,x)).join("")}
        ${evs.length>3?`<div class="my-more">+ ще ${evs.length-3}</div>`:""}
      </div>
    </div>`;
  }
  return `<div class="my-month-toolbar">
      <div class="my-month-title">${esc(monthLabel(key))}</div>
      <div class="my-month-nav">
        <button id="myPrevMonth" aria-label="Попередній місяць">←</button>
        <button id="myNextMonth" aria-label="Наступний місяць">→</button>
      </div>
    </div>
    <div class="my-calendar-scroll">
      <div class="my-calendar">
        ${WEEKDAYS.map(w=>`<div class="my-weekday">${w}</div>`).join("")}
        ${cells}
      </div>
    </div>`;
}
function ensureDialog(){
  let d=document.getElementById("myEventDialog");
  if(!d){
    d=document.createElement("dialog");
    d.id="myEventDialog";
    d.className="my-dialog";
    document.body.appendChild(d);
  }
  return d;
}
function openEvent(data,x){
  const p=projectInfo(data,x);
  const d=ensureDialog();
  d.style.setProperty("--pc",p.color);
  d.innerHTML=`<div class="my-dialog-body">
    <div class="my-dialog-head">
      ${logoHtml(p,"my-dialog-logo")}
      <div><div class="my-dialog-project">${esc(p.name)}</div><h2>${esc(x.type||"Подія")}</h2></div>
    </div>
    <div class="my-dialog-rows">
      <div class="my-dialog-row"><span>Дата</span><b>${esc(fullDate(x.date))}</b></div>
      ${timeText(x)?`<div class="my-dialog-row"><span>Час</span><b>${esc(timeText(x))}</b></div>`:""}
      ${x.location?`<div class="my-dialog-row"><span>Місце</span><b>${esc(x.location)}</b></div>`:""}
      ${x.note?`<div class="my-dialog-row"><span>Примітка</span><b>${esc(x.note)}</b></div>`:""}
    </div>
    <button class="my-dialog-close">Закрити</button>
  </div>`;
  d.querySelector(".my-dialog-close").onclick=()=>d.close();
  d.showModal();
}
function bindCalendar(data,items){
  document.getElementById("myPrevMonth")?.addEventListener("click",()=>{
    currentMonth=shiftMonth(currentMonth,-1); render(data);
  });
  document.getElementById("myNextMonth")?.addEventListener("click",()=>{
    currentMonth=shiftMonth(currentMonth,1); render(data);
  });
  document.querySelectorAll(".my-cal-event").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const x=items.find(i=>i.__id===btn.dataset.eventId);
      if(x) openEvent(data,x);
    });
  });
}
function render(data){
  currentData=data;
  document.title=`${data.name||"Мій розклад"} — REMS-44`;
  const items=(Array.isArray(data.items)?data.items:[])
    .filter(x=>x&&x.date)
    .map((x,i)=>({...x,__id:String(i)}))
    .sort((a,b)=>`${a.date} ${a.startTime||""}`.localeCompare(`${b.date} ${b.startTime||""}`));

  const upcoming=items.filter(x=>x.date>=isoToday());
  if(!currentMonth){
    const preferred=upcoming[0]?.date || items.at(-1)?.date || isoToday();
    currentMonth=monthKey(preferred);
  }

  root.innerHTML=`
    <section class="hero">
      <div class="eyebrow">Персональний розклад · ${esc(data.group||"REMS-44")}</div>
      <h1>${esc(data.name||"Студент")}</h1>
      <div class="updated">${esc(updatedText(data.updatedAt))}</div>
    </section>
    ${nearestCard(data,upcoming[0]||null)}
    <section class="schedule-wrap">
      ${renderCalendar(data,items)}
    </section>
    <footer><span>REMS-44</span><span>Кафедра режисури естради і шоу</span></footer>
  `;
  bindCalendar(data,items);
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
