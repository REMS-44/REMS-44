const grid = document.getElementById("student-grid");
const count = document.getElementById("student-count");
const dialog = document.getElementById("profile-dialog");
const profileContent = document.getElementById("profile-content");

count.textContent = `${students.length} профілі`;

students.forEach((student, index) => {
  const card = document.createElement("button");
  card.className = "student-card";
  card.setAttribute("aria-label", `Відкрити профіль: ${student.name}`);
  card.innerHTML = `
    <img class="student-image" src="${student.photo}" alt="${student.name}">
    <h3>${student.name}</h3>
    <p>${student.role}</p>
  `;
  card.addEventListener("click", () => openProfile(index));
  grid.appendChild(card);
});

function openProfile(index) {
  const student = students[index];
  const projects = student.projects.map(project => `<li>${project}</li>`).join("");

  profileContent.innerHTML = `
    <div class="profile-layout">
      <img class="profile-photo" src="${student.photo}" alt="${student.name}">
      <div class="profile-info">
        <p class="eyebrow">Профіль студента</p>
        <h2>${student.name}</h2>
        <p class="profile-role">${student.role}</p>
        <p class="profile-bio">${student.bio}</p>
        <h4>Проєкти</h4>
        <ul class="project-list">${projects}</ul>
        <a class="social-link" href="${student.instagram}" target="_blank" rel="noopener">
          Instagram ↗
        </a>
      </div>
    </div>
  `;
  dialog.showModal();
}

function closeProfile() {
  dialog.close();
}

dialog.addEventListener("click", event => {
  if (event.target === dialog) closeProfile();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && dialog.open) closeProfile();
});
