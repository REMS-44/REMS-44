# REMS-44 Portfolio v2

## Що змінило

- Головна сторінка лишається каталогом студентів.
- Кожен студент має окрему сторінку.
- У профіль можна додати:
  - великий текст;
  - факти;
  - Instagram, Facebook, TikTok, YouTube, Telegram;
  - проєкти;
  - вбудовані YouTube-відео;
  - фотогалерею.

## Як встановити на GitHub

1. Розпакуйте архів.
2. Відкрийте репозиторій REMS-44.
3. Натисніть **Add file → Upload files**.
4. Завантажте:
   - index.html
   - student.html
   - styles.css
   - students.js
   - index.js
   - student.js
   - папку images
5. Підтвердьте заміну наявних файлів.
6. Натисніть **Commit changes**.

## Як додати соцмережі

У `students.js` знайдіть потрібного студента:

```js
socials: {
  instagram: "https://instagram.com/username",
  facebook: "",
  tiktok: "",
  youtube: "",
  telegram: ""
}
```

Порожні кнопки на сторінці не показуються.

## Як додати YouTube

```js
videos: [
  {
    title: "Назва відео",
    youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  }
]
```

Можна вставити звичайне посилання YouTube, коротке посилання `youtu.be`
або лише ID відео.

## Як додати довший текст

```js
bio: [
  "Перший абзац.",
  "Другий абзац.",
  "Третій абзац."
]
```

Кожен елемент масиву стане окремим абзацом.

## Як додати проєкт

```js
projects: [
  {
    title: "Назва проєкту",
    year: "2026",
    role: "Режисер",
    description: "Короткий опис проєкту."
  }
]
```

## Як додати галерею

Спочатку завантажте фото у папку `images`, потім:

```js
gallery: [
  "images/photo-1.jpg",
  "images/photo-2.jpg",
  "images/photo-3.jpg"
]
```
