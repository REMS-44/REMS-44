const studentGrid = document.getElementById("studentGrid");
const studentCount = document.getElementById("studentCount");

function studentWord(count) {
  const n = count % 100;
  const last = count % 10;
  if (n >= 11 && n <= 14) return "студентів";
  if (last === 1) return "студент";
  if (last >= 2 && last <= 4) return "студенти";
  return "студентів";
}

students.forEach((student) => {
  const card = document.createElement("a");
  card.className = "student-card";
  card.href = `student.html?id=${encodeURIComponent(student.id)}`;

  const image = document.createElement("img");
  image.className = "student-image";
  image.src = student.photo;
  image.alt = student.name;
  image.loading = "lazy";

  const name = document.createElement("h3");
  name.textContent = student.name;

  const role = document.createElement("p");
  role.textContent = student.role;

  card.append(image, name, role);
  studentGrid.append(card);
});

studentCount.textContent = `${students.length} ${studentWord(students.length)}`;
