// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCStSExWi41CtR0A7zBqAqJjGFktX75kJM",
  authDomain: "carrer-storage.firebaseapp.com",
  projectId: "carrer-storage",
  storageBucket: "carrer-storage.firebasestorage.app",
  messagingSenderId: "934949486061",
  appId: "1:934949486061:web:b284a0b4dececb8b6bbbe4",
  measurementId: "G-2NJR554J3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = (() => { try { return getAnalytics(app); } catch { return null; } })();
export const auth = getAuth(app);