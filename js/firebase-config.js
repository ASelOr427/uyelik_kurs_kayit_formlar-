  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { signOut, onAuthStateChanged, getAuth, createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';
  import { getFirestore, doc, setDoc, getDoc, collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js';
  import { getDatabase} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

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
  const auth = getAuth(app);
  const db = getFirestore(app);
  const database = getDatabase(app);

  export {
  getAuth,
  auth, 
  db, 
  database, 
  firebaseCreateUserWithEmailAndPassword as createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc, setDoc, getDoc, collection, query, where, getDocs,
  onAuthStateChanged,
  signOut  
};
