import { getPublicStudents } from "./public-data.js";
const profileContainer=document.getElementById("studentProfile");
const params=new URLSearchParams(window.location.search);
const studentId=params.get("id");
const students=await getPublicStudents(window.REMS44_STUDENTS||[]);
const student=students.find(item=>item.id===studentId);

function getYoutubeId(url) {
  if (!url) return "";

  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/,
    /youtube\.com\/embed\/([^?&]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return "";
}

function createSocialLinks(socials) {
  const labels = {
    instagram: "Instagram",
    tiktok: "TikTok",
    youtube: "YouTube",
    telegram: "Telegram",
    facebook: "Facebook",
    email: "Email"
  };

  return Object.entries(socials)
    .filter(([, value]) => value && value.trim() !== "")
    .map(([network, value]) => {
      const href =
        network === "email" && !value.startsWith("mailto:")
          ? `mailto:${value}`
          : value;

      return `
        <a
          class="social-button"
          href="${href}"
          ${network === "email" ? "" : 'target="_blank" rel="noopener noreferrer"'}
        >
          ${labels[network] || network} ↗
        </a>
      `;
    })
    .join("");
}

if (!student) {
  profileContainer.innerHTML = `
    <section class="not-found">
      <p class="eyebrow dark">Помилка</p>
      <h1>Профіль не знайдено</h1>
      <a class="text-link" href="index.html">Повернутися на головну</a>
    </section>
  `;
} else {
  document.title = `${student.name} — РЕМС-44`;

  const bioHtml = student.bio
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  const skillsHtml = student.skills
    .map((skill) => `<span class="skill-item">${skill}</span>`)
    .join("");

  const achievementsHtml = student.achievements
    .map((achievement) => `<li>${achievement}</li>`)
    .join("");

  const socialLinksHtml = createSocialLinks(student.socials);

  const videosHtml = student.videos
    .filter((video) => video.youtube && video.youtube.trim() !== "")
    .map((video) => {
      const youtubeId = getYoutubeId(video.youtube);

      if (!youtubeId) return "";

      return `
        <article class="video-card">
          <div class="video-frame">
            <iframe
              src="https://www.youtube.com/embed/${youtubeId}"
              title="${video.title}"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <h3>${video.title}</h3>
        </article>
      `;
    })
    .join("");

  const galleryHtml = student.gallery
    .filter((image) => image && image.trim() !== "")
    .map((image) => `
      <img
        class="gallery-image"
        src="${image}"
        alt="${student.name}"
        loading="lazy"
      >
    `)
    .join("");

  profileContainer.innerHTML = `
    <article class="student-profile">

      <div class="profile-image-column">
        <img
          class="large-profile-image"
          src="${student.photo}"
          alt="${student.name}"
        >
      </div>

      <div class="profile-text-column">

        <p class="profile-group">РЕМС-44 · КНУКіМ</p>

        <h1 class="profile-name">${student.name}</h1>

        <p class="profile-speciality">${student.role}</p>

        <div class="profile-divider"></div>

        <section class="profile-section">
          <h2>Про себе</h2>

          <div class="profile-bio">
            ${bioHtml}
          </div>
        </section>

        ${
          skillsHtml
            ? `
              <section class="profile-section">
                <h2>Навички та інтереси</h2>

                <div class="skills-list">
                  ${skillsHtml}
                </div>
              </section>
            `
            : ""
        }

        ${
          videosHtml
            ? `
              <section class="profile-section profile-section-wide">
                <h2>Відеороботи</h2>

                <div class="videos-grid">
                  ${videosHtml}
                </div>
              </section>
            `
            : ""
        }

        ${
          achievementsHtml
            ? `
              <section class="profile-section">
                <h2>Досягнення</h2>

                <ul class="achievements-list">
                  ${achievementsHtml}
                </ul>
              </section>
            `
            : ""
        }

        ${
          galleryHtml
            ? `
              <section class="profile-section profile-section-wide">
                <h2>Галерея</h2>

                <div class="gallery-grid">
                  ${galleryHtml}
                </div>
              </section>
            `
            : ""
        }

        ${
          socialLinksHtml
            ? `
              <section class="profile-section">
                <h2>Контакти та соціальні мережі</h2>

                <div class="social-list">
                  ${socialLinksHtml}
                </div>
              </section>
            `
            : ""
        }

      </div>

    </article>
  `;
}
