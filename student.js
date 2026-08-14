import { getPublicStudents } from "./public-data.js?v=8";

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
function normalizeLines(value){
  if(Array.isArray(value)) return value.map(x=>String(x).trim()).filter(Boolean);
  return String(value||"").split(/\n+/).map(x=>x.trim()).filter(Boolean);
}
function cleanExternalLinks(text){
  const links=[];
  const stripped=String(text||"").replace(/https?:\/\/\S+/g,url=>{
    links.push(url.replace(/[),.;]+$/,""));
    return "";
  }).replace(/\s{2,}/g," ").trim();
  return {text:stripped,links};
}
function looksLikeHeading(line){
  const s=String(line||"").trim();
  if(!s || s.length>90) return false;
  if(/^https?:\/\//i.test(s)) return false;
  if(/^[-•]/.test(s)) return false;
  if(/^\d{1,2}[./]\d{1,2}[./]\d{2,4}/.test(s)) return false;
  if(/^\d{4}/.test(s)) return false;
  if(/[.!?]$/.test(s)) return false;

  const words=s.split(/\s+/);
  if(words.length<=7) return true;
  return false;
}
function splitBioAndExperience(bioValue, achievements){
  const bioLines=normalizeLines(bioValue);
  const explicitExperience=Array.isArray(achievements)?achievements.map(x=>String(x).trim()).filter(Boolean):[];

  const markerRegex=/^(досвід( роботи)?|професійний досвід|творчий досвід|проєктний досвід)$/i;
  const idx=bioLines.findIndex(x=>markerRegex.test(x));

  let bio=[];
  let experience=[];

  if(idx>=0){
    bio=bioLines.slice(0,idx);
    experience=bioLines.slice(idx+1);
  }else{
    // Keep descriptive paragraphs as "About me" until the first obvious role/heading/date.
    let cut=-1;
    for(let i=0;i<bioLines.length;i++){
      const line=bioLines[i];
      if(i>=2 && (
        /^\d{1,2}[./]\d{1,2}[./]\d{2,4}/.test(line) ||
        /^\d{4}/.test(line) ||
        looksLikeHeading(line) && /асист|концерт|адміні|поет|журналіст|проєкт|організ|волонтер|стаж|досвід/i.test(line)
      )){
        cut=i; break;
      }
    }
    if(cut>=0){
      bio=bioLines.slice(0,cut);
      experience=bioLines.slice(cut);
    }else{
      bio=bioLines;
    }
  }

  // Append explicit experience field after text-derived experience.
  if(explicitExperience.length) experience=[...experience,...explicitExperience];

  // Merge tiny broken bio fragments back into proper paragraphs.
  const mergedBio=[];
  for(const line of bio){
    if(!mergedBio.length){
      mergedBio.push(line);
      continue;
    }
    const prev=mergedBio[mergedBio.length-1];
    const fragment=line.length<90 && !/[.!?]$/.test(prev);
    if(fragment){
      mergedBio[mergedBio.length-1]=`${prev} ${line}`.replace(/\s+/g," ").trim();
    }else{
      mergedBio.push(line);
    }
  }

  return {bio:mergedBio,experience};
}
function parseExperienceGroups(items){
  const lines=normalizeLines(items);
  const groups=[];
  let current={title:"Досвід",items:[]};

  const pushCurrent=()=>{
    if(current.items.length) groups.push(current);
  };

  for(const lineRaw of lines){
    const line=String(lineRaw||"").trim();
    if(!line) continue;

    if(looksLikeHeading(line)){
      pushCurrent();
      current={title:line,items:[]};
    }else{
      current.items.push(line.replace(/^[-•]\s*/,""));
    }
  }
  pushCurrent();

  // If everything became headings and no items, treat lines as one list.
  if(!groups.length && lines.length){
    return [{title:"Досвід",items:lines}];
  }
  return groups;
}
function parseDateAndText(line){
  const s=String(line||"").trim();
  const m=s.match(/^((?:\d{1,2}[./]\d{1,2}(?:[./]\d{2,4})?)(?:\s*[-–—]\s*(?:\d{1,2}[./]\d{1,2}(?:[./]\d{2,4})?))?|\d{4})\s+(.*)$/);
  if(!m) return {date:"",text:s};
  return {date:m[1],text:m[2]};
}
function renderExperience(items){
  const groups=parseExperienceGroups(items);
  if(!groups.length) return "";

  return `<section class="portfolio-card">
    <h2>Досвід</h2>
    <div class="experience-groups">
      ${groups.map(group=>{
        const rows=[];
        const links=[];
        for(const item of group.items){
          const cleaned=cleanExternalLinks(item);
          cleaned.links.forEach(url=>links.push(url));
          if(cleaned.text){
            const parsed=parseDateAndText(cleaned.text);
            rows.push(parsed);
          }
        }

        return `<div class="experience-group">
          <h3>${esc(group.title)}</h3>
          <div>
            ${rows.length?`<div class="experience-timeline">
              ${rows.map(row=>`<div class="experience-row">
                <div class="experience-date">${row.date?esc(row.date):""}</div>
                <div class="experience-text">${esc(row.text)}</div>
              </div>`).join("")}
            </div>`:""}
            ${links.length?`<div class="clean-links" style="margin-top:12px">
              ${links.map((url,i)=>`<a class="clean-link" href="${esc(url)}" target="_blank" rel="noopener">Переглянути публікацію${links.length>1?` ${i+1}`:""} ↗</a>`).join("")}
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
  const split=splitBioAndExperience(student.bio,student.achievements);
  const photo=student.photoData||student.photo||"";
  const skills=Array.isArray(student.skills)?student.skills:[];

  profileContainer.innerHTML=`
    <article class="student-profile">
      <aside class="profile-image-column">
        <img class="large-profile-image" src="${esc(photo)}" alt="${esc(student.name)}">
      </aside>
      <main class="profile-text-column">
        <div class="profile-kicker">${esc(student.group||"Студенти")} · КНУКіМ</div>
        <h1 class="profile-name">${esc(student.name)}</h1>
        <div class="profile-speciality">${esc(student.role||"Режисер/ка естради і шоу")}</div>

        <div class="portfolio-stack">
          ${split.bio.length?`<section class="portfolio-card"><h2>Про себе</h2><div class="bio-copy">${split.bio.map(p=>`<p>${esc(p)}</p>`).join("")}</div></section>`:""}
          ${skills.length?`<section class="portfolio-card"><h2>Навички та інтереси</h2><div class="skills-list">${skills.map(x=>`<span class="skill-item">${esc(x)}</span>`).join("")}</div></section>`:""}
          ${renderExperience(split.experience)}
          ${renderVideos(student.videos)}
          ${renderGallery(student.gallery)}
          ${renderSocials(student.socials)}
        </div>
      </main>
    </article>`;
}
