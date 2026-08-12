REMS-44 — PERSONAL STUDENT SCHEDULE PAGE

Додати у КОРІНЬ репозиторію REMS-44:
- my.html
- my.js
- my.css

firebase-config.js:
- якщо він у тебе вже є і працює — НЕ замінюй його.
- файл у пакеті дано лише на випадок, якщо його немає.

Сторінка відкривається так:
https://rems-44.github.io/REMS-44/my.html?key=УНІКАЛЬНИЙ_КЛЮЧ

Посилання генерує REMS Control v4.2.

Студент:
- бачить тільки свій розклад
- нічого не редагує
- бачить зміни автоматично навіть якщо сторінка вже відкрита

Потрібне правило Firestore:
match /rems_student_schedules/{scheduleId} {
  allow read: if true;
  allow write: if request.auth != null;
}
