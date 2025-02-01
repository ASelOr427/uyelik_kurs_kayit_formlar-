// js/courses.js

const coursesList = document.getElementById("courses-list");
const newCourseForm = document.getElementById("new-course-form");
const courseMessage = document.getElementById("course-message");

// Kurs duyurularını gerçek zamanlı dinlemek için
db.collection("courses").orderBy("timestamp", "desc")
  .onSnapshot((snapshot) => {
    coursesList.innerHTML = "";
    snapshot.forEach((doc) => {
      const course = doc.data();
      const div = document.createElement("div");
      div.innerHTML = `<h3>${course.name}</h3><p>${course.description}</p>`;
      coursesList.appendChild(div);
    });
  });

// Yeni kurs duyurusu ekleme işlemi
if (newCourseForm) {
  newCourseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const courseName = document.getElementById("course-name").value;
    const courseDescription = document.getElementById("course-description").value;
    
    db.collection("courses").add({
      name: courseName,
      description: courseDescription,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      courseMessage.innerText = "Kurs duyurusu başarıyla eklendi!";
      newCourseForm.reset();
    })
    .catch((error) => {
      courseMessage.innerText = "Hata: " + error.message;
    });
  });
}
