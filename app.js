(function(){const s=document.createElement("style");s.textContent=`
.industry-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px}.industry-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:12px;display:grid;gap:9px}.industry-card img,.industry-card-empty{width:100%;aspect-ratio:16/10;object-fit:cover;border-radius:11px;background:#111318;color:#fff;display:grid;place-items:center;font-size:32px}.industry-card-meta{font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em}.industry-card h3,.industry-card p{margin:0}.industry-card p{color:#6b7280;font-size:12px}.industry-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:16px;margin-top:16px}.industry-form-grid label,.industry-block label{display:grid;gap:6px;font-size:12px;color:#374151}.industry-form-grid input,.industry-form-grid textarea,.industry-block input,.industry-block textarea{width:100%;border:1px solid #dfe3e8;border-radius:10px;padding:10px;font:inherit}.industry-form-grid textarea,.industry-block textarea{min-height:110px;resize:vertical}.industry-form-grid .full{grid-column:1/-1}.industry-publish{display:flex!important;grid-template-columns:auto 1fr!important;align-items:center;gap:10px;padding:12px;background:#f8fafc;border-radius:12px}.industry-publish input{width:20px!important;height:20px}.industry-publish span{display:grid}.industry-publish small{color:#6b7280}.industry-builder{margin-top:18px}.industry-addbar{display:flex;flex-wrap:wrap;gap:7px;margin:10px 0 14px}.industry-block{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:13px;margin-bottom:10px;display:grid;gap:9px}.industry-block-head{display:flex;justify-content:space-between;align-items:center}.industry-block-head>div{display:flex;gap:5px}.industry-file{background:#f8fafc;padding:9px;border-radius:9px}.ib-progress{font-size:11px;color:#4b5563}.industry-media-preview{margin-top:7px;width:160px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:#eef1f4;display:none}.industry-media-preview.has-image{display:block}.industry-media-preview img{width:100%;height:100%;object-fit:cover;display:block}.industry-file input[type=file]{margin-top:4px}.industry-savebar{position:sticky;bottom:12px;background:#fffffff2;border:1px solid #e5e7eb;border-radius:14px;padding:10px;margin-top:16px;display:flex;justify-content:space-between;z-index:5}.danger{border:0;background:#fee2e2;color:#991b1b;border-radius:10px;padding:9px 12px;font-weight:700}.loading{padding:30px;color:#6b7280}@media(max-width:700px){.industry-form-grid{grid-template-columns:1fr}.industry-form-grid .full{grid-column:auto}}
`;document.head.appendChild(s)})();

(function injectPublicPublishToggleV37(){
  if(document.getElementById("remsPublicPublishToggleV37")) return;
  const st=document.createElement("style");
  st.id="remsPublicPublishToggleV37";
  st.textContent=`
    .public-publish-toggle{display:flex!important;flex-direction:row!important;align-items:center;gap:12px;padding:14px 16px;border:1px solid #dbe3ef;border-radius:14px;background:#f8fafc;cursor:pointer}
    .public-publish-toggle input{width:20px!important;height:20px!important;flex:0 0 auto}
    .public-publish-toggle span{display:grid;gap:3px}
    .public-publish-toggle small{color:#6b7280;font-size:11px}
  `;
  document.head.appendChild(st);
})();


(function injectStudentListAvatarV36(){
  if(document.getElementById("remsStudentListAvatarV36")) return;
  const st=document.createElement("style");
  st.id="remsStudentListAvatarV36";
  st.textContent=`
    .student-card-main{
      display:grid;
      grid-template-columns:56px minmax(0,1fr);
      gap:12px;
      align-items:center;
      width:100%;
      min-width:0;
    }
    .student-list-avatar{
      width:56px;
      height:56px;
      border-radius:12px;
      overflow:hidden;
      display:grid;
      place-items:center;
      background:#111827;
      color:#fff;
      font-weight:800;
      font-size:18px;
      box-shadow:inset 0 0 0 1px rgba(255,255,255,.08);
    }
    .student-list-avatar img{
      width:100%;
      height:100%;
      display:block;
      object-fit:cover;
      object-position:center 20%;
    }
    .student-card-copy{
      min-width:0;
      text-align:left;
    }
    .student-card-copy h3{
      margin:0 0 3px;
      line-height:1.15;
    }
    .student-card-copy .chips{
      margin-top:8px;
    }
    @media(max-width:620px){
      .student-card-main{
        grid-template-columns:48px minmax(0,1fr);
        gap:10px;
      }
      .student-list-avatar{
        width:48px;
        height:48px;
        border-radius:10px;
        font-size:16px;
      }
    }
  `;
  document.head.appendChild(st);
})();


(function injectScheduleMonthTabsV34(){
  if(document.getElementById("remsScheduleMonthTabsV34")) return;
  const st=document.createElement("style");
  st.id="remsScheduleMonthTabsV34";
  st.textContent=`
    .schedule-month-tabs{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin:18px 0 12px;
      padding:10px;
      border:1px solid #e5e7eb;
      border-radius:14px;
      background:#fff;
      position:sticky;
      top:0;
      z-index:5;
    }
    .schedule-month-tab{
      border:1px solid #dfe3e8;
      background:#fff;
      color:#374151;
      padding:9px 12px;
      border-radius:10px;
      font:inherit;
      font-size:12px;
      cursor:pointer;
    }
    .schedule-month-tab.active{
      background:#111827;
      color:#fff;
      border-color:#111827;
      font-weight:700;
    }
    .schedule-month-single{margin-top:0!important}
    .schedule-month-nav{
      display:flex;
      align-items:center;
      justify-content:flex-end;
      flex-wrap:wrap;
      gap:10px;
    }
    .schedule-month-nav span{
      color:#6b7280;
      font-size:11px;
    }
    .schedule-month-nav button:disabled{
      opacity:.35;
      cursor:not-allowed;
    }
    @media(max-width:700px){
      .schedule-month-tabs{
        flex-wrap:nowrap;
        overflow-x:auto;
        scrollbar-width:thin;
      }
      .schedule-month-tab{white-space:nowrap}
      .schedule-month-head{
        align-items:flex-start!important;
        gap:10px;
      }
      .schedule-month-nav{
        justify-content:flex-start;
      }
      .schedule-month-nav span{
        width:100%;
      }
    }
  `;
  document.head.appendChild(st);
})();


(function injectSharedStudentPhotoStyles(){
  if(document.getElementById("remsSharedStudentPhotoStyles")) return;
  const st=document.createElement("style");
  st.id="remsSharedStudentPhotoStyles";
  st.textContent=`
    .shared-photo-editor{display:grid;grid-template-columns:150px minmax(0,1fr);gap:14px;align-items:center;padding:12px;border:1px solid #e5e7eb;border-radius:14px;background:#f8fafc}
    .shared-photo-preview{width:150px;aspect-ratio:4/5;display:grid;place-items:center;overflow:hidden;border-radius:12px;background:#111318;color:#9ca3af;font-size:11px}
    .shared-photo-preview img{width:100%;height:100%;object-fit:cover}
    .shared-photo-controls{display:grid;gap:8px;min-width:0}
    @media(max-width:620px){.shared-photo-editor{grid-template-columns:1fr}.shared-photo-preview{width:120px}}
  `;
  document.head.appendChild(st);
})();


(function injectStudentCardV31Styles(){
  if(document.getElementById("remsStudentCardV31Styles")) return;
  const st=document.createElement("style");
  st.id="remsStudentCardV31Styles";
  st.textContent=`
    .student-dialog{
      width:min(980px,96vw)!important;
      max-height:92vh!important;
    }

    .profile-hero{
      padding:22px 24px 26px!important;
      background:
        radial-gradient(circle at 82% 0%,rgba(92,70,255,.18),transparent 35%),
        linear-gradient(135deg,#10131b,#1d2230)!important;
    }

    .profile-hero-actions-row{
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap:18px;
      margin-bottom:22px;
      padding-bottom:16px;
      border-bottom:1px solid rgba(255,255,255,.10);
    }

    .profile-hero-context{
      color:#98a2b3;
      font-size:10px;
      line-height:1.2;
      text-transform:uppercase;
      letter-spacing:.12em;
      font-weight:800;
      padding-top:9px;
      white-space:nowrap;
    }

    .profile-hero .hero-actions{
      display:flex!important;
      flex-wrap:wrap!important;
      justify-content:flex-end!important;
      gap:8px!important;
      min-width:0!important;
      flex:1 1 auto!important;
    }

    .profile-hero .hero-actions .ghost,
    .profile-hero .hero-actions a.ghost{
      min-height:38px;
      padding:9px 12px!important;
      border-radius:10px!important;
      white-space:nowrap;
      font-size:11px!important;
      line-height:1.1;
      text-decoration:none;
    }

    .profile-identity{
      display:grid;
      grid-template-columns:124px minmax(0,1fr);
      gap:22px;
      align-items:center;
      min-width:0;
    }

    .profile-identity .profile-photo{
      width:124px!important;
      height:150px!important;
      border-radius:16px!important;
      box-shadow:0 14px 36px rgba(0,0,0,.26)!important;
    }

    .profile-head-copy{
      min-width:0!important;
      padding:0!important;
    }

    .profile-hero h2{
      max-width:none!important;
      margin:0!important;
      font-size:clamp(28px,4vw,42px)!important;
      line-height:1.02!important;
      letter-spacing:-.035em;
      overflow-wrap:anywhere;
    }

    .profile-meta{
      margin-top:10px!important;
      font-size:12px!important;
    }

    .profile-project-pills{
      display:flex;
      flex-wrap:wrap;
      gap:7px;
      margin-top:16px;
    }

    .profile-project-pill{
      display:inline-flex;
      align-items:center;
      max-width:100%;
      padding:7px 10px;
      border-radius:999px;
      background:color-mix(in srgb,var(--pill-color) 84%,#111 16%);
      color:#fff;
      font-size:11px;
      line-height:1;
      font-weight:700;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      box-shadow:inset 0 0 0 1px rgba(255,255,255,.12);
    }

    .profile-no-projects{
      color:#aab2c0;
      font-size:11px;
    }

    @media(max-width:720px){
      .profile-hero-actions-row{
        display:grid;
        grid-template-columns:1fr;
        gap:10px;
      }
      .profile-hero-context{display:none}
      .profile-hero .hero-actions{
        justify-content:flex-start!important;
      }
      .profile-identity{
        grid-template-columns:92px minmax(0,1fr);
        gap:15px;
      }
      .profile-identity .profile-photo{
        width:92px!important;
        height:116px!important;
      }
      .profile-hero h2{
        font-size:clamp(25px,7vw,34px)!important;
      }
    }

    @media(max-width:480px){
      .student-dialog{width:98vw!important}
      .profile-hero{padding:16px!important}
      .profile-hero .hero-actions .ghost,
      .profile-hero .hero-actions a.ghost{
        flex:1 1 auto;
        text-align:center;
      }
      .profile-identity{
        grid-template-columns:1fr;
        align-items:start;
      }
      .profile-identity .profile-photo{
        width:88px!important;
        height:108px!important;
      }
    }
  `;
  document.head.appendChild(st);
})();


(function injectPublicIntegrationStyles(){
  if(document.getElementById("remsPublicIntegrationStyles")) return;
  const st=document.createElement("style");
  st.id="remsPublicIntegrationStyles";
  st.textContent=`
    a.ghost.public-profile-btn,a.ghost.control-public-site-link{
      display:inline-flex;align-items:center;justify-content:center;
      text-decoration:none;box-sizing:border-box;
    }
    .public-profile-btn{font-weight:700}
  `;
  document.head.appendChild(st);
})();


(function injectProjectWatermarkStyles(){
  if(document.getElementById("remsProjectWatermarkStyles")) return;
  const st=document.createElement("style");
  st.id="remsProjectWatermarkStyles";
  st.textContent=`
    .project-watermark{
      position:relative!important;
      overflow:hidden!important;
      isolation:isolate;
      color:#fff!important;
      background:var(--project-color,#4b5563)!important;
      text-shadow:0 1px 2px rgba(0,0,0,.65);
    }
    .project-watermark .project-watermark-logo{
      position:absolute;
      z-index:-2;
      left:50%;
      top:50%;
      width:92%;
      height:92%;
      transform:translate(-50%,-50%);
      object-fit:contain;
      opacity:.52;
      filter:none;
      pointer-events:none;
    }
    .project-watermark .project-watermark-shade{
      position:absolute;
      inset:0;
      z-index:-1;
      background:rgba(0,0,0,.24);
      pointer-events:none;
    }
    .project-watermark .project-watermark-text{
      position:relative;
      z-index:1;
    }

    /* v2.8: календарна подія = кольорова плашка + ОКРЕМИЙ реальний логотип */
    .calendar-project-card{
      display:flex;
      flex-direction:column;
      gap:3px;
      width:100%;
      min-width:0;
    }
    .calendar-event-label{
      display:block;
      width:100%;
      box-sizing:border-box;
      padding:4px 5px;
      border-radius:5px;
      background:var(--project-color,#4b5563);
      color:#fff;
      font-size:9px;
      line-height:1.15;
      font-weight:700;
      text-align:center;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    .calendar-project-logo{
      display:flex;
      align-items:center;
      justify-content:center;
      width:100%;
      height:42px;
      box-sizing:border-box;
      border-radius:6px;
      overflow:hidden;
      background:#111;
    }
    .calendar-project-logo img{
      display:block;
      width:100%;
      height:100%;
      object-fit:cover;
      object-position:center;
    }
    .calendar-project-logo.no-logo{
      background:var(--project-color,#4b5563);
      color:#fff;
      font-size:9px;
      font-weight:700;
      padding:4px;
      text-align:center;
    }
    .student-day-event.calendar-project-event{
      display:block;
      padding:0!important;
      border:0;
      background:transparent!important;
      color:inherit!important;
      text-shadow:none!important;
      overflow:visible!important;
      min-height:0;
    }
    .project-cal-event.calendar-project-event{
      display:block;
      padding:0!important;
      border:0!important;
      background:transparent!important;
      overflow:visible!important;
      white-space:normal!important;
    }

    /* У календарях робимо плашки трохи вищими, щоб реальний логотип читався */
    .student-day-event.project-watermark{
      min-height:25px;
      padding:5px 5px!important;
    }
    .project-cal-event.project-watermark{
      min-height:24px;
      padding:5px 5px!important;
    }
    .busy.project-watermark,
    .week-event-pill.project-watermark,
    .schedule-mini-project.project-watermark{
      min-height:24px;
      padding-top:5px!important;
      padding-bottom:5px!important;
    }

    /* У великих бейджах логотип можна бачити ще чіткіше */
    .chip.project-watermark .project-watermark-logo,
    .project-pill.project-watermark .project-watermark-logo{
      width:82%;
      height:82%;
      opacity:.42;
    }
  `;
  document.head.appendChild(st);
})();

(function injectV21Styles(){
  if(document.getElementById("remsV21Styles")) return;
  const st=document.createElement("style");
  st.id="remsV21Styles";
  st.textContent=`
    button.student-card{font:inherit;color:inherit;text-align:left;width:100%;border:1px solid #e5e7eb;background:#fff;padding:14px;appearance:none}
    button.student-card:hover{transform:translateY(-2px);box-shadow:0 10px 28px #11182712}
    .projects-grid-main{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
    button.project-card{font:inherit;color:inherit;text-align:left;width:100%;appearance:none;border:1px solid #e5e7eb;background:#fff}
    .project-open-arrow{font-size:22px;color:#6b7280}
    .dashboard-projects-head{display:flex;align-items:end;justify-content:space-between;gap:12px;margin:22px 0 10px}
    .dashboard-projects-head h2{margin:0}
    .dashboard-project-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
    .dashboard-project-card{position:relative;overflow:hidden;text-align:left;background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:16px;cursor:pointer;font:inherit;color:inherit;box-shadow:inset 5px 0 0 var(--project-color)}
    .dashboard-project-card:hover{transform:translateY(-2px);box-shadow:inset 5px 0 0 var(--project-color),0 12px 30px #11182712}
    .dashboard-project-top{display:grid;grid-template-columns:78px 1fr auto;gap:12px;align-items:center}
    .dashboard-project-logo{width:78px;height:52px;object-fit:contain;border-radius:9px;background:#f7f7f8}
    .dashboard-project-copy h3{margin:0 0 4px;font-size:17px}
    .dashboard-project-arrow{font-size:24px;color:#6b7280}
    .dashboard-project-period{margin-top:14px;padding-top:12px;border-top:1px solid #eef0f3;font-size:12px;color:#6b7280}
    .dashboard-project-next{margin-top:10px;background:#f7f7f8;border-radius:11px;padding:10px 11px;display:grid;gap:2px}
    .dashboard-project-next span{font-size:10px;color:#6b7280}
    .dashboard-project-next b{font-size:12px}
    .dashboard-project-next small{font-size:10px;color:#6b7280}
    @media(max-width:800px){.projects-grid-main,.dashboard-project-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(st);
})();


(function injectProjectLogoStyles(){
  if(document.getElementById("remsProjectLogoStyles")) return;
  const st=document.createElement("style");
  st.id="remsProjectLogoStyles";
  st.textContent=`
    .project-list-logo{width:54px;height:34px;object-fit:contain;border-radius:7px;background:#fff;flex:0 0 auto}
    .project-card-logo{width:72px;height:42px;object-fit:contain;border-radius:8px;background:#fff;vertical-align:middle;margin-right:8px}
    .project-hero-logo{width:100%;height:100%;object-fit:contain;border-radius:10px;background:#fff}
    .project-pill-logo{width:22px;height:16px;object-fit:contain;border-radius:4px;background:#fff;vertical-align:middle}
    .project-logo:has(.project-hero-logo){padding:5px;background:#fff;min-width:110px;width:110px;height:70px}
  `;
  document.head.appendChild(st);
})();


import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, onSnapshot, collection, getDocs, deleteDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";

const KEY="rems-control-v031-cache";
const OLDKEY="rems-control-v02";
const OLDERKEY="rems-control-v01";
const CLOUD_DOC="main";
const clone=x=>JSON.parse(JSON.stringify(x));
const studentMediaCache=new Map();
let db=JSON.parse(localStorage.getItem(KEY)||localStorage.getItem(OLDKEY)||localStorage.getItem(OLDERKEY)||"null")||clone(window.REMS_SEED);
let cloudDb=null, cloudReady=false, applyingRemote=false, cloudInitializing=false, cloudWriting=false;
let firebaseApp=null, auth=null, currentUser=null, mediaStorage=null;
const projectUiState={};
let currentView="dashboard";
const statusEl=()=>document.querySelector("#cloudStatus");
const setStatus=(text)=>{ if(statusEl()) statusEl().textContent=text; };
const coreDbSnapshot=()=>{
  const clean=clone(db);
  clean.students=(clean.students||[]).map(s=>{
    const out={...s};
    delete out.photoData;
    if(out.publicProfile){
      out.publicProfile={...out.publicProfile};
      delete out.publicProfile.photoData;
    }
    return out;
  });
  return clean;
};
const cache=()=>localStorage.setItem(KEY,JSON.stringify(coreDbSnapshot()));

const setWriteUiReady=(ready)=>{
  const btn=document.querySelector("#quickAdd");
  if(btn){
    btn.disabled=!ready;
    btn.title=ready ? "" : "Зачекайте, поки завантажиться хмарна база";
    btn.style.opacity=ready ? "1" : ".55";
  }
};

const save=async()=>{
  cache();
  if(applyingRemote) return true;
  if(!cloudReady||!cloudDb){
    setStatus("v4.1.2 · немає з’єднання");
    return false;
  }
  try{
    cloudWriting=true;
    setStatus("v4.1.2 · збереження…");
    const payload={...coreDbSnapshot(),updatedAt:new Date().toISOString()};
    await setDoc(
      doc(cloudDb,"rems_control",CLOUD_DOC),
      payload,
      {merge:false}
    );
    cache();
    setStatus("v4.1.2 · хмара ✓");
    // Every derived screen should reflect the edited cloud data.
    // A rendering error must not turn a successful Firestore write into a failed save.
    try{
      refreshCurrentView();
    }catch(renderErr){
      console.error("View refresh after save failed:",renderErr);
    }
    return true;
  }catch(err){
    console.error(err);
    setStatus("v4.1.2 · помилка хмари");
    return false;
  }finally{
    setTimeout(()=>{ cloudWriting=false; },250);
  }
};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const app=$("#app");
const fmt=d=>new Date(d+"T12:00:00").toLocaleDateString("uk-UA",{day:"2-digit",month:"2-digit"});
const fullfmt=d=>new Date(d+"T12:00:00").toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"});
const eventTimeText=e=>{
  const start=String(e?.startTime||"").trim();
  const end=String(e?.endTime||"").trim();
  if(start&&end) return `${start}–${end}`;
  return start||end||"";
};
const eventMetaText=e=>{
  const parts=[];
  const time=eventTimeText(e);
  if(time) parts.push(time);
  const location=String(e?.location||"").trim();
  if(location) parts.push(location);
  return parts.join(" · ");
};
const pBy=id=>db.projects.find(p=>String(p.id)===String(id));

const projectLogoFile=p=>{
  if(p?.logoData) return p.logoData;
  const n=String(p?.name||"").toLowerCase();
  if(n.includes("дитяче євробачення")) return "logos/junior-eurovision.png";
  if(n.includes("голос країни")||n.includes("голос 14")) return "logos/holos-krainy.png";
  if(n.includes("танцюють всі")) return "logos/tantsiuiut-vsi.png";
  if(n.includes("фабрика зірок")) return "logos/fabryka-zirok.png";
  return "";
};
const projectLogoHtml=(p,cls="project-logo-img")=>{
  const src=projectLogoFile(p);
  return src?`<img class="${cls}" src="${src}" alt="${esc(p.name)}">`:`<span>${p.emoji||"◆"}</span>`;
};

async function compressStudentPhoto(file){
  if(!file) return "";
  if(!file.type.startsWith("image/")) throw new Error("Оберіть файл зображення.");
  if(file.size>12*1024*1024) throw new Error("Фото завелике. Максимум 12 МБ.");
  const bitmap=await createImageBitmap(file);
  const maxW=900,maxH=1200;
  const scale=Math.min(1,maxW/bitmap.width,maxH/bitmap.height);
  const w=Math.max(1,Math.round(bitmap.width*scale));
  const h=Math.max(1,Math.round(bitmap.height*scale));
  const canvas=document.createElement("canvas");
  canvas.width=w; canvas.height=h;
  canvas.getContext("2d").drawImage(bitmap,0,0,w,h);
  let q=.82, data=canvas.toDataURL("image/webp",q);
  while(data.length>420000 && q>.50){q-=.08;data=canvas.toDataURL("image/webp",q);}
  if(data.length>500000) throw new Error("Фото не вдалося достатньо стиснути. Спробуйте менший файл.");
  return data;
}
const studentMediaId=s=>publicProfileIdFor(s);
const studentMediaFor=s=>studentMediaCache.get(studentMediaId(s))||null;

const loadStudentMedia=async s=>{
  if(!cloudDb||!s) return null;
  const id=studentMediaId(s);
  if(!id) return null;
  try{
    const snap=await getDoc(doc(cloudDb,"rems_student_media",id));
    if(!snap.exists()){
      studentMediaCache.delete(id);
      return null;
    }
    const data=snap.data()||{};
    studentMediaCache.set(id,data);
    return data;
  }catch(err){
    console.error("Student media load failed:",id,err);
    return null;
  }
};

const loadAllStudentMedia=async()=>{
  if(!cloudDb) return;
  await Promise.all((db.students||[]).map(s=>loadStudentMedia(s)));
};

const saveStudentMedia=async(s,photoData)=>{
  if(!cloudReady||!cloudDb||!currentUser) throw new Error("Хмара не готова");
  const id=studentMediaId(s);
  if(!id) throw new Error("Немає ID студента для фото");
  const payload={
    id,
    studentId:String(s.id),
    name:String(s.name||""),
    photoData:String(photoData||""),
    updatedAt:new Date().toISOString()
  };
  await setDoc(doc(cloudDb,"rems_student_media",id),payload,{merge:false});
  studentMediaCache.set(id,payload);
  return payload;
};

const sharedStudentPhoto=s=>{
  const media=studentMediaFor(s);
  const pub=publicProfileFor?.(s);
  return String(media?.photoData||s?.photoUrl||pub?.photo||"").trim();
};

const projectWatermarkStyle=p=>`--project-color:${p?.color||"#4b5563"};`;
const projectWatermarkInner=(p,text)=>{
  const src=projectLogoFile(p);
  return `${src?`<img class="project-watermark-logo" src="${esc(src)}" alt="">`:""}<span class="project-watermark-shade"></span><span class="project-watermark-text">${text}</span>`;
};
const calendarProjectCard=(p,label)=>{
  const src=projectLogoFile(p);
  return `<span class="calendar-project-card" style="--project-color:${p?.color||"#4b5563"}">
    <span class="calendar-event-label">${label}</span>
    ${src
      ? `<span class="calendar-project-logo"><img src="${esc(src)}" alt="${esc(p?.name||"Проєкт")}"></span>`
      : `<span class="calendar-project-logo no-logo">${esc(p?.name||"Проєкт")}</span>`}
  </span>`;
};


async function compressProjectLogo(file){
  if(!file) return "";
  if(!file.type.startsWith("image/")) throw new Error("Оберіть файл зображення.");
  if(file.size>8*1024*1024) throw new Error("Файл завеликий. Максимум 8 МБ.");

  const bitmap=await createImageBitmap(file);
  const maxW=520,maxH=300;
  const scale=Math.min(1,maxW/bitmap.width,maxH/bitmap.height);
  const w=Math.max(1,Math.round(bitmap.width*scale));
  const h=Math.max(1,Math.round(bitmap.height*scale));
  const canvas=document.createElement("canvas");
  canvas.width=w; canvas.height=h;
  const ctx=canvas.getContext("2d");
  ctx.clearRect(0,0,w,h);
  ctx.drawImage(bitmap,0,0,w,h);

  let quality=.82;
  let data=canvas.toDataURL("image/webp",quality);
  while(data.length>120000 && quality>.42){
    quality-=.10;
    data=canvas.toDataURL("image/webp",quality);
  }
  if(data.length>150000) throw new Error("Не вдалося достатньо стиснути логотип. Спробуйте менше зображення.");
  return data;
}

function ensureEventTimeLocationFields(){
  const form=document.querySelector("#eventForm");
  if(!form || form.querySelector("#eventStartTime")) return;
  const save=document.querySelector("#saveEvent");
  const host=save?.parentElement||form;
  const wrap=document.createElement("div");
  wrap.className="full";
  wrap.style.cssText="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px";
  wrap.innerHTML=`<label>Початок<input id="eventStartTime" type="time"></label>
    <label>Завершення<input id="eventEndTime" type="time"></label>
    <label style="grid-column:1/-1">Локація<input id="eventLocation" placeholder="Напр. ВДНГ · павільйон 3 / ауд. 230 / студія"></label>`;
  if(save?.parentElement) save.parentElement.before(wrap); else form.appendChild(wrap);
}

function ensureNewProjectLogoField(){
  const form=document.querySelector("#projectForm");
  if(!form || form.querySelector("#projectLogoFile")) return;
  const saveBtn=form.querySelector("#saveProject");
  const wrap=document.createElement("label");
  wrap.className="full";
  wrap.style.display="grid";
  wrap.style.gap="6px";
  wrap.innerHTML=`<span>Логотип проєкту</span>
    <input id="projectLogoFile" type="file" accept="image/*">
    <small class="muted">PNG, JPG або WEBP. Зображення автоматично стискається.</small>`;
  if(saveBtn?.parentElement) saveBtn.parentElement.before(wrap);
  else form.appendChild(wrap);
}

const sBy=id=>db.students.find(s=>String(s.id)===String(id));
const resolveStudentId=raw=>db.students.find(s=>String(s.id)===String(raw))?.id;

const REMS44_PUBLIC_BASE="https://rems-44.github.io/REMS-44/";
const REMS44_PUBLIC_PROFILES={"Вінцюк Андрій": "vintsiuk-andrii", "Власенко Даша": "vlasenko-dasha", "Гострик Катя": "hostryk-katya", "Давидова Світлана": "davydova-svitlana", "Жолуденко Поліна": "zholudenko-polina", "Касєєв Данило": "kasieiev-danylo", "Колишкін Андрій": "kolyshkin-andrii", "Кошелєва Мирослава": "koshelieva-myroslava", "Максімова Саміра": "maksimova-samira", "Міленіна Марія": "milenina-mariia", "Олейников Даніїл": "oleinykov-daniil", "Позняк Артур": "pozniak-artur", "Ташута Артем": "tashuta-artem", "Чиньонова Даша": "chynionova-dasha"};
const normalizePersonName=name=>String(name||"").toLowerCase().replace(/[’'`]/g,"").replace(/[^a-zа-яіїєґ0-9 ]/gi," ").replace(/\s+/g," ").trim();
const publicProfileIdFor=s=>{
  if(!s) return "";
  if(REMS44_PUBLIC_PROFILES[s?.name]) return REMS44_PUBLIC_PROFILES[s.name];
  const target=normalizePersonName(s?.name).split(" ").filter(Boolean);
  const surname=target[0]||"", first=target[1]||"";
  const entry=Object.entries(REMS44_PUBLIC_PROFILES).find(([name])=>{
    const n=normalizePersonName(name).split(" ").filter(Boolean);
    return n[0]===surname && (!first||!n[1]||n[1]===first);
  });
  if(entry?.[1]) return entry[1];
  return `control-${String(s.id).replace(/[^a-zA-Z0-9_-]/g,"-")}`;
};
const publicProfileUrlFor=s=>{
  const pid=publicProfileIdFor(s);
  return pid?`${REMS44_PUBLIC_BASE}student.html?id=${encodeURIComponent(pid)}`:"";
};

const REMS44_PUBLIC_SEED={"vintsiuk-andrii":{"id":"vintsiuk-andrii","name":"Вінцюк Андрій","role":"Режисер естради і шоу","photo":"images/Вінцюк Андрій.jpeg","bio":["Андрій Вінцюк — студент спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Цікавиться режисурою концертів, музичних шоу, сценічних номерів і сучасних перформативних форматів."],"skills":["Режисура","Сценарна робота","Робота з виконавцями","Концертні програми"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[{"title":"Відеоробота","youtube":"https://www.youtube.com/watch?v=58ZgRSbX6tU"}],"gallery":[]},"vlasenko-dasha":{"id":"vlasenko-dasha","name":"Власенко Даша","role":"Режисерка естради і шоу","photo":"images/Власенко Даша.jpeg","bio":["Даша Власенко — студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Працює зі сценічними образами, музикою, пластикою, світлом і візуальним оформленням творчих проєктів."],"skills":["Режисура","Сценічний образ","Музична драматургія","Візуальна концепція"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"hostryk-katya":{"id":"hostryk-katya","name":"Гострик Катя","role":"Режисерка естради і шоу","photo":"images/Гострик Катя.jpeg","bio":["Катя Гострик — студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Цікавиться створенням сценічних номерів, перформансів, концертних програм і культурно-мистецьких подій."],"skills":["Режисура","Перформанс","Сценаристика","Організація подій"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"davydova-svitlana":{"id":"davydova-svitlana","name":"Давидова Світлана","role":"Режисерка естради і шоу","photo":"images/Давидова Світлана.jpeg","bio":["Світлана Давидова — студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","У своїх роботах досліджує взаємодію виконавця, музики, сценічного простору та емоційного контакту з глядачем."],"skills":["Робота з виконавцями","Режисура номера","Сценічна композиція","Музичне шоу"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"zholudenko-polina":{"id":"zholudenko-polina","name":"Жолуденко Поліна","role":"Режисерка естради і шоу","photo":"images/Жолуденко Поліна.jpeg","bio":["Поліна Жолуденко — студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Цікавиться образною режисурою, сучасними музичними форматами, сценічною пластикою та візуальною драматургією."],"skills":["Образна режисура","Сценічна пластика","Музичні формати","Візуальна драматургія"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"kasieiev-danylo":{"id":"kasieiev-danylo","name":"Касєєв Данило","role":"Режисер естради і шоу","photo":"images/Касєєв Данило.jpeg","bio":["Данило Касєєв — студент спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Працює з концертними постановками, сценічною дією, музичним матеріалом і сучасними видовищними форматами."],"skills":["Концертна режисура","Сценаристика","Робота з музичним матеріалом","Постановка номерів"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"kolyshkin-andrii":{"id":"kolyshkin-andrii","name":"Колишкін Андрій","role":"Режисер естради і шоу","photo":"images/Колишкін Андрій.jpeg","bio":["Андрій Колишкін — студент спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Цікавиться режисурою концертів, сценічних номерів, телевізійних форматів і великих культурно-мистецьких подій."],"skills":["Концертна режисура","Телеверсія шоу","Сценічна композиція","Організація подій"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"koshelieva-myroslava":{"id":"koshelieva-myroslava","name":"Кошелєва Мирослава","role":"Режисерка естради і шоу","photo":"images/Кошелєва Мирослава.jpeg","bio":["Мирослава Кошелєва — студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","У центрі її творчих інтересів — атмосфера події, робота з виконавцем, музикою, світлом і сценічним простором."],"skills":["Робота з виконавцями","Сценічна атмосфера","Світлове рішення","Режисура подій"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"maksimova-samira":{"id":"maksimova-samira","name":"Максімова Саміра","role":"Режисерка естради і шоу","photo":"images/Максімова Саміра.jpeg","bio":["Саміра Максімова — студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Цікавиться сценічною драматургією, сучасним перформансом, роботою з музикою та візуальними технологіями."],"skills":["Сценічна драматургія","Перформанс","Музичні проєкти","Візуальна концепція"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"milenina-mariia":{"id":"milenina-mariia","name":"Міленіна Марія","role":"Режисерка естради і шоу","photo":"images/Міленіна Марія.jpeg","bio":["Марія Міленіна — студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Працює з музичними номерами, сценічною композицією, образністю та емоційною побудовою видовища."],"skills":["Музичний номер","Композиція","Образне рішення","Робота з артистами"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"oleinykov-daniil":{"id":"oleinykov-daniil","name":"Олейников Даніїл","role":"Режисер естради і шоу","photo":"images/Олейников Даніїл.jpeg","bio":["Даніїл Олейников — студент спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Цікавиться концертними постановками, сучасними шоу, сценічними технологіями та роботою з виконавцями."],"skills":["Режисура шоу","Сценічні технології","Концертна постановка","Робота з артистами"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"pozniak-artur":{"id":"pozniak-artur","name":"Позняк Артур","role":"Режисер естради і шоу","photo":"images/Позняк Артур.jpeg","bio":["Артур Позняк — студент спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Працює з музичними шоу, сценічними номерами, сценарною структурою та сучасними форматами видовищ."],"skills":["Музичне шоу","Сценарна структура","Постановка номерів","Режисура подій"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"tashuta-artem":{"id":"tashuta-artem","name":"Ташута Артем","role":"Режисер естради і шоу","photo":"images/Ташута Артем.jpeg","bio":["Артем Ташута — студент спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Цікавиться постановкою концертних програм, роботою з музикою, світлом, відео та сценічним простором."],"skills":["Концертна програма","Світло","Відеоконтент","Сценічний простір"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"chynionova-dasha":{"id":"chynionova-dasha","name":"Чиньонова Даша","role":"Режисерка естради і шоу","photo":"images/Чиньонова Даша.jpeg","bio":["Даша Чиньонова — студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","У своїх роботах досліджує сценічний образ, музичну драматургію, атмосферу та сучасні візуальні рішення."],"skills":["Сценічний образ","Музична драматургія","Атмосфера події","Візуальні рішення"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]}};
const publicProfileFor=s=>{
  const pid=publicProfileIdFor(s);
  if(!pid) return null;
  const existing=s?.publicProfile||REMS44_PUBLIC_SEED[pid];
  return clone(existing||{
    id:pid,name:s?.name||"",role:"Режисер/ка естради і шоу",
    photo:"",
    bio:[],skills:[],achievements:[],
    socials:{instagram:"",tiktok:"",youtube:"",telegram:"",facebook:"",email:""},
    videos:[],gallery:[],published:false
  });
};
const sanitizePublicProfile=(s,profile)=>{
  const pid=publicProfileIdFor(s)||profile?.id;
  if(!pid) return null;
  return {
    id:pid,name:String(profile?.name||s?.name||"").trim(),role:String(profile?.role||"").trim(),photo:String(profile?.photo||"").trim(),published:profile?.published===true,
    bio:Array.isArray(profile?.bio)?profile.bio.map(x=>String(x).trim()).filter(Boolean):[],
    skills:Array.isArray(profile?.skills)?profile.skills.map(x=>String(x).trim()).filter(Boolean):[],
    achievements:Array.isArray(profile?.achievements)?profile.achievements.map(x=>String(x).trim()).filter(Boolean):[],
    socials:{
      instagram:String(profile?.socials?.instagram||"").trim(),tiktok:String(profile?.socials?.tiktok||"").trim(),
      youtube:String(profile?.socials?.youtube||"").trim(),telegram:String(profile?.socials?.telegram||"").trim(),
      facebook:String(profile?.socials?.facebook||"").trim(),email:String(profile?.socials?.email||"").trim()
    },
    videos:Array.isArray(profile?.videos)?profile.videos.map(v=>({title:String(v?.title||"Відеоробота").trim(),youtube:String(v?.youtube||"").trim()})).filter(v=>v.youtube):[],
    gallery:Array.isArray(profile?.gallery)?profile.gallery.map(x=>String(x).trim()).filter(Boolean):[]
  };
};
const publishOnePublicProfile=async s=>{
  if(!cloudReady||!cloudDb||!currentUser) throw new Error("Хмара не готова");
  const profile=publicProfileFor(s);
  const clean=profile&&sanitizePublicProfile(s,profile);
  if(!clean) return null;
  await setDoc(doc(cloudDb,"rems_public_profiles",clean.id),{
    ...clean,
    updatedAt:new Date().toISOString()
  },{merge:false});
  return clean;
};

const publishPublicProfiles=async()=>{
  if(!cloudReady||!cloudDb||!currentUser) throw new Error("Хмара не готова");
  const published={};
  for(const s of db.students){
    const clean=await publishOnePublicProfile(s);
    if(clean) published[clean.id]=clean;
  }
  return published;
};

const eventsFor=id=>db.events.filter(e=>String(e.projectId)===String(id)).sort((a,b)=>a.date.localeCompare(b.date)||(a.startTime||"").localeCompare(b.startTime||""));
const assForStudent=id=>db.assignments.filter(a=>String(a.studentId)===String(id));
const studentProjects=id=>{
  const ids=new Set(assForStudent(id).map(a=>a.projectId));
  db.events.forEach(e=>{
    if(studentsForEvent(e).some(s=>String(s.id)===String(id))) ids.add(e.projectId);
  });
  return [...ids].map(pBy).filter(Boolean);
};
const projectStudents=id=>db.assignments.filter(a=>String(a.projectId)===String(id)).map(a=>sBy(a.studentId)).filter(Boolean);
const countDays=id=>new Set(
  db.events.filter(e=>studentsForEvent(e).some(s=>String(s.id)===String(id))).map(e=>e.date)
).size;
const eventAssignments=()=>{
  const map={};
  db.events.forEach(e=>{
    const p=pBy(e.projectId);
    if(!p) return;
    studentsForEvent(e).forEach(s=>{
      const k=`${s.id}|${e.date}`;
      (map[k] ||= []).push(p);
    });
  });
  return map;
}
const countConflicts=()=>{
  const map=eventAssignments(); return Object.values(map).filter(v=>v.length>1).length;
}
function updateQuickAddForView(v){
  const btn=$("#quickAdd");
  if(!btn) return;
  if(v==="industry"){
    btn.textContent="+ Нова зустріч";
    btn.title="Створити новий матеріал «Зустріч із індустрією»";
  }else{
    btn.textContent="+ Новий проєкт";
    btn.title="";
  }
}
function switchView(v,label){
  currentView=v;
  $$(".nav").forEach(x=>x.classList.toggle("active",x.dataset.view===v));
  $("#pageTitle").textContent=label||({dashboard:"Головна",students:"Студенти",projects:"Проєкти",calendar:"Календар",schedule:"Розклад",industry:"Зустріч із індустрією"}[v]);
  updateQuickAddForView(v);
  views[v]();
}
function refreshCurrentView(){
  const v=currentView && views[currentView] ? currentView : (document.querySelector(".nav.active")?.dataset.view||"dashboard");
  currentView=v;
  updateQuickAddForView(v);
  views[v]();
}
function dashboard(){
  const assigned=new Set(db.assignments.map(a=>String(a.studentId))).size;
  const conflicts=countConflicts();
  const todayDate=new Date(); todayDate.setHours(12,0,0,0);
  const iso=d=>d.toISOString().slice(0,10);
  const today=iso(todayDate);
  const weekDates=Array.from({length:7},(_,i)=>{const d=new Date(todayDate);d.setDate(d.getDate()+i);return iso(d);});
  const eventsOn=date=>db.events.filter(e=>e.date===date).map(e=>({event:e,project:pBy(e.projectId),students:studentsForEvent(e)})).filter(x=>x.project);
  const todayEvents=eventsOn(today);
  const todayBusyIds=new Set(todayEvents.flatMap(x=>x.students.map(s=>String(s.id))));
  const ukFull=new Intl.DateTimeFormat("uk-UA",{weekday:"long",day:"numeric",month:"long"});
  const ukShort=new Intl.DateTimeFormat("uk-UA",{weekday:"short"});

  app.innerHTML=`
    <div class="today-panel">
      <div class="today-hero">
        <div class="today-hero-top">
          <div><h2>Сьогодні · ${ukFull.format(todayDate)}</h2><div class="muted">${todayEvents.length?`${todayEvents.length} подій`:"Подій немає"}</div></div>
          <div class="today-stats">
            <span class="today-stat">Зайнято: <b>${todayBusyIds.size}</b></span>
            <span class="today-stat">Вільно: <b>${Math.max(0,db.students.length-todayBusyIds.size)}</b></span>
          </div>
        </div>
        <div class="today-events">
          ${todayEvents.map(x=>`<div class="today-event"><span class="dot" style="background:${x.project.color}"></span><div><b>${esc(x.project.name)}</b><small>${esc(x.event.type)}${eventMetaText(x.event)?` · ${esc(eventMetaText(x.event))}`:""} · ${x.students.length} студентів</small></div><span class="chip project-watermark" style="${projectWatermarkStyle(x.project)}">${projectWatermarkInner(x.project,esc(shortType(x.event.type)))}</span></div>`).join("")||'<div class="muted" style="margin-top:8px">Сьогодні у базі немає подій.</div>'}
        </div>
      </div>

      <div class="card">
        <h2 style="margin-top:0">Найближчі 7 днів</h2>
        <div class="week-strip">
          ${weekDates.map(date=>{
            const dt=new Date(date+"T12:00:00"),evs=eventsOn(date);
            const busyIds=new Set(evs.flatMap(x=>x.students.map(s=>String(s.id))));
            return `<button type="button" class="week-day-card ${date===today?"today":""}" data-date="${date}">
              <div class="week-day-head"><div><div class="week-day-name">${ukShort.format(dt)}</div><div class="week-day-num">${dt.getDate()}</div></div><div class="week-day-count">${evs.length} подій</div></div>
              <div class="week-event-list">${evs.slice(0,3).map(x=>`<div class="week-event-pill project-watermark" style="${projectWatermarkStyle(x.project)}">${projectWatermarkInner(x.project,`${eventTimeText(x.event)?`${esc(eventTimeText(x.event))} · `:""}${esc(x.project.name)} · ${esc(shortType(x.event.type))}`)}</div>`).join("")}${evs.length>3?`<div class="week-day-count">+ ще ${evs.length-3}</div>`:""}</div>
              <div class="week-free">${Math.max(0,db.students.length-busyIds.size)} вільних</div>
            </button>`;
          }).join("")}
        </div>
      </div>
    </div>

    ${conflicts?`<div class="notice warn">⚠️ Знайдено конфліктів: <b>${conflicts}</b>.</div>`:`<div class="notice ok">✓ Конфліктів у поточних призначеннях не знайдено.</div>`}

    <div class="grid kpis">
      <div class="card kpi"><span>Студентів</span><strong>${db.students.length}</strong></div>
      <div class="card kpi"><span>Проєктів</span><strong>${db.projects.length}</strong></div>
      <div class="card kpi"><span>Задіяно студентів</span><strong>${assigned}</strong></div>
      <div class="card kpi"><span>Подій у базі</span><strong>${db.events.length}</strong></div>
    </div>

    <div class="dashboard-projects-head"><h2>Проєкти</h2><span class="muted">Натисни на картку, щоб відкрити проєкт</span></div>
    <div class="dashboard-project-grid">
      ${db.projects.map(p=>{
        const evs=eventsFor(p.id), people=projectStudents(p.id);
        const future=evs.filter(e=>e.date>=today);
        const next=future[0]||null;
        const period=evs.length?`${fmt(evs[0].date)} — ${fmt(evs[evs.length-1].date)}`:"Дат ще немає";
        return `<button type="button" class="dashboard-project-card" data-project-id="${esc(String(p.id))}" style="--project-color:${p.color}">
          <div class="dashboard-project-top">
            ${projectLogoHtml(p,"dashboard-project-logo")}
            <div class="dashboard-project-copy">
              <h3>${esc(p.name)}</h3>
              <div class="muted">${evs.length} подій · ${people.length} студентів</div>
            </div>
            <span class="dashboard-project-arrow">→</span>
          </div>
          <div class="dashboard-project-period">${period}</div>
          <div class="dashboard-project-next">${next?`<span>Наступна</span><b>${fmt(next.date)} · ${esc(next.type)}</b>${eventMetaText(next)?`<small>${esc(eventMetaText(next))}</small>`:""}`:'<span>Майбутніх подій немає</span>'}</div>
        </button>`;
      }).join("")}
    </div>`;

  $$(".week-day-card").forEach(x=>x.onclick=()=>showDay(x.dataset.date));
  $$(".dashboard-project-card").forEach(btn=>btn.onclick=()=>openProjectCard(btn.dataset.projectId));
}


const recoveryNormalizeName=v=>String(v||"")
  .trim()
  .toLowerCase()
  .replace(/[’'`]/g,"")
  .replace(/[-_]+/g," ")
  .replace(/\s+/g," ");

const recoveryDownloadBackup=()=>{
  const payload={
    exportedAt:new Date().toISOString(),
    source:"REMS Control before student recovery",
    rems_control:coreDbSnapshot()
  };
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json;charset=utf-8"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download=`REMS-Control-backup-before-recovery-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.json`;
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},500);
};


const shortStudentName=name=>{
  const parts=String(name||"").trim().split(/\s+/).filter(Boolean);
  return parts.length>=2 ? `${parts[0]} ${parts[1]}` : parts.join(" ");
};
const studentPairKey=name=>recoveryNormalizeName(shortStudentName(name));

const downloadDedupeBackup=()=>{
  const payload={
    exportedAt:new Date().toISOString(),
    source:"REMS Control before duplicate cleanup",
    rems_control:coreDbSnapshot()
  };
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json;charset=utf-8"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download=`REMS-Control-backup-before-dedupe-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.json`;
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},500);
};

const studentRichnessScore=s=>{
  const sid=String(s?.id||"");
  const assignments=(db.assignments||[]).filter(a=>String(a.studentId)===sid).length;
  const events=(db.events||[]).filter(e=>Array.isArray(e.studentIds)&&e.studentIds.map(String).includes(sid)).length;
  const profile=s?.publicProfile||{};
  const profileFields=[
    profile.bio,profile.skills,profile.achievements,profile.videos,profile.gallery
  ].reduce((n,v)=>n+(Array.isArray(v)?v.length:0),0);
  const socials=profile.socials&&typeof profile.socials==="object"
    ? Object.values(profile.socials).filter(Boolean).length : 0;
  return assignments*1000 + events*1000 + profileFields*20 + socials*10
    + (profile.published?30:0) + (String(s?.name||"").split(/\s+/).length>=3?5:0);
};

async function cleanupStudentDuplicates(){
  const groups=new Map();
  for(const s of db.students||[]){
    const key=studentPairKey(s.name);
    if(!key) continue;
    if(!groups.has(key)) groups.set(key,[]);
    groups.get(key).push(s);
  }

  const duplicateGroups=[...groups.values()].filter(g=>g.length>1);
  const allNeedShortening=(db.students||[]).filter(s=>shortStudentName(s.name)!==String(s.name||"").trim()).length;

  if(!duplicateGroups.length && !allNeedShortening){
    alert("Дублікатів немає, а імена вже записані без по батькові.");
    return;
  }

  const preview=duplicateGroups.slice(0,12).map(g=>
    `• ${g.map(s=>s.name).join("  ↔  ")}`
  ).join("\n");

  const ok=confirm(
    "Очистити дублікати та залишити імена без по батькові?\n\n"+
    `Знайдено груп дублікатів: ${duplicateGroups.length}\n`+
    `Імен із по батькові для скорочення: ${allNeedShortening}\n\n`+
    (preview?`${preview}${duplicateGroups.length>12?"\n…":""}\n\n`:"")+
    "Що буде зроблено:\n"+
    "• для кожної людини залишиться ОДНА картка;\n"+
    "• ім’я буде у форматі «Прізвище Ім’я»;\n"+
    "• збережеться запис, у якого більше проєктів/подій/профільних даних;\n"+
    "• участь у проєктах і подіях із дубліката буде перенесена;\n"+
    "• фото не видаляються;\n"+
    "• перед змінами автоматично завантажиться резервна JSON-копія.\n\n"+
    "Продовжити?"
  );
  if(!ok) return;

  downloadDedupeBackup();

  let removed=0;
  const idMap=new Map();
  const keepers=[];

  for(const group of groups.values()){
    const ranked=[...group].sort((a,b)=>studentRichnessScore(b)-studentRichnessScore(a));
    const keeper=ranked[0];

    // Prefer richer profile data from any duplicate if keeper lacks it.
    for(const other of ranked.slice(1)){
      if(!keeper.publicProfile && other.publicProfile) keeper.publicProfile=clone(other.publicProfile);
      idMap.set(String(other.id),String(keeper.id));
      removed++;
    }

    keeper.name=shortStudentName(keeper.name);
    if(keeper.publicProfile){
      keeper.publicProfile={...keeper.publicProfile,name:keeper.name};
    }
    keepers.push(keeper);
  }

  // Remap assignments to the kept student id.
  db.assignments=(db.assignments||[]).map(a=>{
    const mapped=idMap.get(String(a.studentId));
    return mapped ? {...a,studentId:mapped} : a;
  });

  // Deduplicate identical assignments after remap.
  const seenAssignments=new Set();
  db.assignments=db.assignments.filter(a=>{
    const k=`${a.studentId}|${a.projectId}`;
    if(seenAssignments.has(k)) return false;
    seenAssignments.add(k);
    return true;
  });

  // Remap event-level student ids and deduplicate them.
  db.events=(db.events||[]).map(e=>{
    if(!Array.isArray(e.studentIds)) return e;
    const ids=e.studentIds.map(x=>idMap.get(String(x))||String(x));
    return {...e,studentIds:[...new Set(ids)]};
  });

  // Shorten every remaining display name, even when there was no duplicate.
  db.students=keepers.map(s=>{
    const out={...s,name:shortStudentName(s.name)};
    if(out.publicProfile) out.publicProfile={...out.publicProfile,name:out.name};
    return out;
  });

  db.students.sort((a,b)=>String(a.name||"").localeCompare(String(b.name||""),"uk"));
  cache();

  const saved=await save();
  if(!saved){
    alert(
      "Дублікати прибрані локально, але Firebase не підтвердив запис.\n"+
      "Резервна копія вже завантажена. Нічого більше не редагуй і повідом мені."
    );
    return;
  }

  await loadAllStudentMedia();
  students();
  alert(
    `Готово.\n\n`+
    `Прибрано дублікатів: ${removed}\n`+
    `Студентів тепер: ${db.students.length}\n`+
    `Імена відображаються без по батькові.\n\n`+
    `Проєкти, події та розклад збережені.`
  );
}


async function recoverStudentsFromFirebase(){
  if(!cloudReady||!cloudDb||!currentUser){
    alert("Хмара ще не готова. Зачекай кілька секунд і спробуй ще раз.");
    return;
  }

  const ok=confirm(
    "Безпечне відновлення студентів\n\n"+
    "REMS Control зараз:\n"+
    "• збере студентів із rems_student_media та rems_public_profiles;\n"+
    "• НЕ видалятиме наявних студентів;\n"+
    "• НЕ чіпатиме проєкти, події, розклад і зустрічі з індустрією;\n"+
    "• перед змінами автоматично завантажить резервну JSON-копію поточного rems_control.\n\n"+
    "Продовжити?"
  );
  if(!ok) return;

  setStatus("v4.1.2 · аналіз відновлення…");

  try{
    const [mediaSnap,profilesSnap]=await Promise.all([
      getDocs(collection(cloudDb,"rems_student_media")),
      getDocs(collection(cloudDb,"rems_public_profiles"))
    ]);

    const mediaDocs=mediaSnap.docs.map(d=>({docId:d.id,...(d.data()||{})}));
    const profileDocs=profilesSnap.docs.map(d=>({docId:d.id,...(d.data()||{})}));

    // Save a local backup BEFORE touching db.
    recoveryDownloadBackup();

    const existingById=new Map((db.students||[]).map(s=>[String(s.id),s]));
    const existingByName=new Map((db.students||[]).map(s=>[recoveryNormalizeName(s.name),s]));

    // Profiles by normalized name. They are useful for profile content, but media
    // is the authoritative source for the original REMS Control student id.
    const profilesByName=new Map();
    profileDocs.forEach(p=>{
      const key=recoveryNormalizeName(p.name);
      if(key) profilesByName.set(key,p);
    });

    let added=0, enriched=0;
    const addedNames=[];

    // First recover from student media because it stores studentId + name + photoData.
    for(const m of mediaDocs){
      const name=String(m.name||"").trim();
      if(!name) continue;
      const nameKey=recoveryNormalizeName(name);
      const sid=String(m.studentId||"").trim();

      let s=(sid&&existingById.get(sid))||existingByName.get(nameKey);

      if(!s){
        // Preserve original student id whenever rems_student_media has it.
        let newId=sid;
        if(!newId || existingById.has(newId)){
          let n=1;
          do{ newId=`recovered-${Date.now()}-${n++}`; }while(existingById.has(newId));
        }

        const pp=profilesByName.get(nameKey);
        s={
          id:newId,
          name,
          group:"РЕМС-44"
        };
        if(pp){
          const clean=sanitizePublicProfile(s,pp);
          if(clean) s.publicProfile=clean;
        }

        db.students.push(s);
        existingById.set(String(s.id),s);
        existingByName.set(nameKey,s);
        added++;
        addedNames.push(name);
      }else{
        const pp=profilesByName.get(nameKey);
        if(pp && !s.publicProfile){
          const clean=sanitizePublicProfile(s,pp);
          if(clean){
            s.publicProfile=clean;
            enriched++;
          }
        }
      }

      // Keep media in the in-memory cache so the recovered photo appears immediately.
      studentMediaCache.set(studentMediaId(s)||m.docId,m);
    }

    // Then recover profile-only students that have no media document.
    for(const p of profileDocs){
      const name=String(p.name||"").trim();
      if(!name) continue;
      const key=recoveryNormalizeName(name);
      if(existingByName.has(key)) continue;

      // For profile-only records use a stable recovered id; never overwrite another id.
      let base=String(p.id||p.docId||"profile").trim();
      let newId=`recovered-${base}`;
      let i=2;
      while(existingById.has(newId)) newId=`recovered-${base}-${i++}`;

      const s={id:newId,name,group:"РЕМС-44"};
      const clean=sanitizePublicProfile(s,p);
      if(clean) s.publicProfile=clean;
      db.students.push(s);
      existingById.set(String(s.id),s);
      existingByName.set(key,s);
      added++;
      addedNames.push(name);
    }

    // Stable Ukrainian alphabetical order makes the recovered list easier to inspect.
    db.students.sort((a,b)=>String(a.name||"").localeCompare(String(b.name||""),"uk"));

    cache();

    // One deliberate cloud write, after the merge is complete.
    const payload={...coreDbSnapshot(),updatedAt:new Date().toISOString()};
    await setDoc(doc(cloudDb,"rems_control",CLOUD_DOC),payload,{merge:false});

    await loadAllStudentMedia();
    setStatus("v4.1.2 · відновлено ✓");
    students();

    alert(
      `Відновлення завершено.\n\n`+
      `Було студентів перед відновленням: ${existingById.size-added}\n`+
      `Додано відсутніх: ${added}\n`+
      `Усього тепер: ${db.students.length}\n`+
      `Профілі доповнено: ${enriched}\n\n`+
      (addedNames.length?`Додані:\n${addedNames.join("\n")}`:"Нових студентів для додавання не знайдено.")+
      `\n\nРезервна копія стану ДО відновлення вже завантажена на комп’ютер.`
    );
  }catch(err){
    console.error("Student recovery failed:",err);
    setStatus("v4.1.2 · помилка відновлення");
    alert(`Не вдалося виконати відновлення.\n${err?.code||err?.message||err}`);
  }
}

function students(){
  app.innerHTML=`
    <div class="toolbar">
      <input id="studentSearch" placeholder="Пошук студента...">
      <select id="studentProjectFilter">
        <option value="">Усі проєкти</option>
        ${db.projects.map(p=>`<option value="${esc(String(p.id))}">${esc(p.name)}</option>`).join("")}
      </select>
      <button type="button" class="ghost" id="recoverStudentsBtn">Відновити студентів із Firebase</button>
      <button type="button" class="ghost" id="cleanupStudentsBtn">Прибрати дублікати</button>
    </div>
    <div class="students-grid" id="studentsGrid"></div>`;

  const render=()=>{
    const q=($("#studentSearch").value||"").toLowerCase().trim();
    const pf=$("#studentProjectFilter").value;

    const rows=db.students.filter(s=>{
      if(!String(s.name||"").toLowerCase().includes(q)) return false;
      if(!pf) return true;
      return studentProjects(s.id).some(p=>String(p.id)===String(pf));
    });

    $("#studentsGrid").innerHTML=rows.map(s=>{
      const ps=studentProjects(s.id);
      return `<button type="button" class="student-card student-open-card" data-student-id="${esc(String(s.id))}">
        <div class="student-card-main">
          <div class="student-list-avatar">
            ${sharedStudentPhoto(s)
              ? `<img src="${esc(sharedStudentPhoto(s))}" alt="${esc(s.name)}">`
              : `<span>${esc((s.name||"?").trim().charAt(0).toUpperCase())}</span>`}
          </div>
          <div class="student-card-copy">
            <h3>${esc(s.name)}</h3>
            <div class="muted">${esc(s.group||"")} · ${countDays(s.id)} зайнятих днів</div>
            <div class="chips">
              ${ps.map(p=>`<span class="chip project-watermark" style="${projectWatermarkStyle(p)}">${projectWatermarkInner(p,esc(p.name))}</span>`).join("")||'<span class="muted">Проєктів ще немає</span>'}
            </div>
          </div>
        </div>
      </button>`;
    }).join("")||'<div class="empty">Нічого не знайдено.</div>';

    $$(".student-open-card").forEach(btn=>{
      btn.onclick=()=>{
        const sid=resolveStudentId(btn.dataset.studentId);
        if(sid===undefined){
          console.error("Student not found:",btn.dataset.studentId);
          return;
        }
        openStudent(sid);
      };
    });
  };

  $("#studentSearch").oninput=render;
  $("#studentProjectFilter").onchange=render;
  $("#recoverStudentsBtn").onclick=recoverStudentsFromFirebase;
  $("#cleanupStudentsBtn").onclick=cleanupStudentDuplicates;
  render();
}

function safeUrl(url){
  if(!url) return "";
  try{
    const u=new URL(url,window.location.href);
    if(!["http:","https:"].includes(u.protocol)) return "";
    return u.href;
  }catch{return "";}
}
function esc(v=""){
  return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}
function profileLink(label,url){
  const safe=safeUrl(url);
  return safe ? `<div><b>${label}:</b> <a href="${safe}" target="_blank" rel="noopener">відкрити</a></div>` : "";
}

function openStudent(id){
  const s=sBy(id);
  if(!s){
    console.error("Student not found",id);
    return;
  }

  const dialog=document.querySelector("#studentDialog");
  const body=document.querySelector("#studentDialogBody");
  if(!dialog||!body){
    console.error("Student dialog missing");
    return;
  }

  // Open immediately, before any derived data is calculated.
  body.innerHTML=`<div class="student-profile"><div class="profile-body"><div class="profile-empty">Завантаження картки…</div></div></div>`;
  if(!dialog.open) dialog.showModal();

  try{
    const ps=studentProjects(id);
    const items=[];
    db.events.forEach(e=>{
      if(!studentsForEvent(e).some(x=>String(x.id)===String(id))) return;
      const p=pBy(e.projectId);
      if(p) items.push({...e,p});
    });
    items.sort((a,b)=>a.date.localeCompare(b.date)||(a.startTime||"").localeCompare(b.startTime||""));

    const photo=sharedStudentPhoto(s);
    const photoBlock=photo
      ? `<div class="profile-photo"><img src="${photo}" alt="${esc(s.name)}"></div>`
      : `<div class="profile-photo">👤</div>`;

    const birthday=s.birthDate
      ? new Date(s.birthDate+"T12:00:00").toLocaleDateString("uk-UA",{day:"2-digit",month:"2-digit",year:"numeric"})
      : "";

    const contacts=[
      s.phone ? `<div class="contact-item"><b>Телефон</b><a href="tel:${esc(s.phone)}">${esc(s.phone)}</a></div>` : "",
      s.email ? `<div class="contact-item"><b>Email</b><a href="mailto:${esc(s.email)}">${esc(s.email)}</a></div>` : "",
      s.instagram ? `<div class="contact-item"><b>Instagram</b><span>${esc(s.instagram)}</span></div>` : "",
      s.telegram ? `<div class="contact-item"><b>Telegram</b><span>${esc(s.telegram)}</span></div>` : ""
    ].filter(Boolean).join("");

    const portfolioItems=[
      ["Резюме",s.resumeUrl,"📄"],["Портфоліо",s.portfolioUrl,"🗂️"],["Відео / роботи",s.worksUrl,"🎬"]
    ].map(([label,url,icon])=>{
      const safe=safeUrl(url);
      return safe?`<a class="portfolio-card" href="${safe}" target="_blank" rel="noopener"><b>${icon} ${label}</b><span>Відкрити</span></a>`:"";
    }).filter(Boolean).join("");

    body.innerHTML=`<div class="student-profile">
      <div class="profile-hero">
        <div class="profile-hero-actions-row">
          <div class="profile-hero-context">Картка студента</div>
          <div class="hero-actions">
            ${publicProfileFor(s)?.published===true?`<a class="ghost public-profile-btn" href="${publicProfileUrlFor(s)}" target="_blank" rel="noopener">Публічна сторінка ↗</a>`:""}<button class="ghost" id="editPublicProfileBtn">${publicProfileFor(s)?.published===true?"Публічний профіль":"Створити публічний профіль"}</button>
            <button class="ghost" id="editStudentBtn">Редагувати</button>
            <button class="ghost" id="closeStudentBtn">Закрити</button>
          </div>
        </div>

        <div class="profile-identity">
          ${photoBlock}
          <div class="profile-head-copy">
            <h2>${esc(s.name)}</h2>
            <div class="profile-meta">
              <span>${esc(s.group||"")}</span>
              ${birthday?`<span>🎂 ${birthday}</span>`:""}
            </div>
            <div class="profile-project-pills">
              ${ps.map(p=>`<span class="profile-project-pill" style="--pill-color:${p.color||"#4f46e5"}">${esc(p.name||"Проєкт")}</span>`).join("")||'<span class="profile-no-projects">Проєктів поки немає</span>'}
            </div>
          </div>
        </div>
      </div>

      <div class="profile-body">
        <div class="contact-grid">${contacts||'<div class="profile-empty">Контакти ще не додані</div>'}</div>

        <div class="profile-stats">
          <div class="profile-stat"><span class="muted">Проєктів</span><strong>${ps.length}</strong></div>
          <div class="profile-stat"><span class="muted">Зайнятих днів</span><strong>${countDays(id)}</strong></div>
          <div class="profile-stat"><span class="muted">Конфліктів</span><strong>${studentConflicts(id)}</strong></div>
        </div>

        <div class="profile-section">
          <div class="profile-section-title"><b>Резюме та портфоліо</b></div>
          <div class="portfolio-grid">${portfolioItems||'<div class="profile-empty">Посилань ще немає</div>'}</div>
        </div>

        ${s.notes?`<div class="profile-section"><div class="profile-section-title"><b>Нотатки</b></div><div class="notes-card">${esc(s.notes)}</div></div>`:""}

        <div class="profile-section">
          <div class="profile-section-title"><b>Календар зайнятості</b><span class="muted">${items.length} подій</span></div>
          <div class="student-cal-toolbar">
            <div class="student-cal-toggle">
              <button class="active" id="studentCalendarMode">Календар</button>
              <button id="studentListMode">Список</button>
            </div>
          </div>
          <div id="studentMonthTabs" class="student-month-tabs"></div>
          <div id="studentCalendarView" class="student-calendar-view"></div>
          <div id="studentListView" class="student-list-view">
            <div class="timeline-scroll"><div class="timeline">
              ${items.map(x=>`<div class="timeline-row">
                <div class="timeline-date">${fullfmt(x.date)}</div>
                <div class="timeline-type">${esc(x.type)}${eventMetaText(x)?`<div class="muted">${esc(eventMetaText(x))}</div>`:""}</div>
                <span class="chip project-watermark" style="${projectWatermarkStyle(x.p)}">${projectWatermarkInner(x.p,esc(x.p.name))}</span>
              </div>`).join("")||'<div class="profile-empty">Подій немає</div>'}
            </div></div>
          </div>
        </div>
      </div>
    </div>`;

    $("#closeStudentBtn").onclick=()=>dialog.close();
    $("#editStudentBtn").onclick=()=>editStudent(id);
    $("#editPublicProfileBtn").onclick=()=>editPublicProfile(id);

    const monthNames={"01":"Січень","02":"Лютий","03":"Березень","04":"Квітень","05":"Травень","06":"Червень","07":"Липень","08":"Серпень","09":"Вересень","10":"Жовтень","11":"Листопад","12":"Грудень"};
    const months=["2026-09","2026-10","2026-11","2026-12","2027-01","2027-02","2027-03","2027-04","2027-05"];

    const renderMonth=month=>{
      $$(".student-month-tab").forEach(b=>b.classList.toggle("active",b.dataset.month===month));
      const [yy,mm]=month.split("-").map(Number);
      const first=new Date(yy,mm-1,1);
      const last=new Date(yy,mm,0);
      const mondayIndex=(first.getDay()+6)%7;
      const heads=["Пн","Вт","Ср","Чт","Пт","Сб","Нд"].map(w=>`<div class="student-month-head">${w}</div>`).join("");
      const blanks=Array.from({length:mondayIndex},()=>`<div class="student-month-day empty"></div>`).join("");
      const cells=Array.from({length:last.getDate()},(_,i)=>{
        const day=i+1;
        const date=`${yy}-${String(mm).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
        const dayItems=items.filter(x=>x.date===date);
        const dow=new Date(date+"T12:00:00").getDay();
        return `<div class="student-month-day ${dow===0||dow===6?"weekend":""}">
          <div class="student-month-number">${day}</div>
          <div class="student-day-events">
            ${dayItems.map((x,idx)=>`<button type="button" class="student-day-event calendar-project-event" data-date="${date}" data-index="${idx}" title="${esc(x.p.name)} · ${esc(x.type)}">${calendarProjectCard(x.p,`${eventTimeText(x)?`${esc(eventTimeText(x))} · `:""}${esc(shortType(x.type))}`)}</button>`).join("")}
          </div>
        </div>`;
      }).join("");
      const monthHasEvents=items.some(x=>x.date.startsWith(month));
      $("#studentCalendarView").innerHTML=`<div class="student-month-grid">${heads}${blanks}${cells}</div>${monthHasEvents?"":'<div class="profile-empty" style="margin-top:8px">У цьому місяці подій немає.</div>'}`;

      $("#studentCalendarView").querySelectorAll(".student-day-event").forEach(el=>el.onclick=()=>{
        const dayItems=items.filter(x=>x.date===el.dataset.date);
        const item=dayItems[Number(el.dataset.index||0)]||dayItems[0];
        if(item) showStudentEventInfo(id,item);
      });
    };

    $("#studentMonthTabs").innerHTML=months.map(m=>{
      const [y,mo]=m.split("-");
      return `<button type="button" class="student-month-tab" data-month="${m}">${monthNames[mo]} ${y}</button>`;
    }).join("");
    $("#studentMonthTabs").querySelectorAll(".student-month-tab").forEach(b=>b.onclick=()=>renderMonth(b.dataset.month));
    renderMonth(months[0]);

    $("#studentCalendarMode").onclick=()=>{
      $("#studentCalendarMode").classList.add("active");
      $("#studentListMode").classList.remove("active");
      $("#studentCalendarView").classList.remove("hidden");
      $("#studentMonthTabs").style.display="";
      $("#studentListView").classList.remove("active");
    };
    $("#studentListMode").onclick=()=>{
      $("#studentListMode").classList.add("active");
      $("#studentCalendarMode").classList.remove("active");
      $("#studentCalendarView").classList.add("hidden");
      $("#studentMonthTabs").style.display="none";
      $("#studentListView").classList.add("active");
    };
  }catch(err){
    console.error("Student profile error:",err);
    body.innerHTML=`<div class="student-profile"><div class="profile-body">
      <h2>${esc(s.name)}</h2>
      <div class="muted">${esc(s.group||"")}</div>
      <div class="notice warn" style="margin-top:16px">Не вдалося завантажити календар. Основна картка студента доступна.</div>
      <div style="display:flex;gap:8px;margin-top:12px">
        <button class="ghost" id="fallbackEditStudent">Редагувати</button>
        <button class="ghost" id="fallbackCloseStudent">Закрити</button>
      </div>
    </div></div>`;
    body.querySelector("#fallbackEditStudent").onclick=()=>editStudent(id);
    body.querySelector("#fallbackCloseStudent").onclick=()=>dialog.close();
  }
}


function editPublicProfile(id){
  const s=sBy(id); if(!s) return;
  const profile=publicProfileFor(s);
  if(!profile){ alert("Для цього студента ще немає публічного профілю REMS-44."); return; }
  const lines=a=>(Array.isArray(a)?a:[]).join("\n");
  const videos=(profile.videos||[]).map(v=>`${v.title||"Відеоробота"} | ${v.youtube||""}`).join("\n");
  $("#studentDialogBody").innerHTML=`<div class="student-profile">
    <div class="profile-head">
      <div><h2>Публічний профіль</h2><div class="muted">${esc(s.name)} · REMS-44</div></div>
      <a class="ghost public-profile-btn" href="${publicProfileUrlFor(s)}" target="_blank" rel="noopener">Переглянути ↗</a>
    </div>
    <form id="publicProfileForm" class="profile-edit-form" style="margin-top:18px">
      <label class="full public-publish-toggle">
        <input id="pubPublished" type="checkbox" ${profile.published===true?"checked":""}>
        <span><b>Показувати цього студента на REMS-44</b><small>${profile.published===true?"Зараз профіль опублікований":"Зараз профіль прихований"}</small></span>
      </label>
      <label class="full">Ім’я на сайті<input id="pubName" value="${esc(profile.name||s.name)}"></label>
      <label class="full">Спеціальність / роль<input id="pubRole" value="${esc(profile.role||"")}"></label>
      <div class="full shared-photo-editor">
        <div class="shared-photo-preview" id="pubPhotoPreview">${sharedStudentPhoto(s)?`<img src="${sharedStudentPhoto(s)}" alt="${esc(s.name)}">`:'<span>Фото ще немає</span>'}</div>
        <div class="shared-photo-controls">
          <b>Спільне фото</b>
          <input id="pubPhotoFile" type="file" accept="image/*">
          <span class="muted">Це фото буде одночасно в Control і на REMS-44.</span>
          <input id="pubPhoto" value="${esc(profile.photo||"")}" placeholder="Або старий шлях images/...">
        </div>
      </div>
      <label class="full">Про себе — один абзац на рядок<textarea id="pubBio" rows="6">${esc(lines(profile.bio))}</textarea></label>
      <label class="full">Навички — одна на рядок<textarea id="pubSkills" rows="5">${esc(lines(profile.skills))}</textarea></label>
      <label class="full">Досягнення — одне на рядок<textarea id="pubAchievements" rows="5">${esc(lines(profile.achievements))}</textarea></label>
      <label>Instagram<input id="pubInstagram" value="${esc(profile.socials?.instagram||"")}"></label>
      <label>TikTok<input id="pubTiktok" value="${esc(profile.socials?.tiktok||"")}"></label>
      <label>YouTube<input id="pubYoutube" value="${esc(profile.socials?.youtube||"")}"></label>
      <label>Telegram<input id="pubTelegram" value="${esc(profile.socials?.telegram||"")}"></label>
      <label>Facebook<input id="pubFacebook" value="${esc(profile.socials?.facebook||"")}"></label>
      <label>Email<input id="pubEmail" value="${esc(profile.socials?.email||"")}"></label>
      <label class="full">Відеороботи — Назва | YouTube-посилання<textarea id="pubVideos" rows="6">${esc(videos)}</textarea></label>
      <label class="full">Галерея — одне посилання/шлях на рядок<textarea id="pubGallery" rows="5">${esc(lines(profile.gallery))}</textarea></label>
      <div class="full notice ok">Публікуються тільки поля з цієї форми. Телефон, календар, внутрішні нотатки та зайнятість сюди не потрапляють.</div>
      <div class="full profile-actions">
        <button type="button" class="ghost" id="cancelPublicEdit">Скасувати</button>
        <button type="submit" class="primary">Зберегти й опублікувати</button>
      </div>
    </form>
  </div>`;
  $("#cancelPublicEdit").onclick=()=>openStudent(id);
  if($("#pubPhotoFile")) $("#pubPhotoFile").onchange=async e=>{
    const f=e.target.files?.[0]; if(!f) return;
    try{
      const data=await compressStudentPhoto(f);
      $("#pubPhotoPreview").innerHTML=`<img src="${data}" alt="Попередній перегляд">`;
    }catch(err){alert(err.message||"Не вдалося обробити фото.");e.target.value="";}
  };

  $("#publicProfileForm").onsubmit=async e=>{
    e.preventDefault();
    const submit=e.submitter||$("#publicProfileForm button[type='submit']");
    if(submit){submit.disabled=true;submit.textContent="Публікація…";}
    const splitLines=v=>String(v||"").split(/\n+/).map(x=>x.trim()).filter(Boolean);
    const parsedVideos=splitLines($("#pubVideos").value).map(line=>{
      const parts=line.split("|");
      return {title:(parts.shift()||"Відеоробота").trim(),youtube:parts.join("|").trim()};
    }).filter(v=>v.youtube);
    const pubPhotoFile=$("#pubPhotoFile")?.files?.[0];
    const sharedPhotoData=pubPhotoFile?await compressStudentPhoto(pubPhotoFile):null;
    const next={...profile,published:$("#pubPublished").checked,name:$("#pubName").value.trim(),role:$("#pubRole").value.trim(),photo:$("#pubPhoto").value.trim(),
      bio:splitLines($("#pubBio").value),skills:splitLines($("#pubSkills").value),achievements:splitLines($("#pubAchievements").value),
      socials:{instagram:$("#pubInstagram").value.trim(),tiktok:$("#pubTiktok").value.trim(),youtube:$("#pubYoutube").value.trim(),
        telegram:$("#pubTelegram").value.trim(),facebook:$("#pubFacebook").value.trim(),email:$("#pubEmail").value.trim()},
      videos:parsedVideos,gallery:splitLines($("#pubGallery").value)};
    db.students=db.students.map(st=>String(st.id)===String(id)?{...st,publicProfile:next}:st);
    const ok=await save();
    if(!ok){
      if(submit){submit.disabled=false;submit.textContent="Зберегти й опублікувати";}
      alert("Не вдалося зберегти зміни в REMS Control."); return;
    }
    try{
      const updated=sBy(id);
      if(updated && sharedPhotoData!==null) await saveStudentMedia(updated,sharedPhotoData);
      if(updated) await publishOnePublicProfile(updated);
      alert(next.published?"Профіль опубліковано на REMS-44.":"Профіль збережено, але він прихований з REMS-44.");
      openStudent(id);
    }catch(err){
      console.error(err);
      if(submit){submit.disabled=false;submit.textContent="Зберегти й опублікувати";}
      alert("У Control зміни збережені, але публікація на REMS-44 заблокована правилами Firestore. Встанови правила з пакета v3.0.");
    }
  };
}

function editStudent(id){
  const s=sBy(id); if(!s) return;
  $("#studentDialogBody").innerHTML=`<div class="student-profile">
    <div class="profile-head"><div><h2>Редагувати картку</h2><div class="muted">${esc(s.name)}</div></div></div>
    <form id="studentEditForm" class="profile-edit-form" style="margin-top:18px">
      <label>Телефон<input id="stPhone" value="${esc(s.phone||"")}" placeholder="+380..."></label>
      <label>Email<input id="stEmail" type="email" value="${esc(s.email||"")}"></label>
      <label>Дата народження<input id="stBirthDate" type="date" value="${esc(s.birthDate||"")}"></label>
      <label>Instagram<input id="stInstagram" value="${esc(s.instagram||"")}" placeholder="@username або посилання"></label>
      <label>Telegram<input id="stTelegram" value="${esc(s.telegram||"")}" placeholder="@username"></label>
      <div class="full shared-photo-editor">
        <div class="shared-photo-preview" id="studentPhotoPreview">${sharedStudentPhoto(s)?`<img src="${sharedStudentPhoto(s)}" alt="${esc(s.name)}">`:'<span>Фото ще немає</span>'}</div>
        <div class="shared-photo-controls">
          <b>Спільне фото студента</b>
          <input id="studentPhotoFile" type="file" accept="image/*">
          <span class="muted">Одне фото для REMS Control і REMS-44.</span>
          <input id="stPhoto" value="${esc(s.photoUrl||"")}" placeholder="Або старе посилання https://...">
          <button type="button" class="ghost" id="removeStudentPhoto">Прибрати фото</button>
        </div>
      </div>
      <label class="full">Резюме — посилання<input id="stResume" value="${esc(s.resumeUrl||"")}" placeholder="https://..."></label>
      <label class="full">Портфоліо — посилання<input id="stPortfolio" value="${esc(s.portfolioUrl||"")}" placeholder="https://..."></label>
      <label class="full">Відео / роботи — посилання<input id="stWorks" value="${esc(s.worksUrl||"")}" placeholder="https://..."></label>
      <label class="full">Нотатки<textarea id="stNotes" placeholder="Внутрішні нотатки">${esc(s.notes||"")}</textarea></label>
      <div class="full profile-actions">
        <button type="button" class="ghost" id="cancelStudentEdit">Скасувати</button>
        <button type="submit" class="primary">Зберегти</button>
      </div>
    </form>
  </div>`;

  $("#cancelStudentEdit").onclick=()=>openStudent(id);

  let removeStudentPhotoRequested=false;
  if($("#removeStudentPhoto")) $("#removeStudentPhoto").onclick=()=>{
    removeStudentPhotoRequested=true;
    if($("#studentPhotoFile")) $("#studentPhotoFile").value="";
    $("#stPhoto").value="";
    $("#studentPhotoPreview").innerHTML="<span>Фото буде прибрано</span>";
  };
  if($("#studentPhotoFile")) $("#studentPhotoFile").onchange=async e=>{
    const f=e.target.files?.[0]; if(!f) return;
    try{
      const data=await compressStudentPhoto(f);
      removeStudentPhotoRequested=false;
      $("#studentPhotoPreview").innerHTML=`<img src="${data}" alt="Попередній перегляд">`;
    }catch(err){alert(err.message||"Не вдалося обробити фото.");e.target.value="";}
  };

  $("#studentEditForm").onsubmit=async e=>{
    e.preventDefault();

    const submit=e.submitter || $("#studentEditForm button[type='submit']");
    if(submit){
      submit.disabled=true;
      submit.textContent="Збереження…";
    }

    const patch={
      phone:$("#stPhone").value.trim(),
      email:$("#stEmail").value.trim(),
      birthDate:$("#stBirthDate").value,
      instagram:$("#stInstagram").value.trim(),
      telegram:$("#stTelegram").value.trim(),
      photoUrl:$("#stPhoto").value.trim(),
      resumeUrl:$("#stResume").value.trim(),
      portfolioUrl:$("#stPortfolio").value.trim(),
      worksUrl:$("#stWorks").value.trim(),
      notes:$("#stNotes").value.trim()
    };

    const photoFile=$("#studentPhotoFile")?.files?.[0];
    let pendingPhotoData=null;
    if(photoFile){
      pendingPhotoData=await compressStudentPhoto(photoFile);
      patch.photoUrl="";
    }else if(removeStudentPhotoRequested){
      pendingPhotoData="";
      patch.photoUrl="";
      const pub=publicProfileFor(s);
      if(pub) patch.publicProfile={...pub,photo:""};
    }

    db.students=db.students.map(student =>
      String(student.id)===String(id) ? {...student,...patch} : student
    );

    const ok=await save();
    if(!ok){
      if(submit){
        submit.disabled=false;
        submit.textContent="Зберегти";
      }
      alert("Не вдалося зберегти картку в хмару.");
      return;
    }

    const updated=sBy(id);
    if(!updated){
      alert("Картку збережено, але не вдалося відкрити студента.");
      return;
    }

    if(pendingPhotoData!==null){
      try{
        await saveStudentMedia(updated,pendingPhotoData);
      }catch(err){
        console.error("Student photo save failed:",err);
        alert("Картку збережено, але фото не вдалося записати окремо.");
      }
    }

    if(publicProfileIdFor(updated)){
      try{
        await publishOnePublicProfile(updated);
      }catch(err){
        console.error("Public sync failed:",err);
        alert("Фото збережено в REMS Control, але публічний сайт ще не оновився. Після оновлення Firestore Rules повтори збереження.");
      }
    }

    openStudent(id);
  };
}
function studentConflicts(id){
  const map=eventAssignments(); return Object.entries(map).filter(([k,v])=>k.startsWith(id+"|")&&v.length>1).length;
}
function projects(){
  app.innerHTML=`<div class="projects-grid-main">${db.projects.map(p=>{
    const assigned=projectStudents(p.id);
    const evs=eventsFor(p.id);
    const next=evs.find(e=>e.date>=new Date().toISOString().slice(0,10))||evs[0];
    return `<button type="button" class="project-card project-open-card" data-project-id="${esc(String(p.id))}">
      <div class="project-card-header">
        <div style="display:flex;gap:12px;align-items:center;min-width:0">
          ${projectLogoHtml(p,"project-card-logo")}
          <div style="text-align:left;min-width:0">
            <h3 style="margin:0">${esc(p.name)}</h3>
            <div class="muted">${evs.length} подій · ${assigned.length} студентів</div>
          </div>
        </div>
        <span class="project-open-arrow">→</span>
      </div>
      <div class="events">${evs.slice(0,4).map(e=>`<span class="event">${fmt(e.date)} · ${esc(e.type)}</span>`).join("")}${evs.length>4?`<span class="event">+${evs.length-4}</span>`:""}</div>
    </button>`;
  }).join("")||'<div class="empty">Проєктів ще немає.</div>'}</div>`;

  $$(".project-open-card").forEach(btn=>{
    btn.onclick=()=>openProjectCard(btn.dataset.projectId);
  });
}

function projectMonthLabel(month){
  const [y,m]=month.split("-").map(Number);
  return new Date(y,m-1,1,12).toLocaleDateString("uk-UA",{month:"long",year:"numeric"});
}

function projectCalendarMonthHtml(projectId,month){
  const p=pBy(projectId); if(!p) return "";
  const [year,mon]=month.split("-").map(Number);
  const daysInMonth=new Date(year,mon,0).getDate();
  const firstDay=(new Date(year,mon-1,1,12).getDay()+6)%7;
  const evs=eventsFor(projectId).filter(e=>e.date.startsWith(month));
  const byDate={};
  evs.forEach(e=>(byDate[e.date] ||= []).push(e));
  const blanks=Array.from({length:firstDay},()=>'<div class="project-cal-day empty"></div>').join("");
  const cells=Array.from({length:daysInMonth},(_,i)=>{
    const day=i+1;
    const date=`${year}-${String(mon).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
    const items=byDate[date]||[];
    const dow=new Date(date+"T12:00:00").getDay();
    return `<button class="project-cal-day ${dow===0||dow===6?"weekend":""} ${items.length?"has-event":""}" data-project-day="${date}" type="button">
      <span class="project-cal-number">${day}</span>
      <span class="project-cal-events">${items.map(e=>`<span class="project-cal-event calendar-project-event">${calendarProjectCard(p,esc(shortType(e.type)))}</span>`).join("")}</span>
    </button>`;
  }).join("");
  return `<div class="project-cal-panel" data-project-month="${month}">
    <div class="project-cal-grid">
      ${["ПН","ВТ","СР","ЧТ","ПТ","СБ","НД"].map(x=>`<div class="project-cal-weekday">${x}</div>`).join("")}
      ${blanks}${cells}
    </div>
  </div>`;
}

function showProjectDay(projectId,date){
  const p=pBy(projectId); if(!p) return;
  projectUiState[projectId]={...(projectUiState[projectId]||{}),month:date.slice(0,7),mode:"calendar"};
  const dialog=ensureProjectCardDialog();
  const evs=eventsFor(projectId).filter(e=>e.date===date);
  const pretty=new Date(date+"T12:00:00").toLocaleDateString("uk-UA",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
  const peopleIds=new Set(evs.flatMap(e=>studentsForEvent(e).map(s=>s.id)));
  const people=db.students.filter(s=>peopleIds.has(s.id));
  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body">
    <div class="project-section-head">
      <div><h2 style="margin:0">${pretty}</h2><div class="muted">${esc(p.name)} · ${evs.length} подій · ${people.length} учасників</div></div>
      <button class="ghost" id="backToProjectCalendar">Назад</button>
    </div>
    <div class="day-event-list">
      ${evs.map((e,i)=>`<div class="day-event-row">
        <span class="dot" style="background:${p.color}"></span>
        <div><b>${esc(e.type)}</b>${eventMetaText(e)?`<div class="day-event-meta">${esc(eventMetaText(e))}</div>`:""}${e.note?`<div class="day-event-meta">${esc(e.note)}</div>`:""}<div class="day-event-meta">${studentsForEvent(e).length} учасників</div></div>
        <div style="display:flex;gap:6px;align-items:center">
          <button class="ghost project-day-edit-event" data-index="${i}">Редагувати</button>
          <button class="ghost project-day-people-event" data-index="${i}">Учасники</button>
          <button class="ghost danger-inline project-day-delete-event" data-index="${i}">Видалити</button>
          <span class="chip project-watermark" style="${projectWatermarkStyle(p)}">${projectWatermarkInner(p,esc(shortType(e.type)))}</span>
        </div>
      </div>`).join("")||'<div class="empty">На цю дату подій немає.</div>'}
    </div>
    <div class="availability-card"><b>Студенти цього дня</b><div class="availability-list">
      ${people.map(s=>`<button class="availability-chip project-day-student" data-id="${s.id}">${esc(s.name)}</button>`).join("")||'<span class="muted">Учасників не призначено.</span>'}
    </div></div>
  </div>`;
  dialog.querySelector("#backToProjectCalendar").onclick=()=>openProjectCard(projectId);
  dialog.querySelectorAll(".project-day-edit-event").forEach(b=>b.onclick=()=>editProjectEvent(projectId,evs[+b.dataset.index]));
  dialog.querySelectorAll(".project-day-people-event").forEach(b=>b.onclick=()=>editEventPeople(projectId,evs[+b.dataset.index]));
  dialog.querySelectorAll(".project-day-delete-event").forEach(b=>{
    b.onclick=async()=>{
      const ev=evs[+b.dataset.index];
      if(!b.classList.contains("armed")){
        b.classList.add("armed");
        b.textContent="Точно видалити?";
        setTimeout(()=>{
          if(document.body.contains(b)){
            b.classList.remove("armed");
            b.textContent="Видалити";
          }
        },3500);
        return;
      }
      const i=db.events.findIndex(x=>x.projectId===projectId&&x.date===ev.date&&x.type===ev.type);
      if(i>=0) db.events.splice(i,1);
      const ok=await save();
      if(!ok) return;
      const remain=eventsFor(projectId).filter(x=>x.date===date);
      if(remain.length) showProjectDay(projectId,date);
      else openProjectCard(projectId);
    };
  });
  dialog.querySelectorAll(".project-day-student").forEach(b=>b.onclick=()=>{
    const sid=resolveStudentId(b.dataset.id);
    if(sid!==undefined) openStudent(sid);
  });
}

function openProjectCard(id){
  const p=pBy(id); if(!p) return;
  const dialog=ensureProjectCardDialog();
  const holder=dialog.querySelector("#projectCardBody");
  holder.innerHTML=`<div class="project-detail"><div class="project-body"><h2>${esc(p.name||"Проєкт")}</h2><div class="profile-empty">Завантаження проєкту…</div></div></div>`;
  if(!dialog.open) dialog.showModal();
  try{
  const evs=eventsFor(id);
  const assigned=projectStudents(id);
  const ui=projectUiState[id]||{mode:"calendar",month:""};
  const availableMonths=[...new Set(evs.map(e=>e.date.slice(0,7)))];
  if(!availableMonths.includes(ui.month)) ui.month=availableMonths[0]||"";
  projectUiState[id]=ui;
  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-detail">
    <div class="project-hero" style="box-shadow:inset 6px 0 0 ${p.color}">
      <div class="project-hero-top">
        <div class="project-title-wrap">
          <div class="project-logo">${projectLogoHtml(p,"project-hero-logo")}</div>
          <div><h2>${esc(p.name)}</h2><div class="muted">${esc(p.description||"")}</div></div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="ghost" id="editProjectBtn">Редагувати</button>
          <button class="ghost" onclick="document.querySelector('#projectCardDialog').close()">Закрити</button>
        </div>
      </div>
    </div>
    <div class="project-body">
      <div class="project-meta-grid">
        <div class="project-meta"><span>Подій</span><strong>${evs.length}</strong></div>
        <div class="project-meta"><span>Студентів</span><strong>${assigned.length}</strong></div>
        <div class="project-meta"><span>Період</span><strong style="font-size:14px">${evs.length?`${fmt(evs[0].date)} — ${fmt(evs[evs.length-1].date)}`:"—"}</strong></div>
      </div>

      <div class="project-section">
        <div class="project-section-head"><b>Студенти</b><span class="muted">${assigned.length}</span></div>
        <div class="project-students">
          ${db.students.map(s=>`<button class="project-student-chip ${assigned.some(x=>String(x.id)===String(s.id))?"active":""}" data-student="${s.id}">${esc(s.name.split(" ")[0])}</button>`).join("")}
        </div>
      </div>

      <div class="project-section">
        <div class="project-section-head">
          <b>Календар проєкту</b>
          <div class="project-calendar-actions"><div class="project-view-switch"><button class="${ui.mode==="list"?"":"active"}" id="projectCalendarMode" type="button">Календар</button><button class="${ui.mode==="list"?"active":""}" id="projectListMode" type="button">Список</button></div><button class="ghost" id="addProjectEventBtn">+ Дата</button></div>
        </div>
        ${(()=>{
          const months=[...new Set(evs.map(e=>e.date.slice(0,7)))];
          if(!months.length) return '<div class="empty">Дат ще немає.</div>';
          const activeMonth=months.includes(ui.month)?ui.month:months[0];
          return `<div id="projectCalendarView" style="${ui.mode==="list"?"display:none":""}">
            <div class="project-month-tabs">${months.map(m=>`<button type="button" class="project-month-tab ${m===activeMonth?"active":""}" data-month="${m}">${projectMonthLabel(m)}</button>`).join("")}</div>
            <div class="project-calendar-panels">${months.map(m=>`<div style="${m===activeMonth?"":"display:none"}" data-month-panel="${m}">${projectCalendarMonthHtml(id,m)}</div>`).join("")}</div>
          </div>`;
        })()}
        <div id="projectListView" style="${ui.mode==="list"?"":"display:none"}">
          <div class="project-event-list">
            ${evs.map((e,i)=>{
              const people=studentsForEvent(e);
              return `<div class="project-event-row" style="grid-template-columns:90px 1fr auto auto auto">
                <b>${fmt(e.date)}</b>
                <span>${esc(e.type)}${eventMetaText(e)?`<div class="muted">${esc(eventMetaText(e))}</div>`:""}<div class="muted">${people.length} учасників</div></span>
                <button class="ghost edit-event-btn" data-index="${i}">Редагувати</button>
                <button class="ghost event-people-btn" data-index="${i}">Учасники</button>
                <button class="ghost delete-event" data-index="${i}">Видалити</button>
              </div>`;
            }).join("")||'<div class="empty">Дат ще немає.</div>'}
          </div>
        </div>
      </div>
    </div>
  </div>`;

  dialog.querySelectorAll(".project-student-chip").forEach(b=>b.onclick=async()=>{
    const sid=resolveStudentId(b.dataset.student);
    if(sid===undefined) return;
    const i=db.assignments.findIndex(a=>String(a.projectId)===String(id)&&String(a.studentId)===String(sid));
    if(i>=0) db.assignments.splice(i,1); else db.assignments.push({projectId:id,studentId:sid});
    await save(); openProjectCard(id);
  });

  dialog.querySelector("#addProjectEventBtn").onclick=()=>{
    $("#eventProjectId").value=id;
    $("#eventDialog").showModal();
  };

  dialog.querySelectorAll(".edit-event-btn").forEach(b=>b.onclick=()=>{
    const ev=eventsFor(id)[+b.dataset.index];
    editProjectEvent(id,ev);
  });

  dialog.querySelectorAll(".event-people-btn").forEach(b=>b.onclick=()=>{
    const ev=eventsFor(id)[+b.dataset.index];
    editEventPeople(id,ev);
  });

  dialog.querySelectorAll(".delete-event").forEach(b=>b.onclick=async()=>{
    const ev=eventsFor(id)[+b.dataset.index];
    const i=db.events.findIndex(x=>x.projectId===id&&x.date===ev.date&&x.type===ev.type);
    if(i>=0) db.events.splice(i,1);
    await save(); openProjectCard(id);
  });

  const calMode=dialog.querySelector("#projectCalendarMode");
  const listMode=dialog.querySelector("#projectListMode");
  const calView=dialog.querySelector("#projectCalendarView");
  const listView=dialog.querySelector("#projectListView");
  if(calMode&&listMode){
    calMode.onclick=()=>{projectUiState[id]={...(projectUiState[id]||{}),mode:"calendar"};calMode.classList.add("active");listMode.classList.remove("active");if(calView)calView.style.display="";if(listView)listView.style.display="none";};
    listMode.onclick=()=>{projectUiState[id]={...(projectUiState[id]||{}),mode:"list"};listMode.classList.add("active");calMode.classList.remove("active");if(calView)calView.style.display="none";if(listView)listView.style.display="";};
  }
  dialog.querySelectorAll(".project-month-tab").forEach(tab=>tab.onclick=()=>{
    projectUiState[id]={...(projectUiState[id]||{}),month:tab.dataset.month,mode:"calendar"};
    dialog.querySelectorAll(".project-month-tab").forEach(x=>x.classList.toggle("active",x===tab));
    dialog.querySelectorAll("[data-month-panel]").forEach(panel=>panel.style.display=panel.dataset.monthPanel===tab.dataset.month?"":"none");
  });
  dialog.querySelectorAll(".project-cal-day.has-event").forEach(day=>day.onclick=()=>showProjectDay(id,day.dataset.projectDay));

  dialog.querySelector("#editProjectBtn").onclick=()=>editProjectCard(id);
  }catch(err){
    console.error("Project card error:",err);
    holder.innerHTML=`<div class="project-detail"><div class="project-body">
      <h2>${esc(p.name||"Проєкт")}</h2>
      <div class="notice warn">Проєкт відкрився, але частина додаткових даних не завантажилась.</div>
      <div style="display:flex;gap:8px;margin-top:14px">
        <button class="ghost" id="fallbackEditProject">Редагувати</button>
        <button class="ghost" id="fallbackCloseProject">Закрити</button>
      </div>
    </div></div>`;
    holder.querySelector("#fallbackEditProject").onclick=()=>editProjectCard(id);
    holder.querySelector("#fallbackCloseProject").onclick=()=>dialog.close();
  }
}



function editProjectEvent(projectId,ev){
  const p=pBy(projectId); if(!p||!ev) return;
  projectUiState[projectId]={...(projectUiState[projectId]||{}),month:ev.date.slice(0,7)};
  const dialog=ensureProjectCardDialog();

  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body">
    <div class="project-section-head">
      <div>
        <h2 style="margin:0">Редагувати подію</h2>
        <div class="muted">${esc(p.name)}</div>
      </div>
      <button class="ghost" id="cancelProjectEventEdit">Назад</button>
    </div>

    <form id="projectEventEditForm" class="project-edit-form event-edit-form" style="margin-top:16px">
      <label class="full">Дата
        <input id="editEventDate" type="date" value="${esc(ev.date||"")}">
      </label>

      <label class="full">Що відбувається
        <input id="editEventType" value="${esc(ev.type||"")}" placeholder="Наприклад: Репетиція, Зйомка, Генеральний прогін">
      </label>

      <div class="event-time-grid full">
        <label>Початок
          <input id="editEventStartTime" type="time" value="${esc(ev.startTime||"")}">
        </label>
        <label>Завершення
          <input id="editEventEndTime" type="time" value="${esc(ev.endTime||"")}">
        </label>
      </div>

      <label class="full">Локація
        <input id="editEventLocation" value="${esc(ev.location||"")}" placeholder="Наприклад: ВДНГ · павільйон 3 / ауд. 230 / студія">
      </label>

      <label class="full">Примітка
        <textarea id="editEventNote" placeholder="Наприклад: збір о 09:30, форма чорна, мати паспорт">${esc(ev.note||"")}</textarea>
      </label>

      <div class="full profile-actions">
        <button type="button" class="ghost" id="cancelProjectEventEditBottom">Скасувати</button>
        <button type="submit" class="primary">Зберегти</button>
      </div>
    </form>
  </div>`;

  const back=()=>openProjectCard(projectId);
  dialog.querySelector("#cancelProjectEventEdit").onclick=back;
  dialog.querySelector("#cancelProjectEventEditBottom").onclick=back;

  dialog.querySelector("#projectEventEditForm").onsubmit=async e=>{
    e.preventDefault();
    const newDate=dialog.querySelector("#editEventDate").value;
    const newType=dialog.querySelector("#editEventType").value.trim();

    if(!newDate||!newType){
      alert("Вкажіть дату і назву події.");
      return;
    }

    // Find the exact original event object in the database and update only date/type.
    // Existing event-specific student assignments are preserved.
    const target=db.events.find(x=>x===ev)
      || db.events.find(x=>x.projectId===projectId&&x.date===ev.date&&x.type===ev.type);

    if(!target){
      alert("Не вдалося знайти подію в базі.");
      return;
    }

    target.date=newDate;
    target.type=newType;
    target.startTime=dialog.querySelector("#editEventStartTime")?.value||"";
    target.endTime=dialog.querySelector("#editEventEndTime")?.value||"";
    target.location=dialog.querySelector("#editEventLocation")?.value.trim()||"";
    target.note=dialog.querySelector("#editEventNote")?.value.trim()||"";
    db.events.sort((a,b)=>a.date.localeCompare(b.date)||(a.startTime||"").localeCompare(b.startTime||""));

    const ok=await save();
    if(!ok){
      alert("Не вдалося зберегти зміну в хмарі.");
      return;
    }
    openProjectCard(projectId);
  };
}

function editEventPeople(projectId,ev){
  const p=pBy(projectId); if(!p) return;
  projectUiState[projectId]={...(projectUiState[projectId]||{}),month:ev.date.slice(0,7)};
  const dialog=ensureProjectCardDialog();
  const projectPeople=projectStudents(projectId);
  const current=studentsForEvent(ev).map(s=>s.id);
  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body">
    <div class="project-section-head">
      <div><h2 style="margin:0">Учасники події</h2><div class="muted">${esc(p.name)} · ${fmt(ev.date)} · ${esc(ev.type)}</div></div>
      <button class="ghost" id="backToProject">Назад</button>
    </div>
    <div class="event-assignment-box">
      <b>Хто працює саме цього дня</b>
      <div class="event-assignment-grid">
        ${projectPeople.map(s=>`<button class="event-person ${current.includes(s.id)?"active":""}" data-id="${s.id}">${esc(s.name)}</button>`).join("")||'<span class="muted">Спочатку додайте студентів до проєкту.</span>'}
      </div>
      <div class="event-assignment-note">Темна кнопка = студент призначений на цю конкретну подію.</div>
    </div>
    <div class="profile-actions">
      <button class="ghost" id="allEventPeople">Всі</button>
      <button class="ghost" id="clearEventPeople">Ніхто</button>
      <button class="primary" id="saveEventPeople">Зберегти</button>
    </div>
  </div>`;

  let selected=new Set(current);
  dialog.querySelectorAll(".event-person").forEach(btn=>btn.onclick=()=>{
    const sid=+btn.dataset.id;
    if(selected.has(sid)) selected.delete(sid); else selected.add(sid);
    btn.classList.toggle("active",selected.has(sid));
  });
  dialog.querySelector("#allEventPeople").onclick=()=>{
    selected=new Set(projectPeople.map(s=>s.id));
    dialog.querySelectorAll(".event-person").forEach(x=>x.classList.add("active"));
  };
  dialog.querySelector("#clearEventPeople").onclick=()=>{
    selected.clear();
    dialog.querySelectorAll(".event-person").forEach(x=>x.classList.remove("active"));
  };
  dialog.querySelector("#backToProject").onclick=()=>openProjectCard(projectId);
  dialog.querySelector("#saveEventPeople").onclick=async()=>{
    const target=db.events.find(x=>x.projectId===ev.projectId&&x.date===ev.date&&x.type===ev.type);
    if(target) target.studentIds=[...selected];
    await save();
    openProjectCard(projectId);
  };
}

function editProjectCard(id){
  const p=pBy(id); if(!p) return;
  const dialog=ensureProjectCardDialog();
  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body">
    <div class="project-section-head"><div><h2 style="margin:0">Редагувати проєкт</h2><div class="muted">${esc(p.name)}</div></div><button class="ghost" onclick="openProjectCard('${id}')">Назад</button></div>
    <form id="projectEditForm" class="project-edit-form">
      <label>Назва<input id="prName" value="${esc(p.name||"")}"></label>
      <label>Позначка<input id="prEmoji" value="${esc(p.emoji||"◆")}"></label>
      <label>Колір<input id="prColor" type="color" value="${esc(p.color||"#2563EB")}"></label>
      <label class="full">Опис<textarea id="prDescription">${esc(p.description||"")}</textarea></label>
      <div class="full project-logo-editor">
        <div class="project-logo-preview" id="prLogoPreview">${projectLogoHtml(p,"project-hero-logo")}</div>
        <div class="project-logo-controls">
          <b>Логотип проєкту</b>
          <input id="prLogoFile" type="file" accept="image/*">
          <button type="button" class="ghost" id="removeProjectLogo">Прибрати власне лого</button>
          <span class="muted">Можна вибрати PNG, JPG або WEBP прямо з комп’ютера.</span>
        </div>
      </div>
      <div class="full profile-actions">
        <button type="button" class="ghost" onclick="openProjectCard('${id}')">Скасувати</button>
        <button type="submit" class="primary">Зберегти</button>
      </div>
    </form>
    <div class="project-danger">
      <button class="danger" id="deleteProjectBtn">Видалити проєкт</button>
    </div>
  </div>`;

  let removeLogoRequested=false;
  dialog.querySelector("#removeProjectLogo").onclick=()=>{
    removeLogoRequested=true;
    dialog.querySelector("#prLogoFile").value="";
    dialog.querySelector("#prLogoPreview").innerHTML=`<span>${p.emoji||"◆"}</span>`;
  };
  dialog.querySelector("#prLogoFile").onchange=async e=>{
    const f=e.target.files?.[0];
    if(!f) return;
    try{
      const data=await compressProjectLogo(f);
      removeLogoRequested=false;
      dialog.querySelector("#prLogoPreview").innerHTML=`<img src="${data}" alt="Попередній перегляд">`;
    }catch(err){
      alert(err.message||"Не вдалося прочитати логотип.");
      e.target.value="";
    }
  };

  dialog.querySelector("#projectEditForm").onsubmit=async e=>{
    e.preventDefault();
    const submit=e.submitter;
    if(submit){submit.disabled=true;submit.textContent="Збереження…";}
    try{
      p.name=$("#prName").value.trim()||p.name;
      p.emoji=$("#prEmoji").value.trim()||"◆";
      p.color=$("#prColor").value;
      p.description=$("#prDescription").value.trim();

      const logoFile=dialog.querySelector("#prLogoFile").files?.[0];
      if(logoFile) p.logoData=await compressProjectLogo(logoFile);
      else if(removeLogoRequested) delete p.logoData;

      const ok=await save();
      if(!ok) throw new Error("Не вдалося зберегти зміни в хмарі.");
      openProjectCard(id);
    }catch(err){
      alert(err.message||"Не вдалося зберегти проєкт.");
      if(submit){submit.disabled=false;submit.textContent="Зберегти";}
    }
  };

  dialog.querySelector("#deleteProjectBtn").onclick=async()=>{
    if(!confirm(`Видалити проєкт «${p.name}» разом з його датами та призначеннями?`)) return;
    db.projects=db.projects.filter(x=>x.id!==id);
    db.events=db.events.filter(x=>x.projectId!==id);
    db.assignments=db.assignments.filter(x=>x.projectId!==id);
    await save();
    dialog.close();
    projects();
  };
}

function datesBetween(start,end){
  const a=[], d=new Date(start+"T12:00:00"), e=new Date(end+"T12:00:00");
  for(;d<=e;d.setDate(d.getDate()+1)) a.push(d.toISOString().slice(0,10));
  return a;
}

function ensureDayDialog(){
  let d=document.querySelector("#dayDialog");
  if(d) return d;
  d=document.createElement("dialog");
  d.id="dayDialog";
  d.className="student-dialog";
  d.innerHTML=`<div id="dayDialogBody"></div>`;
  document.body.appendChild(d);
  return d;
}



function eventKey(e){
  return `${e.projectId}|${e.date}|${e.type}`;
}
function studentsForEvent(e){
  if(Array.isArray(e.studentIds)){
    const ids=new Set(e.studentIds.map(String));
    return db.students.filter(s=>ids.has(String(s.id)));
  }
  return projectStudents(e.projectId);
}


function ensureEventInfoDialog(){
  let d=document.querySelector("#eventInfoDialog");
  if(d) return d;
  d=document.createElement("dialog");
  d.id="eventInfoDialog";
  d.className="student-dialog";
  d.innerHTML=`<div id="eventInfoBody"></div>`;
  document.body.appendChild(d);
  return d;
}

function showStudentEventInfo(studentId,item){
  const d=ensureEventInfoDialog();
  const s=sBy(studentId);
  const meta=eventMetaText(item);
  d.querySelector("#eventInfoBody").innerHTML=`<div class="event-info-card">
    <div class="event-info-head" style="box-shadow:inset 6px 0 0 ${item.p.color}">
      <h2>${esc(item.type)}</h2>
      <div class="muted">${fullfmt(item.date)} · ${esc(item.p.name)}</div>
    </div>
    <div class="event-info-body">
      ${eventTimeText(item)?`<div class="event-info-row"><span>Час</span><b>${esc(eventTimeText(item))}</b></div>`:""}
      ${item.location?`<div class="event-info-row"><span>Локація</span><b>${esc(item.location)}</b></div>`:""}
      ${item.note?`<div class="event-info-row"><span>Примітка</span><b>${esc(item.note)}</b></div>`:""}
      <div class="event-info-row"><span>Студент</span><b>${esc(s?.name||"")}</b></div>
    </div>
    <div class="event-info-actions">
      <button class="ghost" id="eventInfoOpenProject">Відкрити проєкт</button>
      <button class="primary" id="eventInfoClose">Закрити</button>
    </div>
  </div>`;
  d.querySelector("#eventInfoClose").onclick=()=>d.close();
  d.querySelector("#eventInfoOpenProject").onclick=()=>{
    d.close();
    document.querySelector("#studentDialog")?.close();
    openProjectCard(item.p.id);
  };
  d.showModal();
}

function ensureProjectCardDialog(){
  let d=document.querySelector("#projectCardDialog");
  if(d) return d;
  d=document.createElement("dialog");
  d.id="projectCardDialog";
  d.className="student-dialog";
  d.innerHTML=`<div id="projectCardBody"></div>`;
  document.body.appendChild(d);
  return d;
}

function shortType(type=""){
  const t=String(type).toLowerCase();
  if(t.includes("реп")) return "Реп";
  if(t.includes("зйом")) return "Зйомка";
  if(t.includes("каст")) return "Кастинг";
  if(t.includes("прог")) return "Прогін";
  if(t.includes("гала")) return "Гала";
  if(t.includes("ефір")) return "Ефір";
  return type;
}

function showDay(date){
  const dialog=ensureDayDialog();
  const assignedMap=eventAssignments();
  const dayEvents=[];
  db.events.filter(e=>e.date===date).forEach(e=>{
    const p=pBy(e.projectId);
    if(!p) return;
    const students=studentsForEvent(e);
    dayEvents.push({event:e,project:p,students});
  });

  const occupiedIds=new Set();
  dayEvents.forEach(x=>x.students.forEach(s=>occupiedIds.add(s.id)));
  const freeStudents=db.students.filter(s=>!occupiedIds.has(s.id));
  const pretty=new Date(date+"T12:00:00").toLocaleDateString("uk-UA",{weekday:"long",day:"numeric",month:"long",year:"numeric"});

  $("#dayDialogBody",dialog);
  dialog.querySelector("#dayDialogBody").innerHTML=`<div class="day-panel">
    <div class="day-panel-head">
      <div><h2>${pretty}</h2><div class="muted">${dayEvents.length} подій · ${occupiedIds.size} зайнятих студентів · ${freeStudents.length} вільних</div></div>
      <button class="ghost" onclick="document.querySelector('#dayDialog').close()">Закрити</button>
    </div>
    <div class="day-event-list">
      ${dayEvents.map(x=>`<div class="day-event-row">
        <span class="dot" style="background:${x.project.color}"></span>
        <div><b>${esc(x.project.name)}</b><div class="day-event-meta">${esc(x.event.type)} · ${x.students.length} студентів</div></div>
        <span class="chip project-watermark" style="${projectWatermarkStyle(x.project)}">${projectWatermarkInner(x.project,esc(shortType(x.event.type)))}</span>
      </div>`).join("")||'<div class="empty">На цю дату подій немає.</div>'}
    </div>
    <div class="availability-card">
      <b>Вільні студенти</b>
      <div class="availability-list">
        ${freeStudents.map(s=>`<button class="availability-chip day-student" data-id="${s.id}">${esc(s.name.split(" ")[0])}</button>`).join("")||'<span class="muted">Вільних студентів немає.</span>'}
      </div>
    </div>
  </div>`;

  dialog.querySelectorAll(".day-student").forEach(b=>b.onclick=()=>{
    const sid=resolveStudentId(b.dataset.id);
    dialog.close();
    if(sid!==undefined) openStudent(sid);
  });
  dialog.showModal();
}

function calendar(){
  app.innerHTML=`
    <div class="calendar-toolbar">
      <select id="calPeriod">
        <option value="year" selected>Увесь навчальний рік · вересень–травень</option>
        <option value="autumn">Вересень–листопад</option>
        <option value="winter">Грудень–лютий</option>
        <option value="spring">Березень–травень</option>
      </select>
      <select id="calProject"><option value="">Усі проєкти</option>${db.projects.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join("")}</select>
      <input id="calStudent" placeholder="Пошук студента...">
      <select id="calType">
        <option value="">Усі типи подій</option>
        <option value="Репетиція">Репетиція</option>
        <option value="Зйомка">Зйомка</option>
        <option value="Кастинг">Кастинг</option>
        <option value="Прогін">Прогін</option>
        <option value="Гала">Гала-концерт</option>
      </select>
    </div>
    <div class="calendar-legend">${db.projects.map(p=>`<span class="legend-item"><span class="dot" style="background:${p.color}"></span>${esc(p.name)}</span>`).join("")}</div>
    <div id="calendarSummary" class="calendar-summary"></div>
    <div id="calendarMount"></div>`;

  const render=()=>{
    const period=$("#calPeriod").value;
    const ranges={autumn:["2026-09-01","2026-11-30"],winter:["2026-12-01","2027-02-28"],spring:["2027-03-01","2027-05-31"],year:["2026-09-01","2027-05-31"]};
    const [start,end]=ranges[period];
    const dates=datesBetween(start,end);
    const pf=$("#calProject").value;
    const q=$("#calStudent").value.toLowerCase().trim();
    const tf=$("#calType").value.toLowerCase();

    const students=db.students.filter(s=>{
      if(!s.name.toLowerCase().includes(q)) return false;
      if(!pf) return true;
      return db.events.some(e=>e.projectId===pf && studentsForEvent(e).some(x=>x.id===s.id));
    });
    const rawMap=eventAssignments();

    const map={};
    Object.entries(rawMap).forEach(([key,projects])=>{
      const [sid,date]=key.split("|");
      const filtered=projects.filter(p=>{
        if(pf && p.id!==pf) return false;
        if(tf){
          const sidNum=Number(sid);
          const matches=eventsFor(p.id).some(e=>
            e.date===date &&
            e.type.toLowerCase().includes(tf) &&
            studentsForEvent(e).some(s=>s.id===sidNum)
          );
          if(!matches) return false;
        }
        return true;
      });
      if(filtered.length) map[key]=filtered;
    });

    const busyCells=Object.keys(map).length;
    const conflicts=Object.values(map).filter(arr=>arr.length>1).length;
    const uniqueBusyStudents=new Set(Object.keys(map).map(k=>k.split("|")[0])).size;
    $("#calendarSummary").innerHTML=`
      <span class="summary-pill">Студентів у вибірці: <b>${students.length}</b></span>
      <span class="summary-pill">Зайнятих студентів: <b>${uniqueBusyStudents}</b></span>
      <span class="summary-pill">Заповнених клітинок: <b>${busyCells}</b></span>
      <span class="summary-pill">Конфліктів: <b>${conflicts}</b></span>`;

    const monthGroups={};
    dates.forEach(d=>{
      const key=d.slice(0,7);
      (monthGroups[key] ||= []).push(d);
    });

    const monthNames={
      "2026-09":"Вересень 2026","2026-10":"Жовтень 2026","2026-11":"Листопад 2026",
      "2026-12":"Грудень 2026","2027-01":"Січень 2027","2027-02":"Лютий 2027",
      "2027-03":"Березень 2027","2027-04":"Квітень 2027","2027-05":"Травень 2027"
    };

    $("#calendarMount").innerHTML=Object.entries(monthGroups).map(([month,monthDates])=>{
      const monthEventDates=new Set(db.events.filter(e=>e.date.startsWith(month)).map(e=>e.date)).size;
      return `<section class="calendar-month">
        <div class="calendar-month-title"><h2>${monthNames[month]||month}</h2><span>${monthEventDates} дат із подіями</span></div>
        <div class="calendar-wrap"><table class="calendar"><thead><tr>
          <th class="name">Студент</th>
          ${monthDates.map(d=>{
            const dt=new Date(d+"T12:00:00");
            const dow=dt.toLocaleDateString("uk-UA",{weekday:"short"});
            const day=dt.getDate();
            const today=new Date().toISOString().slice(0,10)===d?" today-head":"";
            return `<th class="${today}">${dow}<br>${day}</th>`;
          }).join("")}
        </tr></thead><tbody>
        ${students.map(s=>`<tr><td class="name"><b>${esc(s.name)}</b><div class="muted">${esc(s.group||"")}</div></td>
          ${monthDates.map(d=>{
            const day=new Date(d+"T12:00:00").getDay();
            const arr=map[`${s.id}|${d}`]||[];
            const cls=(day===0||day===6?" weekend":"")+(arr.length>1?" conflict":"");
            if(!arr.length) return `<td class="day-cell${cls}" data-date="${d}"></td>`;

            return `<td class="day-cell${cls}" data-date="${d}" title="${arr.map(p=>p.name).join(" + ")}">
              ${arr.map(p=>{
                const types=[...new Set(eventsFor(p.id)
                  .filter(e=>e.date===d && studentsForEvent(e).some(x=>x.id===s.id))
                  .map(e=>shortType(e.type)))];
                return `<div class="busy calendar-project-event" style="background:transparent">${calendarProjectCard(p,`${types.length?types.map(esc).join(" / "):esc(p.name)}`)}</div>`;
              }).join("")}
            </td>`;
          }).join("")}
        </tr>`).join("")}
        </tbody></table></div>
      </section>`;
    }).join("");

    $$(".day-cell").forEach(td=>td.onclick=()=>showDay(td.dataset.date));
  };

  $("#calPeriod").onchange=render;
  $("#calProject").onchange=render;
  $("#calStudent").oninput=render;
  $("#calType").onchange=render;
  render();
}

function schedule(){
  app.innerHTML=`
    <div class="schedule-controls">
      <select id="schPeriod">
        <option value="autumn">Вересень–листопад</option>
        <option value="winter">Грудень–лютий</option>
        <option value="spring">Березень–травень</option>
        <option value="year">Вересень–травень</option>
      </select>
      <select id="schWeekday">
        <option value="">Усі дні тижня</option>
        <option value="1">Понеділок</option>
        <option value="2">Вівторок</option>
        <option value="3">Середа</option>
        <option value="4">Четвер</option>
        <option value="5">П’ятниця</option>
      </select>
      <select id="schMinFree">
        <option value="0">Будь-яка кількість вільних</option>
        <option value="30">30+ вільних</option>
        <option value="25">25+ вільних</option>
        <option value="20">20+ вільних</option>
      </select>
    </div>
    <div id="scheduleKpis" class="schedule-kpis"></div>
    <div id="scheduleRecommended"></div>
    <div id="scheduleMonthTabs" class="schedule-month-tabs"></div>
    <div id="scheduleCalendar"></div>`;

  const render=()=>{
    const ranges={
      autumn:["2026-09-01","2026-11-30"],
      winter:["2026-12-01","2027-02-28"],
      spring:["2027-03-01","2027-05-31"],
      year:["2026-09-01","2027-05-31"]
    };
    const [start,end]=ranges[$("#schPeriod").value];
    const weekday=$("#schWeekday").value;
    const minFree=+$("#schMinFree").value;

    const allDates=datesBetween(start,end);
    const stats={};

    allDates.forEach(date=>{
      const busyIds=new Set();
      const reasons={};

      db.events.filter(e=>e.date===date).forEach(e=>{
        const p=pBy(e.projectId);
        if(!p) return;
        const assigned=studentsForEvent(e);
        assigned.forEach(s=>busyIds.add(s.id));
        if(assigned.length) reasons[p.name]=(reasons[p.name]||0)+assigned.length;
      });

      const busy=busyIds.size;
      const free=Math.max(0,db.students.length-busy);
      let cls="schedule-score-best",label="ІДЕАЛЬНО",dayClass="best";
      if(busy>=10){cls="schedule-score-hard";label="СКЛАДНО";dayClass="hard";}
      else if(busy>=5){cls="schedule-score-good";label="МОЖНА";dayClass="";}

      stats[date]={busy,free,reasons,cls,label,dayClass};
    });

    const filtered=allDates.filter(date=>{
      const day=new Date(date+"T12:00:00").getDay();
      if(day===0||day===6) return false;
      if(weekday && String(day)!==weekday) return false;
      return stats[date].free>=minFree;
    });

    const avgFree=filtered.length ? Math.round(filtered.reduce((s,d)=>s+stats[d].free,0)/filtered.length) : 0;
    const perfect=filtered.filter(d=>stats[d].busy<=4).length;
    const hard=filtered.filter(d=>stats[d].busy>=10).length;

    $("#scheduleKpis").innerHTML=`
      <div class="schedule-kpi"><span>Днів у вибірці</span><strong>${filtered.length}</strong></div>
      <div class="schedule-kpi"><span>Середньо вільних</span><strong>${avgFree}</strong></div>
      <div class="schedule-kpi"><span>Ідеальних днів</span><strong>${perfect}</strong></div>
      <div class="schedule-kpi"><span>Складних днів</span><strong>${hard}</strong></div>`;

    const best=[...filtered].sort((a,b)=>stats[b].free-stats[a].free||a.localeCompare(b)).slice(0,5);
    $("#scheduleRecommended").innerHTML=best.length?`
      <div class="recommended-card">
        <h2>Найкращі дні для занять</h2>
        <div class="recommended-list">
          ${best.map(d=>{
            const wd=new Date(d+"T12:00:00").toLocaleDateString("uk-UA",{weekday:"long"});
            return `<button class="recommended-item schedule-open-day" data-date="${d}">
              <b>${fullfmt(d)}</b><br>
              <span class="schedule-note">${wd} · ${stats[d].free} вільних із ${db.students.length}</span>
            </button>`;
          }).join("")}
        </div>
      </div>`:"";

    const monthGroups={};
    allDates.forEach(d=>{
      const key=d.slice(0,7);
      (monthGroups[key] ||= []).push(d);
    });

    const monthNames={
      "2026-09":"Вересень 2026","2026-10":"Жовтень 2026","2026-11":"Листопад 2026",
      "2026-12":"Грудень 2026","2027-01":"Січень 2027","2027-02":"Лютий 2027",
      "2027-03":"Березень 2027","2027-04":"Квітень 2027","2027-05":"Травень 2027"
    };
    const weekdays=["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];

    const availableMonths=Object.keys(monthGroups);
    const activePeriod=$("#schPeriod").value;
    const rememberedMonth=$("#scheduleMonthTabs").dataset.activeMonth;
    const currentMonth=new Date().toISOString().slice(0,7);
    let activeMonth=rememberedMonth && availableMonths.includes(rememberedMonth)
      ? rememberedMonth
      : (availableMonths.includes(currentMonth)?currentMonth:availableMonths[0]);

    $("#scheduleMonthTabs").innerHTML=availableMonths.map(month=>`
      <button type="button" class="schedule-month-tab ${month===activeMonth?"active":""}" data-month="${month}">
        ${monthNames[month]||month}
      </button>`).join("");

    const renderScheduleMonth=month=>{
      activeMonth=month;
      $("#scheduleMonthTabs").dataset.activeMonth=month;
      $$(".schedule-month-tab").forEach(b=>b.classList.toggle("active",b.dataset.month===month));

      const dates=monthGroups[month]||[];
      if(!dates.length){
        $("#scheduleCalendar").innerHTML='<div class="empty">У цьому місяці немає дат.</div>';
        return;
      }

      const first=new Date(dates[0]+"T12:00:00");
      const jsDay=first.getDay();
      const mondayIndex=(jsDay+6)%7;
      const blanks=Array.from({length:mondayIndex},()=>`<div class="schedule-day empty"></div>`).join("");

      const cells=dates.map(date=>{
        const dt=new Date(date+"T12:00:00");
        const day=dt.getDay();
        const st=stats[date];
        const hiddenByFilter=(weekday && String(day)!==weekday) || st.free<minFree;
        const projectEntries=Object.entries(st.reasons).sort((a,b)=>b[1]-a[1]).slice(0,3);

        return `<div class="schedule-day ${day===0||day===6?"weekend":""} ${st.dayClass}" data-date="${date}" style="${hiddenByFilter?"opacity:.28":""}">
          <div class="schedule-day-number">${dt.getDate()}</div>
          <span class="schedule-score-badge ${st.cls}">${st.label}</span>
          <div class="schedule-day-meta">
            <div class="schedule-day-free">${st.free} вільні</div>
            <div class="schedule-day-busy">${st.busy} зайняті</div>
          </div>
          <div class="schedule-day-projects">
            ${projectEntries.map(([name,count])=>{
              const p=db.projects.find(x=>x.name===name);
              return `<span class="schedule-mini-project project-watermark" style="${p?projectWatermarkStyle(p):"--project-color:#6b7280;"}">${p?projectWatermarkInner(p,`${esc(name)} ${count}`):`<span class="project-watermark-text">${esc(name)} ${count}</span>`}</span>`;
            }).join("")}
          </div>
        </div>`;
      }).join("");

      $("#scheduleCalendar").innerHTML=`<section class="schedule-month schedule-month-single">
        <div class="schedule-month-head">
          <h2>${monthNames[month]||month}</h2>
          <div class="schedule-month-nav">
            <button type="button" class="ghost schedule-prev-month" ${availableMonths.indexOf(month)===0?"disabled":""}>← Попередній</button>
            <span>Натисни на день, щоб побачити деталі</span>
            <button type="button" class="ghost schedule-next-month" ${availableMonths.indexOf(month)===availableMonths.length-1?"disabled":""}>Наступний →</button>
          </div>
        </div>
        <div class="schedule-cal">
          ${weekdays.map(w=>`<div class="schedule-cal-head">${w}</div>`).join("")}
          ${blanks}${cells}
        </div>
      </section>`;

      $$(".schedule-day[data-date]").forEach(el=>el.onclick=()=>showDay(el.dataset.date));

      const idx=availableMonths.indexOf(month);
      const prev=$(".schedule-prev-month");
      const next=$(".schedule-next-month");
      if(prev) prev.onclick=()=>idx>0&&renderScheduleMonth(availableMonths[idx-1]);
      if(next) next.onclick=()=>idx<availableMonths.length-1&&renderScheduleMonth(availableMonths[idx+1]);
    };

    $$(".schedule-month-tab").forEach(btn=>btn.onclick=()=>renderScheduleMonth(btn.dataset.month));
    renderScheduleMonth(activeMonth);

    $$(".schedule-open-day").forEach(el=>el.onclick=()=>{
      if(el.dataset.date) showDay(el.dataset.date);
    });
  };

  $("#schPeriod").onchange=()=>{
    const tabs=$("#scheduleMonthTabs");
    if(tabs) delete tabs.dataset.activeMonth;
    render();
  };
  $("#schWeekday").onchange=render;
  $("#schMinFree").onchange=render;
  render();
}


// ===== «Зустріч із індустрією» · REMS Control v4.0 =====
const INDUSTRY_COLLECTION="rems_industry_meetings";
const INDUSTRY_MEDIA_COLLECTION="rems_industry_media";
const industryBlockNames={
  text:"Текст",
  heading:"Підзаголовок",
  quote:"Цитата",
  gallery:"Фото",
  story:"Відео",
  youtube:"YouTube",
  social:"Instagram / TikTok",
  audio:"Аудіо",
  file:"Файл / PDF",
  link:"Посилання",
  guest:"Про гостя",
  divider:"Розділювач"
};
let industryCache=[];
const industryId=()=>`meeting-${Date.now()}-${Math.random().toString(36).slice(2,7)}`;
const industryBlockId=()=>`b-${Date.now()}-${Math.random().toString(36).slice(2,7)}`;

function normalizeIndustryBlock(raw={}){
  const b={...raw};
  b.id=b.id||industryBlockId();

  // Old editor types are converted instead of disappearing when the material
  // is opened in the new constructor.
  if(b.type==="image"){
    return {
      id:b.id,
      type:"gallery",
      items:[b.url].filter(Boolean),
      caption:b.caption||""
    };
  }
  if(b.type==="twoImages"){
    return {
      id:b.id,
      type:"gallery",
      items:[b.url,b.url2].filter(Boolean),
      caption:b.caption||""
    };
  }

  // Keep all current fields explicitly so reopening the editor is lossless.
  b.type=b.type||"text";
  b.content=String(b.content||"");
  b.url=String(b.url||"");
  b.url2=String(b.url2||"");
  b.caption=String(b.caption||"");
  b.items=Array.isArray(b.items)?b.items.filter(Boolean):[];
  return b;
}
function normalizeIndustryMeeting(raw={}){
  return {
    ...raw,
    blocks:Array.isArray(raw.blocks)?raw.blocks.map(normalizeIndustryBlock):[]
  };
}

async function industryLoad(){
  if(!cloudDb) return [];
  const snap=await getDocs(collection(cloudDb,INDUSTRY_COLLECTION));
  industryCache=[]; snap.forEach(d=>industryCache.push(normalizeIndustryMeeting({...d.data(),id:d.id})));
  industryCache.sort((a,b)=>String(b.date||"").localeCompare(String(a.date||"")));
  return industryCache;
}
async function compressIndustryImage(file){
  const bitmap=await createImageBitmap(file);
  const maxSide=1600;
  let w=bitmap.width, h=bitmap.height;
  const scale=Math.min(1,maxSide/Math.max(w,h));
  w=Math.max(1,Math.round(w*scale));
  h=Math.max(1,Math.round(h*scale));
  const canvas=document.createElement("canvas");
  canvas.width=w; canvas.height=h;
  const ctx=canvas.getContext("2d",{alpha:false});
  ctx.fillStyle="#111";
  ctx.fillRect(0,0,w,h);
  ctx.drawImage(bitmap,0,0,w,h);
  try{bitmap.close?.();}catch{}
  let q=.82;
  let data=canvas.toDataURL("image/webp",q);
  // Keep safely below Firestore's 1 MiB document limit.
  while(data.length>650000 && q>.42){
    q-=.07;
    data=canvas.toDataURL("image/webp",q);
  }
  if(data.length>850000){
    throw new Error("Фото завелике навіть після стискання. Спробуй інше фото.");
  }
  return data;
}
async function industryResolveMedia(value){
  const s=String(value||"").trim();
  const prefix="firestore-media://";
  if(!s.startsWith(prefix)) return s;
  const id=s.slice(prefix.length);
  if(!id||!cloudDb) return "";
  try{
    const snap=await getDoc(doc(cloudDb,INDUSTRY_MEDIA_COLLECTION,id));
    return snap.exists()?String(snap.data()?.data||""):"";
  }catch(e){ console.error("Industry media preview failed",e); return ""; }
}

function industryStoredValueHtml(value,label="Збережено"){
  const v=String(value||"").trim();
  if(!v)return "";
  const short=v.startsWith("firestore-media://")
    ? "Фото збережене у Firebase"
    : (v.length>72?v.slice(0,69)+"…":v);
  return `<div class="industry-stored-value">
    <span class="industry-stored-dot">✓</span>
    <span><b>${label}</b><small>${esc(short)}</small></span>
  </div>`;
}

async function industrySetPreview(box,value){
  if(!box)return;
  const src=await industryResolveMedia(value);
  box.innerHTML=src?`<img src="${src}" alt="">`:"";
  box.classList.toggle("has-image",!!src);
}
let industryUploadJobs=new Set();
function industryTrackUpload(promise){
  const job=Promise.resolve(promise);
  industryUploadJobs.add(job);
  job.finally(()=>industryUploadJobs.delete(job));
  return job;
}
async function industryWaitForUploads(){
  const jobs=[...industryUploadJobs];
  if(!jobs.length) return;
  const timeout=new Promise((_,reject)=>
    setTimeout(()=>reject(new Error("Завантаження медіа триває надто довго. Перевір файл або встав посилання.")),45000)
  );
  const results=await Promise.race([
    Promise.allSettled(jobs),
    timeout
  ]);
  const failed=Array.isArray(results)?results.find(r=>r.status==="rejected"):null;
  if(failed) throw failed.reason;
}
async function industryUpload(file,meetingId,kind="media"){
  if(!file) return "";
  // Images are stored in Firestore, just like student photos.
  // This avoids dependence on Firebase Storage for article photos.
  if(String(file.type||"").startsWith("image/")){
    if(!cloudDb||!currentUser) throw new Error("Firebase ще не готовий");
    const id=`media-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
    const data=await compressIndustryImage(file);
    await setDoc(doc(cloudDb,INDUSTRY_MEDIA_COLLECTION,id),{
      id,
      meetingId:String(meetingId||""),
      kind:String(kind||"image"),
      name:String(file.name||"photo"),
      mime:"image/webp",
      data,
      createdAt:new Date().toISOString()
    },{merge:false});
    return `firestore-media://${id}`;
  }

  // Video/audio/PDF files are not stored in Firestore: they are too large.
  // Direct Storage uploads previously caused the editor to wait indefinitely.
  // Use a URL block / YouTube / Instagram-TikTok for these media types.
  if(String(file.type||"").startsWith("video/")){
    throw new Error("Відеофайл напряму не завантажується. Встав посилання на відео або використай блок YouTube / Instagram / TikTok.");
  }
  if(String(file.type||"").startsWith("audio/")){
    throw new Error("Аудіофайл напряму не завантажується. Встав пряме посилання на аудіо.");
  }
  throw new Error("Цей тип файла напряму не завантажується. Використай посилання на файл.");
}
function industryBlockPickerHtml(){
  return `<div class="industry-picker">
    ${Object.entries(industryBlockNames).map(([k,v])=>`<button type="button" class="industry-pick" data-type="${k}">${v}</button>`).join("")}
  </div>`;
}
function industryBlockHtml(b={id:industryBlockId(),type:"text"}){
  const name=industryBlockNames[b.type]||b.type;
  const head=`<div class="industry-block-head">
    <div><span class="industry-block-kind">Блок</span><b>${name}</b></div>
    <div class="industry-block-actions">
      <button type="button" class="mini ib-up" title="Вище">↑</button>
      <button type="button" class="mini ib-down" title="Нижче">↓</button>
      <button type="button" class="mini ib-remove" title="Видалити">×</button>
    </div>
  </div>`;
  const media=(label,key="url",accept="image/*")=>`<label>${label}<input class="ib-${key}" value="${esc(b[key]||"")}" placeholder="URL або завантаж файл нижче"></label>${industryStoredValueHtml(b[key],b[key]?"Файл уже збережений":"")}<label class="industry-file">Замінити / завантажити файл<input class="ib-file" data-key="${key}" type="file" accept="${accept}"><span class="industry-media-preview" data-preview="${key}"></span></label>`;
  let body="";
  if(b.type==="text") body=`<label>Текст<textarea class="ib-content ib-richtext" placeholder="Пиши наступну частину статті…">${esc(b.content||"")}</textarea></label>`;
  if(b.type==="heading") body=`<label>Підзаголовок<input class="ib-content" value="${esc(b.content||"")}" placeholder="Назва розділу"></label>`;
  if(b.type==="quote") body=`<label>Цитата<textarea class="ib-content" placeholder="Важлива репліка гостя…">${esc(b.content||"")}</textarea></label><label>Автор / контекст<input class="ib-caption" value="${esc(b.caption||"")}"></label>`;
  if(b.type==="gallery") body=`<div class="industry-photo-block">
      <label>Фото · можна додавати скільки завгодно
        <textarea class="ib-content industry-photo-urls" placeholder="Фото з’являтимуться тут автоматично">${esc((b.items||[]).join("\n"))}</textarea>
      </label>
      <label class="industry-file industry-photo-upload">+ Додати фото
        <input class="ib-gallery-files" type="file" accept="image/*" multiple>
      </label>
      <div class="industry-gallery-preview"></div>
      <label>Підпис до фото / групи фото<input class="ib-caption" value="${esc(b.caption||"")}"></label>
    </div>`;
  if(b.type==="story") body=`<label>Посилання на відео<input class="ib-url" value="${esc(b.url||"")}" placeholder="Пряме посилання на .mp4/.webm"></label>${industryStoredValueHtml(b.url,"Відео збережено")}<div class="ib-progress">Для відео з YouTube, Instagram або TikTok краще використовуй відповідний окремий блок.</div><label>Підпис<input class="ib-caption" value="${esc(b.caption||"")}"></label>`;
  if(b.type==="youtube") body=`<label>Посилання YouTube<input class="ib-url" value="${esc(b.url||"")}" placeholder="https://youtube.com/..."></label>${industryStoredValueHtml(b.url,"YouTube збережено")}<label>Підпис<input class="ib-caption" value="${esc(b.caption||"")}"></label>`;
  if(b.type==="social") body=`<label>Instagram / TikTok<input class="ib-url" value="${esc(b.url||"")}" placeholder="Встав посилання на Reel, пост або TikTok"></label>${industryStoredValueHtml(b.url,"Посилання збережено")}<label>Підпис<input class="ib-caption" value="${esc(b.caption||"")}"></label>`;
  if(b.type==="audio") body=`<label>Посилання на аудіо<input class="ib-url" value="${esc(b.url||"")}" placeholder="URL аудіофайлу"></label>${industryStoredValueHtml(b.url,"Аудіо збережено")}<label>Назва / підпис<input class="ib-caption" value="${esc(b.caption||"")}"></label>`;
  if(b.type==="file") body=`<label>Посилання на файл / PDF<input class="ib-url" value="${esc(b.url||"")}" placeholder="URL документа"></label>${industryStoredValueHtml(b.url,"Файл збережено")}<label>Назва файла<input class="ib-content" value="${esc(b.content||"")}" placeholder="Наприклад: Презентація майстер-класу"></label><label>Короткий опис<input class="ib-caption" value="${esc(b.caption||"")}"></label>`;
  if(b.type==="link") body=`<label>Посилання<input class="ib-url" value="${esc(b.url||"")}" placeholder="https://..."></label>${industryStoredValueHtml(b.url,"Посилання збережено")}<label>Заголовок картки<input class="ib-content" value="${esc(b.content||"")}"></label><label>Опис<input class="ib-caption" value="${esc(b.caption||"")}"></label>`;
  if(b.type==="guest") body=`<div class="industry-guest-fields">${media("Фото гостя","url")}<label>Ім’я гостя<input class="ib-content" value="${esc(b.content||"")}"></label><label>Професія / коротка довідка<textarea class="ib-caption">${esc(b.caption||"")}</textarea></label><label>Instagram / сайт<input class="ib-url2" value="${esc(b.url2||"")}"></label></div>`;
  if(b.type==="divider") body=`<div class="industry-divider-preview"><span></span></div>`;
  return `<div class="industry-block" data-id="${b.id}" data-type="${b.type}">
    ${head}
    <div class="industry-block-body">${body}<div class="ib-progress"></div></div>
    <button type="button" class="industry-insert-toggle">+ Додати блок після цього</button>
    <div class="industry-inline-picker" hidden>${industryBlockPickerHtml()}</div>
  </div>`;
}
async function industryGalleryPreview(el){
  const wrap=el.querySelector(".industry-gallery-preview");
  if(!wrap)return;
  const area=el.querySelector(".ib-content");
  const vals=(area?.value||"").split(/\n+/).map(x=>x.trim()).filter(Boolean);
  wrap.innerHTML="";
  for(const v of vals){
    const box=document.createElement("div");
    box.className="industry-gallery-thumb";
    const img=document.createElement("img");
    const src=await industryResolveMedia(v);
    if(src) img.src=src;
    const del=document.createElement("button");
    del.type="button"; del.textContent="×"; del.title="Прибрати фото";
    del.onclick=()=>{
      const next=(area.value||"").split(/\n+/).map(x=>x.trim()).filter(Boolean).filter(x=>x!==v);
      area.value=next.join("\n");
      industryGalleryPreview(el);
    };
    box.append(img,del); wrap.append(box);
  }
}
function industryWireBlocks(meetingId){
  $$(".industry-block").forEach(el=>{
    el.querySelector(".ib-remove").onclick=()=>el.remove();
    el.querySelector(".ib-up").onclick=()=>el.previousElementSibling&&el.parentNode.insertBefore(el,el.previousElementSibling);
    el.querySelector(".ib-down").onclick=()=>el.nextElementSibling&&el.parentNode.insertBefore(el.nextElementSibling,el);
    const toggle=el.querySelector(".industry-insert-toggle");
    const inline=el.querySelector(".industry-inline-picker");
    toggle.onclick=()=>{inline.hidden=!inline.hidden;};
    inline.querySelectorAll(".industry-pick").forEach(btn=>btn.onclick=()=>{
      el.insertAdjacentHTML("afterend",industryBlockHtml({id:industryBlockId(),type:btn.dataset.type}));
      industryWireBlocks(meetingId);
    });
    el.querySelectorAll(".ib-file").forEach(inp=>inp.onchange=async()=>{
      const file=inp.files?.[0]; if(!file)return;
      const out=el.querySelector(`.ib-${inp.dataset.key}`);
      const prog=el.querySelector(".ib-progress");

      if(String(file.type||"").startsWith("video/")){
        inp.value="";
        prog.textContent="Відео: встав URL у поле вище або використай блок YouTube / Instagram / TikTok.";
        out.focus();
        return;
      }
      if(String(file.type||"").startsWith("audio/")){
        inp.value="";
        prog.textContent="Аудіо: встав пряме посилання у поле вище.";
        out.focus();
        return;
      }

      const task=(async()=>{
        prog.textContent="Завантаження…";
        out.value=await industryUpload(file,meetingId,el.dataset.type);
        await industrySetPreview(el.querySelector(`[data-preview="${inp.dataset.key}"]`),out.value);
        prog.textContent="Файл збережено ✓";
      })();
      try{await industryTrackUpload(task);}catch(e){console.error(e);prog.textContent=`Помилка: ${e?.message||e}`;}
    });
    const gf=el.querySelector(".ib-gallery-files");
    if(gf) gf.onchange=async()=>{
      const area=el.querySelector(".ib-content"),prog=el.querySelector(".ib-progress");
      const files=[...gf.files];
      if(!files.length)return;
      const task=(async()=>{
        prog.textContent=`Завантаження фото: 0/${files.length}`;
        const urls=[];
        for(let i=0;i<files.length;i++){
          urls.push(await industryUpload(files[i],meetingId,"gallery"));
          prog.textContent=`Завантаження фото: ${i+1}/${files.length}`;
        }
        area.value=[area.value.trim(),...urls].filter(Boolean).join("\n");
        await industryGalleryPreview(el);
        prog.textContent=`Додано фото: ${urls.length} ✓`;
        gf.value="";
      })();
      try{await industryTrackUpload(task);}catch(e){console.error(e);prog.textContent=`Помилка: ${e?.message||e}`;}
    };
    el.querySelectorAll("[data-preview]").forEach(box=>{
      const input=el.querySelector(`.ib-${box.dataset.preview}`);
      if(input?.value)industrySetPreview(box,input.value);
    });
    if(el.dataset.type==="gallery")industryGalleryPreview(el);
  });
}
function industryReadBlocks(){
  return $$(".industry-block").map(el=>({
    id:el.dataset.id,
    type:el.dataset.type,
    content:el.querySelector(".ib-content")?.value.trim()||"",
    url:el.querySelector(".ib-url")?.value.trim()||"",
    url2:el.querySelector(".ib-url2")?.value.trim()||"",
    caption:el.querySelector(".ib-caption")?.value.trim()||"",
    items:el.dataset.type==="gallery"?(el.querySelector(".ib-content")?.value||"").split(/\n+/).map(x=>x.trim()).filter(Boolean):[]
  }));
}
async function industryEditor(m=null){
  // New editor session: never inherit unfinished upload state from a previous article.
  industryUploadJobs=new Set();
  const item=m?clone(m):{id:industryId(),published:false,blocks:[]};
  $("#pageTitle").textContent=m?"Редагування зустрічі":"Нова зустріч";
  $("#app").innerHTML=`<div class="industry-editor"><button class="ghost" id="industryBack">← До всіх зустрічей</button><div class="section-head"><div><h2>${m?"Редагувати":"Створити"} матеріал</h2><p>Серія майстер-класів «Зустріч із індустрією»</p></div></div><div class="industry-form-grid"><label>Гість<input id="imGuest" value="${esc(item.guest||"")}"></label><label>Професія / посада<input id="imRole" value="${esc(item.guestRole||"")}"></label><label>Тема зустрічі<input id="imTitle" value="${esc(item.title||"")}"></label><label>Дата<input id="imDate" type="date" value="${esc(item.date||"")}"></label><label class="full">Короткий анонс<textarea id="imExcerpt">${esc(item.excerpt||"")}</textarea></label><label class="full">Обкладинка<input id="imCover" value="${esc(item.cover||"")}" placeholder="Завантаж фото нижче або встав URL"></label>${item.cover?`<div class="full">${industryStoredValueHtml(item.cover,"Обкладинка вже збережена")}</div>`:""}<label class="industry-file full">Замінити / завантажити обкладинку<input id="imCoverFile" type="file" accept="image/*"><span class="ib-progress" id="imCoverProgress"></span><span class="industry-media-preview" id="imCoverPreview"></span></label><label class="industry-publish full"><input id="imPublished" type="checkbox" ${item.published?"checked":""}><span><b>Опублікувати на сайті</b><small>Вимкнено — матеріал залишається чернеткою</small></span></label></div><div class="industry-builder"><div class="industry-builder-title"><div><h3>Стаття</h3><p class="muted">Будуй матеріал у потрібному порядку: текст → фото → текст → відео → цитата…</p></div></div><div class="industry-first-add"><b>Додати перший / наступний блок</b>${industryBlockPickerHtml()}</div><div id="industryBlocks">${(item.blocks||[]).map(industryBlockHtml).join("")}</div></div><div class="industry-savebar"><button class="danger" id="industryDelete" ${m?"":"style=display:none"}>Видалити</button><button class="primary" id="industrySave">Зберегти</button></div></div>`;
  industryWireBlocks(item.id);
  if(item.cover) industrySetPreview($("#imCoverPreview"),item.cover);
  $("#industryBack").onclick=industry;
  $("#imCoverFile").onchange=async()=>{
    const f=$("#imCoverFile").files?.[0]; if(!f)return;
    const prog=$("#imCoverProgress");
    $("#imCoverFile").disabled=true;
    const task=(async()=>{
      prog.textContent="Стискаємо й зберігаємо фото…";
      $("#imCover").value=await industryUpload(f,item.id,"cover");
      await industrySetPreview($("#imCoverPreview"),$("#imCover").value);
      prog.textContent="Фото збережено ✓";
    })();
    try{await industryTrackUpload(task);}
    catch(e){console.error(e);prog.textContent=`Помилка: ${e?.message||e}`;}
    finally{$("#imCoverFile").disabled=false;}
  };
  $$(".industry-first-add .industry-pick").forEach(b=>b.onclick=()=>{$("#industryBlocks").insertAdjacentHTML("beforeend",industryBlockHtml({id:industryBlockId(),type:b.dataset.type}));industryWireBlocks(item.id);});
  $("#industrySave").onclick=async()=>{
    const btn=$("#industrySave");
    if(industryUploadJobs.size){
      btn.disabled=true;
      btn.textContent="Завершуємо медіа…";
      try{await industryWaitForUploads();}
      catch(e){btn.disabled=false;btn.textContent="Зберегти";alert(`Не вдалося завершити завантаження медіа. ${e?.message||e}`);return;}
    }
    const guest=$("#imGuest").value.trim();
    const title=$("#imTitle").value.trim();
    if(!guest && !title){
      alert("Вкажи хоча б ім’я гостя або тему зустрічі.");
      return;
    }
    btn.disabled=true;
    btn.textContent="Збереження…";
    const data={
      id:item.id,
      guest,
      guestRole:$("#imRole").value.trim(),
      title,
      date:$("#imDate").value,
      excerpt:$("#imExcerpt").value.trim(),
      cover:$("#imCover").value.trim(),
      published:$("#imPublished").checked,
      blocks:industryReadBlocks().map(normalizeIndustryBlock),
      updatedAt:new Date().toISOString()
    };
    try{
      await setDoc(doc(cloudDb,INDUSTRY_COLLECTION,data.id),data,{merge:false});
      alert(data.published?"Матеріал опубліковано.":"Чернетку збережено.");
      industry();
    }catch(e){
      console.error(e);
      alert(`Не вдалося зберегти зустріч у Firebase. ${e?.code||e?.message||""}`);
    }finally{
      btn.disabled=false;
      btn.textContent="Зберегти";
    }
  };
  if(m) $("#industryDelete").onclick=async()=>{if(!confirm("Видалити цю зустріч?"))return;await deleteDoc(doc(cloudDb,INDUSTRY_COLLECTION,item.id));industry();};
}
async function industry(){
  $("#pageTitle").textContent="Зустріч із індустрією"; $("#pageSubtitle").textContent="Серія майстер-класів РЕМС-44";
  $("#app").innerHTML=`<div class="loading">Завантаження…</div>`;
  try{await industryLoad();}catch(e){console.error(e);$("#app").innerHTML=`<div class="empty">Не вдалося завантажити матеріали. Перевір Firebase Rules.</div>`;return;}
  $("#app").innerHTML=`<div class="section-head"><div><h2>Матеріали зустрічей</h2><p>Створюй і редагуй статті серії майстер-класів та гостьових лекцій.</p></div></div><div class="industry-grid">${industryCache.length?industryCache.map(m=>`<article class="industry-card">${m.cover?`<div class="industry-card-cover" data-cover="${esc(m.cover)}"><span>Завантаження…</span></div>`:`<div class="industry-card-empty">Без обкладинки</div>`}<div class="industry-card-meta">${esc(m.date||"Без дати")} · ${m.published?"Опубліковано":"Чернетка"}</div><h3>${esc(m.guest||m.title||"Без назви")}</h3><p>${esc(m.guestRole||m.title||"")}</p><button class="ghost industry-edit" data-id="${m.id}">Редагувати матеріал</button></article>`).join(""):`<div class="empty">Ще немає жодної зустрічі. Натисни «+ Нова зустріч» угорі праворуч.</div>`}</div>`;
  $$(".industry-card-cover").forEach(async box=>{
    const src=await industryResolveMedia(box.dataset.cover||"");
    box.innerHTML=src?`<img src="${src}" alt="">`:`<span>Фото збережене</span>`;
  });
  $$(".industry-edit").forEach(b=>b.onclick=()=>industryEditor(industryCache.find(x=>x.id===b.dataset.id)));
}

const views={dashboard,students,projects,calendar,schedule,industry};
$$(".nav").forEach(b=>b.onclick=()=>switchView(b.dataset.view,b.querySelector("span")?.textContent||b.textContent.trim()));
$("#quickAdd").onclick=()=>{
  if(!cloudReady){
    alert("Зачекайте кілька секунд: REMS Control ще завантажує хмарну базу.");
    return;
  }
  if(currentView==="industry"){
    industryEditor();
    return;
  }
  $("#projectDialog").showModal();
};
ensureNewProjectLogoField();

$("#saveProject").onclick=async e=>{
  e.preventDefault();
  const name=$("#projectName").value.trim(); if(!name)return;
  const btn=e.currentTarget;
  btn.disabled=true; btn.textContent="Збереження…";
  try{
    const project={id:"p_"+Date.now(),name,color:$("#projectColor").value,emoji:$("#projectEmoji").value||"◆"};
    const logoFile=$("#projectLogoFile")?.files?.[0];
    if(logoFile) project.logoData=await compressProjectLogo(logoFile);
    db.projects.push(project);

    const ok=await save();
    if(!ok){
      db.projects=db.projects.filter(x=>x.id!==project.id);
      throw new Error("Не вдалося зберегти проєкт у хмарі.");
    }
    $("#projectDialog").close();
    $("#projectForm").reset();
    switchView("projects","Проєкти");
  }catch(err){
    alert(err.message||"Не вдалося створити проєкт.");
  }finally{
    btn.disabled=false; btn.textContent="Зберегти";
  }
};
$("#saveEvent").onclick=async e=>{
  e.preventDefault();
  const projectId=$("#eventProjectId").value,date=$("#eventDate").value,type=$("#eventType").value.trim();
  if(!date||!type)return;
  const startTime=$("#eventStartTime")?.value||"",endTime=$("#eventEndTime")?.value||"",location=$("#eventLocation")?.value.trim()||"";
  db.events.push({projectId,date,type,startTime,endTime,location});
  const ok=await save();
  $("#eventDialog").close(); $("#eventForm").reset();
  const openProjectId=projectId;
  if(document.querySelector("#projectCardDialog")?.open) openProjectCard(openProjectId);
  else projects();
  if(!ok) alert("Дата залишилась тільки на цьому пристрої. Перевірте з’єднання з Firebase.");
};
$("#backupBtn").onclick=()=>{
  const blob=new Blob([JSON.stringify(db,null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="REMS_Control_backup.json";a.click();URL.revokeObjectURL(a.href);
};
$("#restoreInput").onchange=async e=>{
  const file=e.target.files[0]; if(!file)return;
  try{const obj=JSON.parse(await file.text()); if(!obj.students||!obj.projects)throw 0; db=obj;save();dashboard();alert("Резервну копію імпортовано.");}
  catch{alert("Не вдалося прочитати файл резервної копії.");}
  e.target.value="";
};

function ensureAuthStyles(){
  if(document.querySelector("#remsAuthStyles")) return;
  const style=document.createElement("style");
  style.id="remsAuthStyles";
  style.textContent=`
    #authGate{position:fixed;inset:0;z-index:9999;background:#111318;display:grid;place-items:center;padding:24px}
    #authGate .auth-card{width:min(420px,94vw);background:#fff;border-radius:22px;padding:26px;box-shadow:0 30px 90px #0007}
    #authGate .auth-brand{display:flex;align-items:center;gap:12px;margin-bottom:22px}
    #authGate .auth-logo{width:44px;height:44px;border-radius:13px;background:#111318;color:#fff;display:grid;place-items:center;font-weight:900}
    #authGate h2{margin:0;font-size:23px}
    #authGate p{margin:5px 0 0;color:#6b7280;font-size:13px}
    #authGate label{display:grid;gap:6px;margin:13px 0;color:#374151;font-size:13px}
    #authGate input{width:100%;border:1px solid #e5e7eb;border-radius:11px;padding:12px 13px;font-size:16px}
    #authGate button{width:100%;border:0;border-radius:11px;padding:12px 14px;background:#111827;color:#fff;font-weight:700;cursor:pointer;margin-top:8px}
    #authGate button:disabled{opacity:.55;cursor:not-allowed}
    #authGate .auth-error{min-height:20px;margin-top:10px;color:#b91c1c;font-size:12px}
    #logoutBtn{border:1px solid #343944;color:#c8ccd4;background:#1a1d23;border-radius:9px;padding:8px 10px;font-size:12px;text-align:center;cursor:pointer}
    #authUser{color:#6f7683;font-size:10px;line-height:1.3;padding:4px 8px;overflow-wrap:anywhere}
    .profile-main{display:grid;grid-template-columns:110px 1fr;gap:16px;align-items:start;margin-top:18px}
    .profile-photo{width:110px;height:138px;border-radius:14px;background:#eef0f3;object-fit:cover;display:grid;place-items:center;color:#9ca3af;font-size:28px;overflow:hidden}
    .profile-photo img{width:100%;height:100%;object-fit:cover}
    .profile-contact{display:grid;gap:7px;font-size:13px}
    .profile-contact a{color:#111827;text-decoration:none}
    .profile-edit-form{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .profile-edit-form label{display:grid;gap:5px;font-size:12px;color:#4b5563}
    .profile-edit-form input,.profile-edit-form textarea{border:1px solid #e5e7eb;border-radius:10px;padding:9px 10px;font:inherit;width:100%}
    .profile-edit-form textarea{min-height:86px;resize:vertical}
    .profile-edit-form .full{grid-column:1/-1}
    .profile-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:14px}
    .link-list{display:grid;gap:7px;margin-top:8px}
    .link-list a{display:inline-block;color:#111827;text-decoration:underline;text-underline-offset:2px}
    .student-dialog{width:min(820px,96vw)!important;max-height:90vh}
    .student-profile{padding:0!important}
    .profile-hero{padding:26px;background:linear-gradient(135deg,#111827,#232936);color:#fff;border-radius:16px 16px 0 0}
    .profile-hero-top{display:flex;justify-content:space-between;gap:18px;align-items:flex-start}
    .profile-hero-title{display:flex;gap:20px;align-items:flex-start;min-width:0}
    .profile-photo{width:124px;height:156px;border-radius:18px;background:#2f3542;object-fit:cover;display:grid;place-items:center;color:#cbd5e1;font-size:34px;overflow:hidden;box-shadow:0 10px 25px #0003;flex:0 0 auto}
    .profile-photo img{width:100%;height:100%;object-fit:cover}
    .profile-head-copy{min-width:0;padding-top:4px}
    .profile-hero h2{margin:0;font-size:28px;line-height:1.08;color:#fff;max-width:430px}
    .profile-hero .muted{color:#b9c0cc}
    .profile-meta{display:flex;flex-wrap:wrap;gap:8px 12px;margin-top:8px;color:#d1d5db;font-size:12px}
    .profile-hero .hero-actions{display:flex;gap:8px;flex:0 0 auto}
    .profile-hero .hero-actions .ghost{background:#ffffff14;color:#fff;border:1px solid #ffffff26}
    .profile-body{padding:22px}
    .contact-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:2px}
    .contact-item{background:#f6f7f9;border-radius:12px;padding:11px 12px;font-size:13px}
    .contact-item b{display:block;font-size:11px;color:#6b7280;margin-bottom:3px}
    .contact-item a{color:#111827;text-decoration:none}
    .profile-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0}
    .profile-stat{background:#f6f7f9;border-radius:14px;padding:14px}
    .profile-stat strong{font-size:24px}
    .profile-section{border-top:1px solid #e5e7eb;padding-top:16px;margin-top:16px}
    .profile-section-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
    .profile-section-title b{font-size:14px}
    .project-pill{display:inline-flex;align-items:center;gap:6px;color:#fff;padding:6px 9px;border-radius:999px;font-size:12px}
    .portfolio-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
    .portfolio-card{border:1px solid #e5e7eb;border-radius:12px;padding:11px 12px;background:#fff;text-decoration:none;color:#111827;font-size:12px}
    .portfolio-card b{display:block;margin-bottom:3px}
    .student-cal-toolbar{display:flex;gap:8px;align-items:center;justify-content:space-between;flex-wrap:wrap;margin-bottom:10px}
    .student-cal-toggle{display:flex;gap:6px}
    .student-cal-toggle button,.student-month-tab{border:1px solid #e5e7eb;background:#fff;border-radius:9px;padding:7px 9px;font-size:11px;cursor:pointer}
    .student-cal-toggle button.active,.student-month-tab.active{background:#111827;color:#fff;border-color:#111827}
    .student-month-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px}
    .student-month-grid{display:grid;grid-template-columns:repeat(7,minmax(64px,1fr));gap:1px;background:#e5e7eb;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden}
    .student-month-head{background:#171a20;color:#fff;text-align:center;padding:7px 4px;font-size:10px;font-weight:700}
    .student-month-day{background:#fff;min-height:78px;padding:6px;position:relative}
    .student-month-day.empty{background:#f5f6f8}
    .student-month-day.weekend{background:#fafafa}
    .student-month-number{font-size:11px;font-weight:800;margin-bottom:5px}
    .student-day-events{display:grid;gap:3px}
    .student-day-event{font-size:9px;color:#fff;border-radius:5px;padding:3px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}
    .student-day-count{position:absolute;top:5px;right:5px;font-size:9px;color:#6b7280}
    .event-info-card{padding:0;overflow:hidden;border-radius:18px}
    .event-info-head{padding:20px 22px;background:linear-gradient(135deg,#111827,#232936);color:#fff}
    .event-info-head h2{margin:0;font-size:22px}
    .event-info-head .muted{color:#cbd5e1;margin-top:5px}
    .event-info-body{padding:20px 22px;display:grid;gap:12px}
    .event-info-row{background:#f7f7f8;border-radius:12px;padding:12px 14px}
    .event-info-row span{display:block;font-size:10px;color:#6b7280;margin-bottom:3px}
    .event-info-row b{font-size:14px}
    .event-info-actions{display:flex;justify-content:flex-end;gap:8px;padding:0 22px 20px}
    .danger-inline{border:1px solid #fecaca!important;color:#b91c1c!important;background:#fff!important}
    .danger-inline.armed{background:#b91c1c!important;color:#fff!important;border-color:#b91c1c!important}

    .student-list-view{display:none}
    .student-list-view.active{display:block}
    .student-calendar-view{display:block}
    .student-calendar-view.hidden{display:none}
    @media(max-width:700px){
      .student-month-grid{grid-template-columns:repeat(7,minmax(54px,1fr))}
      .student-month-day{min-height:68px;padding:4px}
      .student-day-event{font-size:8px}
    }
    .timeline-scroll{max-height:300px;overflow:auto;padding-right:4px}
    .timeline{display:grid;gap:8px}
    .timeline-row{display:grid;grid-template-columns:150px 1fr auto;gap:10px;align-items:center;background:#f7f7f8;border-radius:11px;padding:10px 11px;font-size:12px}
    .timeline-date{font-weight:700}
    .timeline-type{color:#4b5563}
    .notes-card{background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;padding:12px;white-space:pre-wrap}
    .profile-empty{color:#9ca3af;font-size:12px}
    @media(max-width:700px){
      .profile-hero-top{display:block}
      .profile-hero-title{align-items:flex-start}
      .profile-hero .hero-actions{margin-top:14px}
      .contact-grid,.portfolio-grid{grid-template-columns:1fr}
      .timeline-row{grid-template-columns:1fr}
      .profile-stats{grid-template-columns:repeat(3,1fr)}
    }

    .students-toolbar{display:grid;grid-template-columns:minmax(220px,1.3fr) repeat(3,minmax(150px,.7fr));gap:10px;margin-bottom:16px}
    .students-toolbar input,.students-toolbar select{border:1px solid #e5e7eb;background:#fff;border-radius:11px;padding:11px 12px;width:100%}
    .students-summary{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px}
    .summary-pill{background:#fff;border:1px solid #e5e7eb;border-radius:999px;padding:7px 10px;font-size:12px;color:#4b5563}
    .students-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
    .student-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;cursor:pointer;transition:.16s transform,.16s box-shadow}
    .student-card:hover{transform:translateY(-2px);box-shadow:0 10px 28px #11182712}
    .student-card:focus{outline:2px solid #111827;outline-offset:2px}.student-card:active{transform:translateY(0);box-shadow:inset 0 0 0 1px #11182722}
    .project-card:focus{outline:2px solid #111827;outline-offset:2px}.project-card:hover{box-shadow:0 10px 28px #11182712}
    .student-card-top{display:grid;grid-template-columns:72px 1fr;gap:12px;align-items:center;padding:14px}
    .student-avatar{width:72px;height:90px;border-radius:12px;background:#eef0f3;display:grid;place-items:center;overflow:hidden;color:#9ca3af;font-size:24px}
    .student-avatar img{width:100%;height:100%;object-fit:cover}
    .student-card h3{margin:0 0 4px;font-size:15px;line-height:1.2}
    .student-card-meta{color:#6b7280;font-size:11px}
    .student-card-stats{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #eef0f3}
    .student-card-stat{padding:10px 8px;text-align:center}
    .student-card-stat strong{display:block;font-size:16px}
    .student-card-stat span{font-size:10px;color:#6b7280}
    .student-card-projects{padding:0 14px 14px}
    .student-card-projects .chips{margin-top:0}
    .status-free{color:#047857}
    .status-busy{color:#92400e}
    .status-conflict{color:#b91c1c}
    @media(max-width:1100px){.students-grid{grid-template-columns:repeat(3,1fr)}.students-toolbar{grid-template-columns:1fr 1fr}}
    @media(max-width:760px){.students-grid{grid-template-columns:repeat(2,1fr)}.students-toolbar{grid-template-columns:1fr}}
    @media(max-width:520px){.students-grid{grid-template-columns:1fr}}

    .calendar-toolbar{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:14px}
    .calendar-toolbar select,.calendar-toolbar input{border:1px solid #e5e7eb;background:#fff;border-radius:10px;padding:10px 11px}
    .calendar-legend{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}
    .legend-item{display:inline-flex;align-items:center;gap:6px;background:#fff;border:1px solid #e5e7eb;border-radius:999px;padding:6px 9px;font-size:11px}
    .calendar-month{margin-bottom:18px}
    .calendar-month-title{display:flex;justify-content:space-between;align-items:end;margin:0 0 8px}
    .calendar-month-title h2{margin:0;font-size:18px}
    .calendar-month-title span{font-size:11px;color:#6b7280}
    .calendar-wrap{overflow:auto;background:#fff;border:1px solid #e5e7eb;border-radius:14px;max-height:72vh}
    .calendar{border-collapse:separate;border-spacing:0;font-size:11px;min-width:max-content}
    .calendar th,.calendar td{border-right:1px solid #eee;border-bottom:1px solid #eee;padding:5px;text-align:center;min-width:44px;height:36px}
    .calendar th{position:sticky;top:0;background:#171a20;color:#fff;z-index:2}
    .calendar th.name,.calendar td.name{position:sticky;left:0;min-width:230px;text-align:left;z-index:3}
    .calendar td.name{background:#fff}
    .calendar th.name{z-index:4}
    .calendar .today-head{background:#374151}
    .calendar td.day-cell{cursor:pointer;vertical-align:top}
    .calendar td.day-cell:hover{background:#f8fafc}
    .calendar .weekend{background:#fafafa}
    .calendar .conflict{outline:3px solid #ef4444;outline-offset:-3px}
    .busy{color:#fff;font-weight:700;border-radius:5px;padding:4px 5px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:96px;margin:1px auto;font-size:10px}
    .event-type-dot{font-size:9px;opacity:.9}
    .calendar-summary{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0 14px}
    .calendar-summary .summary-pill{background:#fff}
    .day-panel{padding:20px}
    .day-panel-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;margin-bottom:14px}
    .day-panel h2{margin:0}
    .day-event-list{display:grid;gap:9px}
    .day-event-row{display:grid;grid-template-columns:18px 1fr auto;gap:10px;align-items:center;border:1px solid #e5e7eb;border-radius:12px;padding:10px 11px}
    .day-event-row .dot{width:10px;height:10px}
    .day-event-meta{font-size:12px;color:#6b7280;margin-top:2px}
    .availability-card{margin-top:14px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;padding:12px}
    .availability-card b{display:block;margin-bottom:6px}
    .availability-list{display:flex;flex-wrap:wrap;gap:6px}
    .availability-chip{font-size:11px;border:1px solid #e5e7eb;background:#fff;border-radius:999px;padding:5px 8px}

    .schedule-controls{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px}
    .schedule-controls select,.schedule-controls input{border:1px solid #e5e7eb;background:#fff;border-radius:10px;padding:10px 11px}
    .schedule-kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:16px}
    .schedule-kpi{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:14px}
    .schedule-kpi span{display:block;color:#6b7280;font-size:11px}
    .schedule-kpi strong{display:block;font-size:24px;margin-top:5px}
    .schedule-table-wrap{overflow:auto;background:#fff;border:1px solid #e5e7eb;border-radius:14px}
    .schedule-table{width:100%;border-collapse:collapse;min-width:720px}
    .schedule-table th,.schedule-table td{padding:11px 12px;border-bottom:1px solid #eef0f3;text-align:left;font-size:12px}
    .schedule-table th{background:#171a20;color:#fff;position:sticky;top:0}
    .schedule-table tr:hover td{background:#fafafa}
    .score{display:inline-flex;align-items:center;justify-content:center;min-width:88px;border-radius:999px;padding:5px 9px;font-size:11px;font-weight:700}
    .score-best{background:#dcfce7;color:#166534}
    .score-good{background:#fef3c7;color:#92400e}
    .score-hard{background:#fee2e2;color:#991b1b}
    .busy-count{font-weight:700}
    .schedule-note{font-size:11px;color:#6b7280}
    .weekday-pill{display:inline-block;background:#f3f4f6;border-radius:999px;padding:4px 7px;font-size:10px}
    .recommended-card{background:linear-gradient(135deg,#ecfdf5,#f0fdf4);border:1px solid #bbf7d0;border-radius:16px;padding:16px;margin-bottom:16px}
    .recommended-card h2{margin:0 0 10px;font-size:16px}
    .recommended-list{display:flex;gap:8px;flex-wrap:wrap}
    .recommended-item{background:#fff;border:1px solid #d1fae5;border-radius:12px;padding:10px 12px;font-size:12px}
    @media(max-width:760px){.schedule-kpis{grid-template-columns:repeat(2,1fr)}}

    .project-detail{padding:0}
    .project-hero{padding:24px;background:linear-gradient(135deg,#111827,#222936);color:#fff;border-radius:16px 16px 0 0}
    .project-hero-top{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}
    .project-title-wrap{display:flex;gap:14px;align-items:center}
    .project-logo{width:64px;height:64px;border-radius:16px;display:grid;place-items:center;font-size:30px;background:#ffffff16;border:1px solid #ffffff20}
    .project-hero h2{margin:0;font-size:26px}
    .project-body{padding:22px}
    .project-meta-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px}
    .project-meta{background:#f6f7f9;border-radius:12px;padding:12px}
    .project-meta span{display:block;font-size:11px;color:#6b7280}
    .project-meta strong{display:block;font-size:22px;margin-top:4px}
    .project-section{border-top:1px solid #e5e7eb;padding-top:16px;margin-top:16px}
    .project-section-head{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:10px}
    .project-event-list{display:grid;gap:8px}
    .project-event-row{display:grid;grid-template-columns:90px 1fr auto;gap:10px;align-items:center;background:#f7f7f8;border-radius:11px;padding:10px 11px}
    @media(max-width:760px){.project-event-row{grid-template-columns:72px 1fr!important}.project-event-row>button{font-size:10px;padding:6px 7px}}
    .project-students{display:flex;flex-wrap:wrap;gap:7px}
    .project-student-chip{border:1px solid #e5e7eb;background:#fff;border-radius:999px;padding:6px 9px;font-size:12px;cursor:pointer}
    .project-student-chip.active{background:#111827;color:#fff;border-color:#111827}
    .project-edit-form{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .project-edit-form label{display:grid;gap:5px;font-size:12px;color:#4b5563}
    .project-edit-form input,.project-edit-form textarea{border:1px solid #e5e7eb;border-radius:10px;padding:9px 10px;font:inherit;width:100%}
    .project-edit-form textarea{min-height:80px;resize:vertical}
    .project-edit-form .full{grid-column:1/-1}
    .event-edit-form{grid-template-columns:1fr!important;gap:14px!important}
    .event-edit-form label{display:grid;gap:7px;font-size:12px;color:#4b5563}
    .event-edit-form input,.event-edit-form textarea{width:100%;border:1px solid #dfe3e8;border-radius:11px;padding:11px 12px;font:inherit;background:#fff}
    .event-edit-form textarea{min-height:90px;resize:vertical}
    .event-time-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    @media(max-width:620px){.event-time-grid{grid-template-columns:1fr}}

    .project-logo-editor{display:flex;gap:14px;align-items:center;padding:12px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px}
    .project-logo-preview{width:150px;height:90px;display:grid;place-items:center;background:#fff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden}
    .project-logo-preview img{width:100%;height:100%;object-fit:contain}
    .project-logo-controls{display:grid;gap:7px;flex:1}
    .project-logo-controls input[type=file]{font-size:12px}

    .project-danger{margin-top:18px;padding-top:14px;border-top:1px solid #fee2e2}
    .project-calendar-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
    .project-view-switch{display:inline-flex;background:#f3f4f6;border-radius:10px;padding:3px}
    .project-view-switch button{border:0;background:transparent;border-radius:8px;padding:7px 10px;font-size:11px;font-weight:700;cursor:pointer;color:#6b7280}
    .project-view-switch button.active{background:#111827;color:#fff;box-shadow:0 1px 3px #0002}
    .project-month-tabs{display:flex;gap:6px;overflow:auto;padding:2px 0 10px;scrollbar-width:thin}
    .project-month-tab{white-space:nowrap;border:1px solid #e5e7eb;background:#fff;border-radius:999px;padding:7px 10px;font-size:11px;cursor:pointer;text-transform:capitalize}
    .project-month-tab.active{background:#111827;color:#fff;border-color:#111827}
    .project-cal-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:1px;background:#e5e7eb;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden}
    .project-cal-weekday{background:#171a20;color:#fff;text-align:center;padding:8px 4px;font-size:10px;font-weight:800}
    .project-cal-day{border:0;background:#fff;min-height:88px;padding:7px;text-align:left;display:flex;flex-direction:column;gap:5px;cursor:default;font:inherit}
    .project-cal-day.weekend{background:#fafafa}
    .project-cal-day.empty{background:#f5f6f8}
    .project-cal-day.has-event{cursor:pointer}
    .project-cal-day.has-event:hover{background:#f8fafc;box-shadow:inset 0 0 0 2px #d1d5db}
    .project-cal-number{font-size:11px;font-weight:800}
    .project-cal-events{display:grid;gap:3px;min-width:0}
    .project-cal-event{display:block;background:#f3f4f6;border-left:3px solid #6b7280;border-radius:5px;padding:4px 5px;font-size:9px;line-height:1.15;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    @media(max-width:700px){.project-cal-day{min-height:68px;padding:5px}.project-cal-event{font-size:8px;padding:3px}.project-section-head{align-items:flex-start}.project-calendar-actions{justify-content:flex-end}}

    .schedule-month{margin-bottom:18px}
    .schedule-month-head{display:flex;justify-content:space-between;align-items:end;margin-bottom:8px}
    .schedule-month-head h2{margin:0;font-size:18px}
    .schedule-month-head span{font-size:11px;color:#6b7280}
    .schedule-cal{display:grid;grid-template-columns:repeat(7,minmax(120px,1fr));gap:1px;background:#e5e7eb;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden}
    .schedule-cal-head{background:#171a20;color:#fff;padding:9px 8px;text-align:center;font-size:11px;font-weight:700}
    .schedule-day{background:#fff;min-height:118px;padding:8px;cursor:pointer;position:relative}
    .schedule-day:hover{background:#f9fafb}
    .schedule-day.empty{background:#f5f6f8;cursor:default}
    .schedule-day.weekend{background:#fafafa}
    .schedule-day-number{font-weight:800;font-size:12px;margin-bottom:7px}
    .schedule-day-meta{display:grid;gap:5px}
    .schedule-day-free{font-size:11px;color:#047857;font-weight:700}
    .schedule-day-busy{font-size:10px;color:#6b7280}
    .schedule-day-projects{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px}
    .schedule-mini-project{font-size:9px;color:#fff;border-radius:999px;padding:3px 5px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .schedule-score-badge{position:absolute;top:7px;right:7px;font-size:9px;font-weight:800;border-radius:999px;padding:3px 6px}
    .schedule-score-best{background:#dcfce7;color:#166534}
    .schedule-score-good{background:#fef3c7;color:#92400e}
    .schedule-score-hard{background:#fee2e2;color:#991b1b}
    .schedule-day.best{box-shadow:inset 0 0 0 2px #86efac}
    .schedule-day.hard{box-shadow:inset 0 0 0 2px #fecaca}
    @media(max-width:1100px){.schedule-cal{grid-template-columns:repeat(7,minmax(105px,1fr))}}
    @media(max-width:760px){.schedule-cal{grid-template-columns:repeat(7,minmax(88px,1fr))}.schedule-day{min-height:102px;padding:6px}.schedule-day-busy{display:none}}

    .event-people{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
    .event-person{font-size:10px;border:1px solid #e5e7eb;background:#fff;border-radius:999px;padding:4px 7px}
    .event-person.active{background:#111827;color:#fff;border-color:#111827}
    .event-assignment-box{margin-top:12px;padding:12px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px}
    .event-assignment-box b{display:block;margin-bottom:8px}
    .event-assignment-grid{display:flex;flex-wrap:wrap;gap:6px}
    .event-assignment-note{font-size:11px;color:#6b7280;margin-top:7px}

    .today-panel{display:grid;gap:14px;margin-bottom:18px}
    .today-hero{background:linear-gradient(135deg,#111827,#232936);color:#fff;border-radius:18px;padding:18px}
    .today-hero-top{display:flex;justify-content:space-between;gap:14px;align-items:flex-start}
    .today-hero h2{margin:0;font-size:20px}
    .today-hero .muted{color:#c7cbd3}
    .today-stats{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
    .today-stat{background:#ffffff14;border:1px solid #ffffff1f;border-radius:999px;padding:6px 9px;font-size:11px}
    .today-events{display:grid;gap:8px;margin-top:14px}
    .today-event{display:grid;grid-template-columns:10px 1fr auto;gap:10px;align-items:center;background:#ffffff0d;border:1px solid #ffffff12;border-radius:12px;padding:10px}
    .today-event .dot{width:10px;height:10px}
    .today-event b{font-size:13px}
    .today-event small{display:block;color:#c7cbd3;margin-top:2px}
    .week-strip{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}
    .week-day-card{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:10px;min-height:130px;cursor:pointer}
    .week-day-card:hover{box-shadow:0 8px 22px #11182710}
    .week-day-card.today{box-shadow:inset 0 0 0 2px #111827}
    .week-day-head{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px}
    .week-day-name{font-size:11px;color:#6b7280;text-transform:capitalize}
    .week-day-num{font-size:18px;font-weight:800}
    .week-day-count{font-size:10px;color:#6b7280}
    .week-event-list{display:grid;gap:4px}
    .week-event-pill{font-size:9px;color:#fff;border-radius:6px;padding:4px 5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .week-free{font-size:10px;color:#047857;margin-top:6px;font-weight:700}
    @media(max-width:1000px){.week-strip{grid-template-columns:repeat(4,1fr)}}
    @media(max-width:650px){.week-strip{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:520px){
      .profile-hero-title{display:block}
      .profile-photo{width:96px;height:120px;margin-bottom:12px}
      .profile-stats{grid-template-columns:1fr}
      .profile-edit-form{grid-template-columns:1fr}
      .profile-edit-form .full{grid-column:auto}
    }
  `;
  document.head.appendChild(style);
}

function showLogin(){
  ensureAuthStyles();
  let gate=document.querySelector("#authGate");
  if(!gate){
    gate=document.createElement("div");
    gate.id="authGate";
    gate.innerHTML=`
      <form class="auth-card" id="authForm">
        <div class="auth-brand">
          <div class="auth-logo">R</div>
          <div><h2>REMS Control</h2><p>Увійдіть, щоб відкрити систему</p></div>
        </div>
        <label>Email<input id="authEmail" type="email" autocomplete="username" required></label>
        <label>Пароль<input id="authPassword" type="password" autocomplete="current-password" required></label>
        <button id="authSubmit" type="submit">Увійти</button>
        <div class="auth-error" id="authError"></div>
      </form>`;
    document.body.appendChild(gate);

    gate.querySelector("#authForm").onsubmit=async e=>{
      e.preventDefault();
      const email=gate.querySelector("#authEmail").value.trim();
      const password=gate.querySelector("#authPassword").value;
      const btn=gate.querySelector("#authSubmit");
      const err=gate.querySelector("#authError");
      err.textContent="";
      btn.disabled=true;
      btn.textContent="Вхід…";
      try{
        await signInWithEmailAndPassword(auth,email,password);
      }catch(ex){
        console.error(ex);
        err.textContent="Не вдалося увійти. Перевірте email і пароль.";
        btn.disabled=false;
        btn.textContent="Увійти";
      }
    };
  }
  gate.style.display="grid";
}

function hideLogin(){
  const gate=document.querySelector("#authGate");
  if(gate) gate.style.display="none";
}

function ensureLogout(){
  ensureAuthStyles();
  const box=document.querySelector(".sidebar-bottom");
  if(!box) return;
  let userEl=document.querySelector("#authUser");
  if(!userEl){
    userEl=document.createElement("div");
    userEl.id="authUser";
    box.prepend(userEl);
  }
  userEl.textContent=currentUser?.email||"";

  let btn=document.querySelector("#logoutBtn");
  if(!btn){
    btn=document.createElement("button");
    btn.id="logoutBtn";
    btn.textContent="Вийти";
    btn.onclick=async()=>{ await signOut(auth); };
    box.prepend(btn);
  }
}

function clearLogout(){
  document.querySelector("#logoutBtn")?.remove();
  document.querySelector("#authUser")?.remove();
}


async function ensureVoice14(){
  if(!cloudDb || !cloudReady) return false;

  // If Voice 14 already exists, do not duplicate it.
  let p=db.projects.find(x=>String(x.name||"").toLowerCase().includes("голос країни"))
       || db.projects.find(x=>String(x.name||"").toLowerCase().includes("голос 14"));
  if(!p){
    p={id:"voice14",name:"ГОЛОС 14",color:"#6D28D9",emoji:"🎤",description:"Вибір наосліп · Бої · Нокаути · Фінал"};
    db.projects.push(p);
  }

  const norm=s=>String(s||"").toLowerCase().replace(/[’'`]/g,"").trim();
  const findStudent=(surname,first="")=>db.students.find(s=>{
    const n=norm(s.name);
    return n.includes(norm(surname)) && (!first || n.includes(norm(first)));
  });

  const maria=findStudent("Міленіна","Марія");
  const teamNames=[
    ["Кропивка","Маргарита"],
    ["Міленіна","Марія"],
    ["Баленко","Ілля"],
    ["Касєєв","Данило"],
    ["Карпенко","Римма"]
  ];
  const team=teamNames.map(([a,b])=>findStudent(a,b)).filter(Boolean);

  // Alternative seventh place: include whichever of these students exists in the database.
  // If both exist, leave both OUT until the user chooses one, to avoid false occupancy.
  const hostryk=findStudent("Гострик","Катерина");
  const davydova=findStudent("Давидова","Світлана");
  if(hostryk && !davydova) team.push(hostryk);
  if(davydova && !hostryk) team.push(davydova);

  // Анварі Осай may not yet exist in the current student list. If present, include automatically.
  const anvari=findStudent("Анварі","Осай");
  if(anvari) team.push(anvari);

  const uniq=arr=>[...new Set(arr.map(x=>x.id))];
  const allIds=uniq(team);
  const mariaIds=maria?[maria.id]:[];

  // Keep project-level assignment for everybody currently known on the Voice 14 team.
  allIds.forEach(sid=>{
    if(!db.assignments.some(a=>a.projectId===p.id&&a.studentId===sid)){
      db.assignments.push({projectId:p.id,studentId:sid});
    }
  });

  const entries=[
    ["2026-09-15","Вибір наосліп · інтерв'ю учасників",mariaIds],
    ["2026-09-16","Вибір наосліп · інтерв'ю учасників",mariaIds],
    ["2026-09-17","Вибір наосліп · інтерв'ю учасників",mariaIds],
    ["2026-09-18","Вибір наосліп · інтерв'ю учасників",mariaIds],
    ["2026-09-19","Вибір наосліп · інтерв'ю учасників",mariaIds],
    ["2026-09-20","Вибір наосліп · репетиція / саундчек",allIds],
    ["2026-09-21","Вибір наосліп · репетиція / саундчек",allIds],
    ["2026-09-22","Вибір наосліп · зйомка сліпих прослуховувань",allIds],
    ["2026-09-23","Вибір наосліп · зйомка сліпих прослуховувань",allIds],
    ["2026-09-24","Вибір наосліп · зйомка сліпих прослуховувань",allIds],

    ["2026-10-20","Бої · інтерв'ю учасників",mariaIds],
    ["2026-10-21","Бої · інтерв'ю учасників",mariaIds],
    ["2026-10-22","Бої · інтерв'ю учасників",mariaIds],
    ["2026-10-23","Бої · репетиція / саундчек",allIds],
    ["2026-10-24","Бої · репетиція / саундчек",allIds],
    ["2026-10-25","Бої · зйомка батлів",allIds],
    ["2026-10-26","Бої · зйомка батлів",allIds],

    ["2026-11-04","Нокаути · інтерв'ю учасників",mariaIds],
    ["2026-11-05","Нокаути · інтерв'ю учасників",mariaIds],
    ["2026-11-06","Нокаути · репетиція / саундчек",allIds],
    ["2026-11-07","Нокаути · зйомка нокаутів",allIds],

    ["2026-11-20","Фінал · інтерв'ю",mariaIds],
    ["2026-11-22","Фінал · репетиція / саундчек",allIds],
    ["2026-11-23","Фінал · репетиція / саундчек",allIds],
    ["2026-11-24","Фінал · зйомка",allIds]
  ];

  entries.forEach(([date,type,studentIds])=>{
    const exists=db.events.some(e=>e.projectId===p.id&&e.date===date&&e.type===type);
    if(!exists) db.events.push({projectId:p.id,date,type,studentIds:[...studentIds]});
  });

  db.events.sort((a,b)=>a.date.localeCompare(b.date));
  return await save();
}


async function ensureJescDates(){
  if(!cloudDb || !cloudReady) return false;

  let p=db.projects.find(x=>{
    const n=String(x.name||"").toLowerCase();
    return n.includes("дитяче євробачення") || x.id==="jesc";
  });

  if(!p){
    p={
      id:"jesc",
      name:"Дитяче Євробачення",
      color:"#F59E0B",
      emoji:"⭐",
      description:"Дитяче Євробачення 2026"
    };
    db.projects.push(p);
  }

  // Для цього проєкту вже є призначені студенти в базі.
  // Окремий тип події користувач не уточнював, тому не вигадуємо його.
  const studentIds=projectStudents(p.id).map(s=>s.id);

  const entries=[
    ["2026-09-12","Подія (тип уточнити)"],
    ["2026-09-13","Подія (тип уточнити)"]
  ];

  entries.forEach(([date,type])=>{
    const exists=db.events.some(e=>e.projectId===p.id && e.date===date);
    if(!exists){
      db.events.push({
        projectId:p.id,
        date,
        type,
        studentIds:[...studentIds]
      });
    }
  });

  db.events.sort((a,b)=>a.date.localeCompare(b.date));
  return await save();
}

async function initCloud(){
  if(cloudInitializing) return;
  cloudInitializing=true;
  setWriteUiReady(false);

  const cfg=window.REMS_FIREBASE_CONFIG;
  if(!cfg){
    setStatus("v4.1.2 · Firebase не налаштовано");
    dashboard();
    cloudInitializing=false;
    return;
  }

  try{
    setStatus("v4.1.2 · завантаження хмари…");
    if(!firebaseApp) firebaseApp=initializeApp(cfg);
    cloudDb=getFirestore(firebaseApp);
    mediaStorage=getStorage(firebaseApp);
    const ref=doc(cloudDb,"rems_control",CLOUD_DOC);
    const snap=await getDoc(ref);

    if(snap.exists()){
      const remote=snap.data();
      db={
        students:remote.students||[],
        projects:remote.projects||[],
        events:remote.events||[],
        assignments:remote.assignments||[],
        settings:remote.settings||{}
      };
      cache();
    }else{
      await setDoc(ref,{...coreDbSnapshot(),updatedAt:new Date().toISOString()},{merge:false});
    }

    cloudReady=true;
    setWriteUiReady(true);
    setStatus("v4.1.2 · хмара ✓");

    if(!localStorage.getItem("rems_public_existing_profiles_v37")){
      let changed=false;
      db.students=db.students.map(s=>{
        const pid=publicProfileIdFor(s);
        if(!REMS44_PUBLIC_SEED[pid]) return s;
        const pp=publicProfileFor(s);
        if(pp?.published===true) return s;
        changed=true;
        return {...s,publicProfile:{...pp,published:true}};
      });
      if(changed){
        cache();
        try{
          await setDoc(doc(cloudDb,"rems_control",CLOUD_DOC),{...coreDbSnapshot(),updatedAt:new Date().toISOString()},{merge:false});
        }catch(err){console.error("Public migration save failed:",err);}
      }
      localStorage.setItem("rems_public_existing_profiles_v37","1");
    }

    if(!localStorage.getItem("rems_public_docs_seed_v37")){
      try{
        for(const s of db.students){
          if(publicProfileFor(s)?.published===true) await publishOnePublicProfile(s);
        }
        localStorage.setItem("rems_public_docs_seed_v37","1");
      }catch(err){console.error("Public profile seeding failed:",err);}
    }

    if(!localStorage.getItem("rems_student_media_migrated_v38")){
      let hadEmbedded=false;
      for(const s of db.students){
        const legacy=String(s?.photoData||s?.publicProfile?.photoData||"").trim();
        if(legacy){
          hadEmbedded=true;
          try{ await saveStudentMedia(s,legacy); }catch(err){ console.error("Legacy photo migration failed:",s.id,err); }
        }
      }
      if(hadEmbedded){
        db.students=db.students.map(s=>{
          const out={...s};
          delete out.photoData;
          if(out.publicProfile){
            out.publicProfile={...out.publicProfile};
            delete out.publicProfile.photoData;
          }
          return out;
        });
        cache();
        try{
          await setDoc(doc(cloudDb,"rems_control",CLOUD_DOC),{...coreDbSnapshot(),updatedAt:new Date().toISOString()},{merge:false});
        }catch(err){ console.error("Core media cleanup failed:",err); }
      }
      localStorage.setItem("rems_student_media_migrated_v38","1");
    }

    await loadAllStudentMedia();

    // v1.3.4: repair/seed project calendars in the actual cloud document.
    if(!localStorage.getItem("rems_voice14_seed_v2")){
      const seededVoice=await ensureVoice14();
      if(seededVoice) localStorage.setItem("rems_voice14_seed_v2","1");
    }
    if(!localStorage.getItem("rems_jesc_seed_v2")){
      const seededJesc=await ensureJescDates();
      if(seededJesc) localStorage.setItem("rems_jesc_seed_v2","1");
    }

    currentView="dashboard";
    try{
      dashboard();
    }catch(renderErr){
      console.error("Dashboard render error:",renderErr);
      // UI rendering errors must not disable a healthy Firebase connection.
    }

    onSnapshot(ref,s=>{
      if(!s.exists()) return;
      if(cloudWriting) return;
      const remote=s.data();
      applyingRemote=true;
      db={
        students:remote.students||[],
        projects:remote.projects||[],
        events:remote.events||[],
        assignments:remote.assignments||[],
        settings:remote.settings||{}
      };
      cache();
      applyingRemote=false;

      currentView=document.querySelector(".nav.active")?.dataset.view||currentView||"dashboard";
      loadAllStudentMedia().finally(()=>{
        try{
          refreshCurrentView();
        }catch(renderErr){
          console.error("View refresh error:",renderErr);
        }
      });
      setStatus("v4.1.2 · хмара ✓");
    },err=>{
      console.error(err);
      cloudReady=false;
      setWriteUiReady(false);
      setStatus("v4.1.2 · хмара недоступна");
    });

  }catch(err){
    console.error(err);
    cloudReady=false;
    setWriteUiReady(false);
    setStatus("v4.1.2 · хмара недоступна");
    try{ dashboard(); }catch(renderErr){ console.error("Offline dashboard render error:",renderErr); }
  }finally{
    cloudInitializing=false;
  }
}


async function bootstrapAuth(){
  const cfg=window.REMS_FIREBASE_CONFIG;
  if(!cfg){
    setStatus("v4.1.2 · Firebase не налаштовано");
    showLogin();
    return;
  }

  try{
    firebaseApp=initializeApp(cfg);
    auth=getAuth(firebaseApp);
    await setPersistence(auth,browserLocalPersistence);

    onAuthStateChanged(auth,async user=>{
      currentUser=user||null;

      if(currentUser){
        hideLogin();
        ensureLogout();
        setStatus("v4.1.2 · вхід ✓");
        if(!cloudReady) await initCloud();
      }else{
        cloudReady=false;
        setWriteUiReady(false);
        clearLogout();
        showLogin();
        setStatus("v4.1.2 · потрібен вхід");
      }
    });
  }catch(err){
    console.error(err);
    setStatus("v4.1.2 · помилка авторизації");
    showLogin();
  }
}

window.addEventListener("online",()=>{
  if(currentUser && !cloudReady) initCloud();
});

setWriteUiReady(false);
ensureNewProjectLogoField();
ensureEventTimeLocationFields();
bootstrapAuth();