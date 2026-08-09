import { getPublicStudents } from "./public-data.js?v=5";
const studentGrid=document.getElementById("studentGrid");
const studentCount=document.getElementById("studentCount");
const students=await getPublicStudents(window.REMS44_STUDENTS||[]);
function studentWord(count){const a=count%100,b=count%10;if(a>=11&&a<=14)return"студентів";if(b===1)return"студент";if(b>=2&&b<=4)return"студенти";return"студентів";}
students.forEach(student=>{
  const card=document.createElement("a"); card.className="student-card"; card.href=`student.html?id=${encodeURIComponent(student.id)}`;
  card.innerHTML=`<div class="student-photo-wrapper"><img class="student-image" src="${student.photoData || student.photo}" alt="${student.name}" loading="lazy"></div><div class="student-card-info"><h3>${student.name}</h3><p>${student.role}</p></div>`;
  studentGrid.appendChild(card);
});
studentCount.textContent=`${students.length} ${studentWord(students.length)}`;
