import {getMeetings} from "./industry-data.js?v=1";
const grid=document.getElementById("meetingGrid");
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt=d=>{if(!d)return"";const [y,m,day]=d.split("-");return `${day}.${m}.${y}`};
const card=(x,i)=>`<a class="meeting-card ${i===0?'meeting-card-featured':''}" href="meeting.html?id=${encodeURIComponent(x.id)}">
  <div class="meeting-cover">${x.cover?`<img src="${esc(x.cover)}" alt="">`:`<div class="meeting-cover-empty"><span>Зустріч<br>із індустрією</span></div>`}</div>
  <div class="meeting-copy">
    <div class="meeting-meta"><span>${fmt(x.date)}</span><span>РЕМС-44</span></div>
    <h2>${esc(x.guest||x.title||'Зустріч')}</h2>
    ${x.guestRole?`<p class="meeting-role">${esc(x.guestRole)}</p>`:''}
    ${x.title&&x.guest?`<h3>${esc(x.title)}</h3>`:''}
    ${x.excerpt?`<p class="meeting-excerpt">${esc(x.excerpt)}</p>`:''}
    <span class="meeting-more">Відкрити матеріал <b>→</b></span>
  </div>
</a>`;
try{
  const items=await getMeetings();
  if(!items.length){
    grid.innerHTML='<div class="industry-empty"><span class="empty-number">00</span><div><b>Матеріали готуються</b><p>Незабаром тут з’являться перші зустрічі серії.</p></div></div>';
  } else grid.innerHTML=items.map(card).join('');
}catch(e){
  console.error(e);
  grid.innerHTML='<div class="industry-empty"><span class="empty-number">•••</span><div><b>Матеріали скоро з’являться</b><p>Ми оновлюємо архів зустрічей.</p></div></div>';
}
