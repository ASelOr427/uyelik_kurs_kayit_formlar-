
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDMM4uVGbCaKuL3r5U0298aoi-fgdf9KLM",
    authDomain: "genclik-merkezi-5ce79.firebaseapp.com",
    databaseURL: "https://genclik-merkezi-5ce79-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "genclik-merkezi-5ce79",
    storageBucket: "genclik-merkezi-5ce79.firebasestorage.app",
    messagingSenderId: "369077675713",
    appId: "1:369077675713:web:22f772cda71e5ac59c1640"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
// Firebase'i başlat
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
