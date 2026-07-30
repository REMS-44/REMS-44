const params = new URLSearchParams(window.location.search);
const studentId = params.get("id");
const student = students.find((item) => item.id === studentId);

const profile = document.getElementById("studentProfile");
const notFound = document.getElementById("notFound");

function getYouTubeId(value) {
  if (!value) return "";
  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) return value;

  try {
    const url = new URL(value);
    if (url.hostname.includes("youtu.be")) return url.pathname.slice(1);
    if (url.searchParams.get("v")) return url.searchParams.get("v");
    const match = url.pathname.match(/\/embed\/([^/?]+)/);
    return match ? match[1] : "";
  } catch {
    return "";
  }
}

function addSocialLink(container, label, url) {
  if (!url) return;
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = `${label} ↗`;
  container.append(link);
}

if (!student) {
  notFound.hidden = false;
} else {
  profile.hidden = false;
  document.title = `${student.name} — РЕМС-44`;

  document.getElementById("studentPhoto").src = student.photo;
  document.getElementById("studentPhoto").alt = student.name;
  document.getElementById("studentName").textContent = student.name;
  document.getElementById("studentRole").textContent = student.role;

  const bio = document.getElementById("studentBio");
  (student.bio || []).forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    bio.append(p);
  });

  const facts = document.getElementById("studentFacts");
  Object.entries(student.facts || {}).forEach(([label, value]) => {
    const row = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = label;
    dd.textContent = value;
    row.append(dt, dd);
    facts.append(row);
  });

  const socialLinks = document.getElementById("socialLinks");
  addSocialLink(socialLinks, "Instagram", student.socials?.instagram);
  addSocialLink(socialLinks, "Facebook", student.socials?.facebook);
  addSocialLink(socialLinks, "TikTok", student.socials?.tiktok);
  addSocialLink(socialLinks, "YouTube", student.socials?.youtube);
  addSocialLink(socialLinks, "Telegram", student.socials?.telegram);

  const projectsSection = document.getElementById("projectsSection");
  const projectsGrid = document.getElementById("projectsGrid");
  const projects = student.projects || [];

  if (!projects.length) {
    projectsSection.hidden = true;
  } else {
    projects.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.innerHTML = `
        <div>
          <p class="project-meta">${project.year || ""}${project.role ? " · " + project.role : ""}</p>
          <h3>${project.title}</h3>
          <p>${project.description || ""}</p>
        </div>
      `;
      projectsGrid.append(card);
    });
  }

  const videosSection = document.getElementById("videosSection");
  const videosGrid = document.getElementById("videosGrid");
  const videos = (student.videos || []).filter((video) => getYouTubeId(video.youtube));

  if (!videos.length) {
    videosSection.hidden = true;
  } else {
    videos.forEach((video) => {
      const id = getYouTubeId(video.youtube);
      const card = document.createElement("article");
      card.className = "video-card";
      card.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${id}"
          title="${video.title || "YouTube відео"}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
        <h3>${video.title || "Відео"}</h3>
      `;
      videosGrid.append(card);
    });
  }

  const gallerySection = document.getElementById("gallerySection");
  const galleryGrid = document.getElementById("galleryGrid");
  const gallery = student.gallery || [];

  if (!gallery.length) {
    gallerySection.hidden = true;
  } else {
    gallery.forEach((item) => {
      const image = document.createElement("img");
      image.src = typeof item === "string" ? item : item.src;
      image.alt = typeof item === "string" ? student.name : (item.alt || student.name);
      image.loading = "lazy";
      galleryGrid.append(image);
    });
  }
}
