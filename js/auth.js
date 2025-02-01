// js/auth.js

// Üyelik formunu yakala
const signupForm = document.getElementById("signup-form");
const signupMessage = document.getElementById("signup-message");

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Form verilerini al
    const fullname = document.getElementById("fullname").value;
    const tcNo = document.getElementById("tcNo").value;
    const birthDate = document.getElementById("birthDate").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Firebase Authentication ile kullanıcı oluştur
    auth.createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        // Kullanıcı oluşturulduktan sonra ek bilgileri Firestore’da sakla
        return db.collection("users").doc(cred.user.uid).set({
          fullname: fullname,
          tcNo: tcNo,
          birthDate: birthDate,
          address: address,
          email: email,
          role: "member"  // Üye rolü
        });
      })
      .then(() => {
        signupMessage.innerText = "Kayıt başarılı! Giriş yapabilirsiniz.";
        signupForm.reset();
      })
      .catch((error) => {
        signupMessage.innerText = "Hata: " + error.message;
      });
  });
}

// Üyeler için giriş işlemi de benzer şekilde login.html içinde yapılacaktır.
