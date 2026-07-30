const studentGrid = document.getElementById("studentGrid");
const studentCount = document.getElementById("studentCount");

function studentWord(count) {
  const lastTwoDigits = count % 100;
  const lastDigit = count % 10;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return "студентів";
  }

  if (lastDigit === 1) {
    return "студент";
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return "студенти";
  }

  return "студентів";
}

students.forEach((student) => {
  const card = document.createElement("a");

  card.className = "student-card";
  card.href = `student.html?id=${encodeURIComponent(student.id)}`;

  card.innerHTML = `
    <div class="student-photo-wrapper">
      <img
        class="student-image"
        src="${student.photo}"
        alt="${student.name}"
        loading="lazy"
      >
    </div>

    <div class="student-card-info">
      <h3>${student.name}</h3>
      <p>${student.role}</p>
    </div>
  `;

  studentGrid.appendChild(card);
});

studentCount.textContent =
  `${students.length} ${studentWord(students.length)}`;
