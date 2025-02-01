// js/leader.js

const leaderLoginForm = document.getElementById("leader-login-form");
const leaderLoginMessage = document.getElementById("leader-login-message");

if (leaderLoginForm) {
  leaderLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("leader-email").value;
    const password = document.getElementById("leader-password").value;

    auth.signInWithEmailAndPassword(email, password)
      .then((cred) => {
        // Giriş yapan kullanıcının rolünü kontrol edelim.
        return db.collection("users").doc(cred.user.uid).get();
      })
      .then((doc) => {
        if (doc.exists && doc.data().role === "leader") {
          // Lider girişi başarılı, lider dashboard sayfasına yönlendir.
          window.location.href = "leader-dashboard.html";
        } else {
          leaderLoginMessage.innerText = "Yetkiniz yok veya lider bilgileri eşleşmiyor.";
          auth.signOut();
        }
      })
      .catch((error) => {
        leaderLoginMessage.innerText = "Hata: " + error.message;
      });
  });
}
