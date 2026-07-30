const profileContainer = document.getElementById("studentProfile");

const params = new URLSearchParams(window.location.search);
const studentId = params.get("id");

const student = students.find((item) => item.id === studentId);

if (!student) {
  profileContainer.innerHTML = `
    <section class="not-found">
      <p class="eyebrow dark">Помилка</p>

      <h1>Профіль не знайдено</h1>

      <a class="text-link" href="index.html">
        Повернутися на головну
      </a>
    </section>
  `;
} else {
  document.title = `${student.name} — РЕМС-44`;

  const bio = student.bio
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  const socialLinks = Object.entries(student.socials)
    .filter(([, url]) => url && url.trim() !== "")
    .map(([network, url]) => {
      const labels = {
        instagram: "Instagram",
        facebook: "Facebook",
        tiktok: "TikTok",
        youtube: "YouTube",
        telegram: "Telegram"
      };

      return `
        <a
          class="social-button"
          href="${url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${labels[network] || network} ↗
        </a>
      `;
    })
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
          <h2>Про студентку</h2>

          <div class="profile-bio">
            ${bio}
          </div>
        </section>

        ${
          socialLinks
            ? `
              <section class="profile-section">
                <h2>Контакти</h2>

                <div class="social-list">
                  ${socialLinks}
                </div>
              </section>
            `
            : ""
        }

      </div>

    </article>
  `;
}
