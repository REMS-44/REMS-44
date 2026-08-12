import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { REMS_FIREBASE_CONFIG } from "./firebase-config.js";

const appFirebase = getApps().length ? getApps()[0] : initializeApp(REMS_FIREBASE_CONFIG);
const db = getFirestore(appFirebase);
const root = document.getElementById("app");
const key = new URLSearchParams(location.search).get("key") || "";

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
}[c]));

const localISODate = (date = new Date()) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const parseDate = d => new Date(`${d}T12:00:00`);
const isoToday = () => localISODate();

const fullDate = d => parseDate(d).toLocaleDateString("uk-UA", {
  weekday:"long", day:"numeric", month:"long"
});

const shortDate = d => parseDate(d).toLocaleDateString("uk-UA", {
  day:"2-digit", month:"2-digit", year:"numeric"
});

const dayNumber = d => parseDate(d).toLocaleDateString("uk-UA", { day:"2-digit" });
const monthShort = d => parseDate(d).toLocaleDateString("uk-UA", { month:"short" }).replace(".", "");
const weekdayShort = d => parseDate(d).toLocaleDateString("uk-UA", { weekday:"short" }).replace(".", "");

const timeText = x => {
  const a = String(x.startTime || "").trim();
  const b = String(x.endTime || "").trim();
  if (a && b) return `${a}–${b}`;
  return a || b || "";
};

const diffDays = d => {
  const today = parseDate(isoToday());
  return Math.round((parseDate(d) - today) / 86400000);
};

const relativeDay = d => {
  const diff = diffDays(d);
  if (diff === 0) return "Сьогодні";
  if (diff === 1) return "Завтра";
  return fullDate(d);
};

const isThisWeek = d => {
  const diff = diffDays(d);
  return diff >= 0 && diff <= 7;
};

const updatedText = value => {
  if (!value) return "Оновлено щойно";
  const dt = new Date(value);
  if (Number.isNaN(dt.getTime())) return "Оновлено щойно";

  const today = new Date();
  const sameDay =
    dt.getFullYear() === today.getFullYear() &&
    dt.getMonth() === today.getMonth() &&
    dt.getDate() === today.getDate();

  const time = dt.toLocaleTimeString("uk-UA", { hour:"2-digit", minute:"2-digit" });
  if (sameDay) return `Оновлено сьогодні о ${time}`;

  return `Оновлено ${dt.toLocaleDateString("uk-UA", { day:"numeric", month:"long" })} о ${time}`;
};

function eventDetails(x) {
  return [
    timeText(x) ? `<span class="detail"><b>Час</b>${esc(timeText(x))}</span>` : "",
    x.location ? `<span class="detail"><b>Місце</b>${esc(x.location)}</span>` : ""
  ].filter(Boolean).join("");
}

function featuredCard(x) {
  return `<article class="featured-card" style="--project:${esc(x.projectColor || "#d9ff38")}">
    <div class="featured-accent"></div>
    <div class="featured-date">
      <span class="featured-kicker">${esc(relativeDay(x.date))}</span>
      <strong>${esc(dayNumber(x.date))}</strong>
      <span>${esc(monthShort(x.date))}</span>
    </div>
    <div class="featured-content">
      <div class="project-name"><i></i>${esc(x.projectName || "Активність")}</div>
      <h2>${esc(x.type || "Подія")}</h2>
      <div class="details">${eventDetails(x)}</div>
      ${x.note ? `<p class="event-note">${esc(x.note)}</p>` : ""}
    </div>
  </article>`;
}

function eventCard(x) {
  return `<article class="event-card" style="--project:${esc(x.projectColor || "#d9ff38")}">
    <div class="date-box">
      <strong>${esc(dayNumber(x.date))}</strong>
      <span>${esc(monthShort(x.date))}</span>
      <small>${esc(weekdayShort(x.date))}</small>
    </div>
    <div class="event-main">
      <div class="project-name"><i></i>${esc(x.projectName || "Активність")}</div>
      <h3>${esc(x.type || "Подія")}</h3>
      <div class="details">${eventDetails(x)}</div>
      ${x.note ? `<p class="event-note">${esc(x.note)}</p>` : ""}
    </div>
  </article>`;
}

function groupBlock(title, items) {
  if (!items.length) return "";
  return `<section class="event-group">
    <div class="group-head">
      <h2>${esc(title)}</h2>
      <span>${items.length}</span>
    </div>
    <div class="events">${items.map(eventCard).join("")}</div>
  </section>`;
}

function render(data) {
  document.title = `${data.name || "Мій розклад"} — REMS-44`;

  const items = (Array.isArray(data.items) ? data.items : [])
    .filter(x => x && x.date)
    .slice()
    .sort((a,b) => {
      const da = `${a.date || ""} ${a.startTime || ""}`;
      const db = `${b.date || ""} ${b.startTime || ""}`;
      return da.localeCompare(db);
    });

  const today = isoToday();
  const upcoming = items.filter(x => x.date >= today);
  const past = items.filter(x => x.date < today).reverse();

  const first = upcoming[0] || null;
  const rest = first ? upcoming.slice(1) : [];

  const todayItems = rest.filter(x => diffDays(x.date) === 0);
  const weekItems = rest.filter(x => diffDays(x.date) > 0 && isThisWeek(x.date));
  const laterItems = rest.filter(x => diffDays(x.date) > 7);

  root.innerHTML = `
    <section class="hero">
      <div class="eyebrow">Персональний розклад · ${esc(data.group || "REMS-44")}</div>
      <h1>${esc(data.name || "Студент")}</h1>
      <div class="updated">${esc(updatedText(data.updatedAt))}</div>
    </section>

    ${first ? `
      <section class="next-section">
        <div class="section-label">Найближча подія</div>
        ${featuredCard(first)}
      </section>
    ` : `
      <section class="empty-state">
        <span>Найближчих активностей поки немає.</span>
      </section>
    `}

    <section class="schedule-wrap">
      <div class="schedule-title">
        <h2>Розклад</h2>
        <span>${upcoming.length} ${upcoming.length === 1 ? "подія" : "подій"}</span>
      </div>

      ${groupBlock("Сьогодні", todayItems)}
      ${groupBlock("Цього тижня", weekItems)}
      ${groupBlock("Далі", laterItems)}
    </section>

    ${past.length ? `
      <details class="past">
        <summary>Минулі події <span>${past.length}</span></summary>
        <div class="events past-events">${past.map(eventCard).join("")}</div>
      </details>
    ` : ""}

    <footer>
      <span>REMS-44</span>
      <span>Кафедра режисури естради і шоу</span>
    </footer>
  `;
}

if (!key) {
  root.innerHTML = '<div class="error"><b>Особисте посилання відсутнє.</b><p>Відкрий посилання, яке надіслав викладач.</p></div>';
} else {
  onSnapshot(doc(db, "rems_student_schedules", key), snap => {
    if (!snap.exists()) {
      root.innerHTML = '<div class="error"><b>Розклад не знайдено.</b><p>Можливо, посилання ще не активоване або було змінене.</p></div>';
      return;
    }
    render(snap.data() || {});
  }, err => {
    console.error(err);
    root.innerHTML = '<div class="error"><b>Не вдалося завантажити розклад.</b><p>Перевір інтернет-з’єднання та спробуй ще раз.</p></div>';
  });
}
