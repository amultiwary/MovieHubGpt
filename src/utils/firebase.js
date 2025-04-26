// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkEO4w1OAgOngA8-SwgyPitDvUFwq7WGQ",
  authDomain: "moviehubgpt.firebaseapp.com",
  projectId: "moviehubgpt",
  storageBucket: "moviehubgpt.firebasestorage.app",
  messagingSenderId: "735328099219",
  appId: "1:735328099219:web:938964c910cdae67e5e666",
  measurementId: "G-T8YGGQ0SPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
