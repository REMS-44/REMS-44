import {getMeetings} from "./industry-data.js?v=4";
const grid=document.getElementById("meetingGrid"), sort=document.getElementById("meetingSort");
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt=d=>{if(!d)return"";const [y,m,day]=d.split("-");return `${day}.${m}.${y}`};

const card=x=>`<a class="meeting-card" href="meeting.html?id=${encodeURIComponent(x.id)}">
  <div class="meeting-cover ${x.cover?"":"is-empty"}">
    ${x.cover?`<img loading="lazy" src="${esc(x.cover)}" alt="${esc(x.guest||x.title||"Зустріч")}" onerror="this.closest('.meeting-cover').classList.add('is-empty');this.remove()">`:`<span>Фото зустрічі</span>`}
  </div>
  <div class="meeting-copy">
    <div class="meeting-meta"><span>${fmt(x.date)}</span></div>
    <h2>${esc(x.guest||x.title||'Зустріч')}</h2>
    ${x.guestRole?`<p class="meeting-role">${esc(x.guestRole)}</p>`:''}
    ${x.title&&x.guest?`<h3>${esc(x.title)}</h3>`:''}
    ${x.excerpt?`<p class="meeting-excerpt">${esc(x.excerpt)}</p>`:''}
    <span class="meeting-more">Відкрити матеріал <b>→</b></span>
  </div>
</a>`;

let items=[];
function render(){
  const a=[...items].sort((a,b)=>{
    return sort?.value==="old"
      ? String(a.date||"").localeCompare(String(b.date||""))
      : String(b.date||"").localeCompare(String(a.date||""));
  });
  grid.innerHTML=a.map(card).join("");
}
try{
  items=await getMeetings();
  if(!items.length){
    grid.innerHTML='<div class="industry-empty"><span class="empty-number">00</span><div><b>Матеріали готуються</b><p>Незабаром тут з’являться перші зустрічі серії.</p></div></div>';
  }else render();
}catch(e){
  console.error(e);
  grid.innerHTML='<div class="industry-empty"><span class="empty-number">•••</span><div><b>Матеріали скоро з’являться</b><p>Ми оновлюємо сторінку зустрічей.</p></div></div>';
}
sort?.addEventListener("change",render);
