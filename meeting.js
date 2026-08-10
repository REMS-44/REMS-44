import {getMeeting} from "./industry-data.js?v=4";
const root=document.getElementById("article"), id=new URLSearchParams(location.search).get("id");
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt=d=>{if(!d)return"";const [y,m,day]=d.split("-");return `${day}.${m}.${y}`};
const youtube=u=>{try{const x=new URL(u);if(x.hostname.includes("youtu.be"))return x.pathname.slice(1);if(x.searchParams.get("v"))return x.searchParams.get("v");const m=x.pathname.match(/(?:embed|shorts)\/([^/]+)/);return m?.[1]||""}catch{return""}};

const img=(u,cls="",alt="")=>u?`<img class="${cls}" loading="lazy" src="${esc(u)}" alt="${esc(alt)}" onerror="this.closest('figure,div')?.classList.add('media-error');this.remove()">`:"";

function block(b){
  if(b.type==="text"){
    const paras=esc(b.content).split(/\n\s*\n+/).filter(Boolean).map(p=>`<p>${p.replace(/\n/g,"<br>")}</p>`).join("");
    return `<section class="article-text">${paras}</section>`;
  }
  if(b.type==="heading") return `<h2 class="article-heading">${esc(b.content)}</h2>`;
  if(b.type==="quote") return `<figure class="article-quote"><blockquote>${esc(b.content)}</blockquote>${b.caption?`<figcaption>${esc(b.caption)}</figcaption>`:""}</figure>`;
  if(b.type==="image") return `<figure class="article-wide">${img(b.url,"",b.caption||"")}${b.caption?`<figcaption>${esc(b.caption)}</figcaption>`:""}</figure>`;
  if(b.type==="twoImages") return `<figure class="article-two">${img(b.url)}${img(b.url2)}${b.caption?`<figcaption>${esc(b.caption)}</figcaption>`:""}</figure>`;
  if(b.type==="gallery") return `<div class="article-gallery">${(b.items||[]).filter(Boolean).map(u=>img(u)).join("")}</div>`;
  if(b.type==="story") return b.url?`<figure class="story-wrap"><video controls playsinline preload="metadata" src="${esc(b.url)}"></video>${b.caption?`<figcaption>${esc(b.caption)}</figcaption>`:""}</figure>`:"";
  if(b.type==="youtube"){
    const y=youtube(b.url);
    return y?`<figure class="youtube-wrap"><iframe src="https://www.youtube.com/embed/${esc(y)}" title="YouTube video" allowfullscreen></iframe>${b.caption?`<figcaption>${esc(b.caption)}</figcaption>`:""}</figure>`:"";
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
