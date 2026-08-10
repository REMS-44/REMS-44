import {getMeeting} from "./industry-data.js?v=6";
const root=document.getElementById("article"), id=new URLSearchParams(location.search).get("id");
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt=d=>{if(!d)return"";const [y,m,day]=d.split("-");return `${day}.${m}.${y}`};
const youtube=u=>{try{const x=new URL(u);if(x.hostname.includes("youtu.be"))return x.pathname.slice(1);if(x.searchParams.get("v"))return x.searchParams.get("v");const m=x.pathname.match(/(?:embed|shorts)\/([^/]+)/);return m?.[1]||""}catch{return""}};
const socialEmbed=u=>{
  try{
    const x=new URL(u);
    const host=x.hostname.replace(/^www\./,"").toLowerCase();

    if(host==="instagram.com"){
      const parts=x.pathname.split("/").filter(Boolean);
      const kind=parts[0];
      const code=parts[1];
      if(["p","reel","reels","tv"].includes(kind)&&code){
        const normalized=kind==="reels"?"reel":kind;
        return {kind:"instagram",src:`https://www.instagram.com/${normalized}/${code}/embed/`};
      }
    }

    if(host==="tiktok.com"||host.endsWith(".tiktok.com")){
      const m=x.pathname.match(/\/video\/(\d+)/);
      if(m?.[1]) return {kind:"tiktok",src:`https://www.tiktok.com/player/v1/${m[1]}`};
    }
  }catch{}
  return null;
};
const hostname=u=>{
  try{return new URL(u).hostname.replace(/^www\./,"")}catch{return""}
};
const fileLabel=u=>{
  try{
    const p=decodeURIComponent(new URL(u).pathname.split("/").pop()||"");
    return p||"Файл";
  }catch{return "Файл"}
};


const img=(u,cls="",alt="")=>u?`<img class="${cls}" loading="lazy" src="${esc(u)}" alt="${esc(alt)}" onerror="this.closest('figure,div')?.classList.add('media-error');this.remove()">`:"";

function block(b){
  if(b.type==="text"){
    const paras=esc(b.content).split(/\n\s*\n+/).filter(Boolean).map(p=>`<p>${p.replace(/\n/g,"<br>")}</p>`).join("");
    return `<section class="article-text">${paras}</section>`;
  }

  if(b.type==="heading"){
    return `<h2 class="article-heading">${esc(b.content)}</h2>`;
  }

  if(b.type==="quote"){
    return `<figure class="article-quote">
      <blockquote>${esc(b.content)}</blockquote>
      ${b.caption?`<figcaption>${esc(b.caption)}</figcaption>`:""}
    </figure>`;
  }

  /* Compatibility with the old photo blocks */
  if(b.type==="image"){
    return `<figure class="article-wide">
      ${img(b.url,"",b.caption||"")}
      ${b.caption?`<figcaption>${esc(b.caption)}</figcaption>`:""}
    </figure>`;
  }

  if(b.type==="twoImages"){
    return `<figure class="article-two">
      ${img(b.url)}${img(b.url2)}
      ${b.caption?`<figcaption>${esc(b.caption)}</figcaption>`:""}
    </figure>`;
  }

  /* New unlimited photo block */
  if(b.type==="gallery"){
    const images=(b.items||[]).filter(Boolean);
    if(!images.length) return "";
    const sizeClass=images.length===1?"is-one":images.length===2?"is-two":images.length===3?"is-three":"is-many";
    return `<figure class="article-photo-block ${sizeClass}">
      <div class="article-gallery">${images.map(u=>img(u)).join("")}</div>
      ${b.caption?`<figcaption>${esc(b.caption)}</figcaption>`:""}
    </figure>`;
  }

  if(b.type==="story"){
    return b.url?`<figure class="story-wrap">
      <video controls playsinline preload="metadata" src="${esc(b.url)}"></video>
      ${b.caption?`<figcaption>${esc(b.caption)}</figcaption>`:""}
    </figure>`:"";
  }

  if(b.type==="youtube"){
    const y=youtube(b.url);
    return y?`<figure class="youtube-wrap">
      <iframe src="https://www.youtube.com/embed/${esc(y)}" title="YouTube video" loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      ${b.caption?`<figcaption>${esc(b.caption)}</figcaption>`:""}
    </figure>`:"";
  }

  if(b.type==="social"){
    if(!b.url) return "";
    const embed=socialEmbed(b.url);
    const label=embed?.kind==="instagram"?"Instagram":embed?.kind==="tiktok"?"TikTok":"Соціальна мережа";

    if(embed){
      return `<figure class="social-wrap ${embed.kind}">
        <div class="social-frame-shell">
          <iframe src="${esc(embed.src)}" title="${label}" loading="lazy"
            allow="encrypted-media; fullscreen; picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        ${b.caption?`<figcaption>${esc(b.caption)}</figcaption>`:""}
        <a class="article-inline-link" href="${esc(b.url)}" target="_blank" rel="noopener">Відкрити в ${label} ↗</a>
      </figure>`;
    }

    return `<a class="article-inline-card social-inline" href="${esc(b.url)}" target="_blank" rel="noopener">
      <div class="inline-card-main">
        <span class="inline-card-type">Соціальна мережа</span>
        <strong>${esc(b.caption||hostname(b.url)||"Відкрити публікацію")}</strong>
        <small>${esc(hostname(b.url))}</small>
      </div>
      <span class="inline-card-arrow">↗</span>
    </a>`;
  }

  if(b.type==="audio"){
    if(!b.url) return "";
    return `<figure class="audio-wrap">
      <div class="audio-label">Аудіо</div>
      ${b.caption?`<h3>${esc(b.caption)}</h3>`:""}
      <audio controls preload="metadata" src="${esc(b.url)}"></audio>
      <a class="article-inline-link" href="${esc(b.url)}" target="_blank" rel="noopener">Відкрити аудіофайл ↗</a>
    </figure>`;
  }

  if(b.type==="file"){
    if(!b.url) return "";
    return `<a class="article-inline-card file-inline" href="${esc(b.url)}" target="_blank" rel="noopener">
      <div class="inline-card-icon">PDF</div>
      <div class="inline-card-main">
        <span class="inline-card-type">Файл / матеріал</span>
        <strong>${esc(b.content||fileLabel(b.url))}</strong>
        ${b.caption?`<small>${esc(b.caption)}</small>`:`<small>${esc(fileLabel(b.url))}</small>`}
      </div>
      <span class="inline-card-arrow">↗</span>
    </a>`;
  }

  if(b.type==="link"){
    if(!b.url) return "";
    return `<a class="article-inline-card link-inline" href="${esc(b.url)}" target="_blank" rel="noopener">
      <div class="inline-card-main">
        <span class="inline-card-type">Посилання</span>
        <strong>${esc(b.content||hostname(b.url)||"Відкрити")}</strong>
        ${b.caption?`<small>${esc(b.caption)}</small>`:`<small>${esc(hostname(b.url))}</small>`}
      </div>
      <span class="inline-card-arrow">↗</span>
    </a>`;
  }

  if(b.type==="guest"){
    return `<aside class="guest-card">
      <div class="guest-photo">
        ${b.url?img(b.url,"",b.content||"Гість"):`<span>${esc((b.content||"?").trim().charAt(0).toUpperCase())}</span>`}
      </div>
      <div class="guest-copy">
        <span class="guest-kicker">Про гостя</span>
        ${b.content?`<h3>${esc(b.content)}</h3>`:""}
        ${b.caption?`<p>${esc(b.caption).replace(/\n/g,"<br>")}</p>`:""}
        ${b.url2?`<a href="${esc(b.url2)}" target="_blank" rel="noopener">Instagram / сайт ↗</a>`:""}
      </div>
    </aside>`;
  }

  if(b.type==="divider"){
    return `<div class="article-divider" aria-hidden="true"><span></span></div>`;
  }

  return "";
}

try{
  const x=await getMeeting(id);
  if(!x){
    root.innerHTML='<div class="industry-empty"><b>Матеріал не знайдено.</b><a href="industry.html">Повернутися до всіх зустрічей</a></div>';
  }else{
    document.title=`${x.guest||x.title} — Зустріч із індустрією`;
    root.innerHTML=`
      <header class="article-hero">
        <div class="article-kicker">Зустріч із індустрією · ${fmt(x.date)}</div>
        <h1>${esc(x.guest||x.title)}</h1>
        ${x.guestRole?`<p class="article-role">${esc(x.guestRole)}</p>`:""}
        ${x.title&&x.guest?`<h2>${esc(x.title)}</h2>`:""}
        ${x.excerpt?`<p class="article-lead">${esc(x.excerpt)}</p>`:""}
        ${x.cover?`<figure class="article-cover-wrap"><img class="article-cover" src="${esc(x.cover)}" alt="${esc(x.guest||x.title)}" onerror="this.closest('figure').classList.add('media-error');this.remove()"></figure>`:""}
      </header>
      <article class="article-body">${(x.blocks||[]).map(block).join("")}</article>`;
  }
}catch(e){
  console.error(e);
  root.innerHTML='<div class="industry-empty"><span class="empty-number">•••</span><div><b>Матеріал тимчасово недоступний</b><p>Поверніться до нього трохи пізніше.</p></div></div>';
}
