import { getPublicStudents } from "./public-data.js?v=4";

const profileContainer=document.getElementById("studentProfile");
const params=new URLSearchParams(window.location.search);
const studentId=params.get("id");
const students=await getPublicStudents(window.REMS44_STUDENTS||[]);
const student=students.find(item=>item.id===studentId);

function esc(value){
  return String(value??"").replace(/[&<>"']/g,ch=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[ch]));
}
function getYoutubeId(url){
  const s=String(url||"").trim();
  const m=s.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/i);
  return m?.[1]||"";
}
function splitParagraphs(value){
  if(Array.isArray(value)) return value.map(x=>String(x).trim()).filter(Boolean);
  return String(value||"").split(/\n{2,}/).map(x=>x.trim()).filter(Boolean);
}
function parseExperience(items){
  const groups=[];
  const defaultTitle="Досвід";
  let current={title:defaultTitle,items:[]};

  (Array.isArray(items)?items:[]).forEach(raw=>{
    const line=String(raw||"").trim();
    if(!line) return;
    const isHeading =
      line.length<80 &&
      !/^[-•\d]/.test(line) &&
      !/^https?:\/\//i.test(line) &&
      !/\d{2}[./]\d{2}/.test(line) &&
      !/\d{4}/.test(line);

    if(isHeading){
      if(current.items.length || current.title!==defaultTitle) groups.push(current);
      current={title:line,items:[]};
    }else{
      current.items.push(line.replace(/^[-•]\s*/,""));
    }
  });
  if(current.items.length || current.title!==defaultTitle) groups.push(current);
  return groups.filter(g=>g.items.length);
}
function cleanExternalLinks(text){
  const links=[];
  const stripped=String(text||"").replace(/https?:\/\/\S+/g,url=>{
    links.push(url.replace(/[),.;]+$/,""));
    return "";
  }).replace(/\s{2,}/g," ").trim();
  return {text:stripped,links};
}
function renderExperience(items){
  const groups=parseExperience(items);
  if(!groups.length) return "";
  return `<section class="portfolio-card">
    <h2>Досвід</h2>
    <div class="experience-groups">
      ${groups.map(group=>{
        const linkItems=[];
        const textItems=group.items.map(item=>{
          const cleaned=cleanExternalLinks(item);
          cleaned.links.forEach(url=>linkItems.push(url));
          return cleaned.text;
        }).filter(Boolean);

        return `<div class="experience-group">
          <h3>${esc(group.title)}</h3>
          <div>
            ${textItems.length?`<ul class="experience-list">${textItems.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}
            ${linkItems.length?`<div class="clean-links" style="margin-top:12px">
              ${linkItems.map((url,i)=>`<a class="clean-link" href="${esc(url)}" target="_blank" rel="noopener">Переглянути публікацію${linkItems.length>1?` ${i+1}`:""} ↗</a>`).join("")}
            </div>`:""}
          </div>
        </div>`;
      }).join("")}
    </div>
  </section>`;
}
function renderSocials(socials){
  const map=[["instagram","Instagram"],["tiktok","TikTok"],["youtube","YouTube"],["telegram","Telegram"],["facebook","Facebook"],["email","Email"]];
  const links=map.map(([key,label])=>{
    const value=String(socials?.[key]||"").trim();
    if(!value) return "";
    const href=key==="email"?`mailto:${value}`:value;
    return `<a class="clean-link" href="${esc(href)}" target="_blank" rel="noopener">${label} ↗</a>`;
  }).filter(Boolean);
  return links.length?`<section class="portfolio-card"><h2>Контакти та соціальні мережі</h2><div class="clean-links">${links.join("")}</div></section>`:"";
}
function renderVideos(videos){
  const items=(Array.isArray(videos)?videos:[]).map(v=>{
    const id=getYoutubeId(v?.youtube);
    if(!id) return "";
    return `<div class="video-card"><iframe src="https://www.youtube.com/embed/${esc(id)}" allowfullscreen loading="lazy"></iframe><h3>${esc(v?.title||"Відеоробота")}</h3></div>`;
  }).filter(Boolean);
  return items.length?`<section class="portfolio-card"><h2>Відеороботи</h2><div class="video-grid">${items.join("")}</div></section>`:"";
}
function renderGallery(gallery){
  const items=(Array.isArray(gallery)?gallery:[]).filter(Boolean);
  return items.length?`<section class="portfolio-card"><h2>Галерея</h2><div class="gallery-grid">${items.map(src=>`<img src="${esc(src)}" alt="" loading="lazy">`).join("")}</div></section>`:"";
}

if(!student){
  profileContainer.innerHTML=`<div class="not-found"><h1>Студента не знайдено</h1><a href="index.html#students">← Усі студенти</a></div>`;
}else{
  const bio=splitParagraphs(student.bio);
  const photo=student.photoData||student.photo||"";
  const achievements=Array.isArray(student.achievements)?student.achievements:[];
  const skills=Array.isArray(student.skills)?student.skills:[];

  profileContainer.innerHTML=`
    <article class="student-profile">
      <aside class="profile-image-column">
        <img class="large-profile-image" src="${esc(photo)}" alt="${esc(student.name)}">
      </aside>
      <main class="profile-text-column">
        <div class="profile-kicker">РЕМС-44 · КНУКіМ</div>
        <h1 class="profile-name">${esc(student.name)}</h1>
        <div class="profile-speciality">${esc(student.role||"Режисер/ка естради і шоу")}</div>

        <div class="portfolio-stack">
          ${bio.length?`<section class="portfolio-card"><h2>Про себе</h2><div class="bio-copy">${bio.map(p=>`<p>${esc(p)}</p>`).join("")}</div></section>`:""}
          ${skills.length?`<section class="portfolio-card"><h2>Навички та інтереси</h2><div class="skills-list">${skills.map(x=>`<span class="skill-item">${esc(x)}</span>`).join("")}</div></section>`:""}
          ${renderExperience(achievements)}
          ${renderVideos(student.videos)}
          ${renderGallery(student.gallery)}
          ${renderSocials(student.socials)}
        </div>
      </main>
    </article>`;
}
