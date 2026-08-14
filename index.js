import { getPublicStudents } from "./public-data.js?v=7";

const studentGrid=document.getElementById("studentGrid");
const studentCount=document.getElementById("studentCount");
const tabs=document.getElementById("studentGroupTabs");
const students=await getPublicStudents(window.REMS44_STUDENTS||[]);

function esc(value){
  return String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function studentWord(count){
  const a=count%100,b=count%10;
  if(a>=11&&a<=14)return"студентів";
  if(b===1)return"студент";
  if(b>=2&&b<=4)return"студенти";
  return"студентів";
}

const groups=[...new Set(students.map(s=>String(s.group||"").trim()).filter(Boolean))];
let activeGroup="";

function render(){
  const visible=activeGroup
    ? students.filter(s=>String(s.group||"")===activeGroup)
    : students;

  studentCount.textContent=`${visible.length} ${studentWord(visible.length)}`;

  studentGrid.innerHTML=visible.map(student=>{
    const photo=String(student.photoData||student.photo||"").trim();
    const initials=String(student.name||"?")
      .split(/\s+/).slice(0,2).map(x=>x.charAt(0)).join("").toUpperCase();

    return `<a class="student-card" href="student.html?id=${encodeURIComponent(student.id)}">
      <div class="student-photo-wrapper">
        ${photo
          ? `<img class="student-image" src="${esc(photo)}" alt="${esc(student.name)}" loading="lazy">`
          : `<div class="student-photo-placeholder">${esc(initials)}</div>`}
      </div>
      <div class="student-card-info">
        <span class="student-group-badge">${esc(student.group||"")}</span>
        <h3>${esc(student.name)}</h3>
        <p>${esc(student.role||"Режисура естради і шоу")}</p>
      </div>
    </a>`;
  }).join("");

  tabs?.querySelectorAll("button").forEach(btn=>{
    btn.classList.toggle("active",(btn.dataset.group||"")===activeGroup);
  });
}

if(tabs){
  tabs.innerHTML=[
    `<button type="button" class="student-group-tab active" data-group="">Усі <span>${students.length}</span></button>`,
    ...groups.map(g=>{
      const n=students.filter(s=>String(s.group||"")===g).length;
      return `<button type="button" class="student-group-tab" data-group="${esc(g)}">${esc(g)} <span>${n}</span></button>`;
    })
  ].join("");

  tabs.querySelectorAll("button").forEach(btn=>{
    btn.onclick=()=>{
      activeGroup=btn.dataset.group||"";
      render();
    };
  });
}

render();
