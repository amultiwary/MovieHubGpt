// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDA9HQv7oILdk52ZSvjsRanIU_XnUx8L4",
  authDomain: "netflixgpt-91a8c.firebaseapp.com",
  projectId: "netflixgpt-91a8c",
  storageBucket: "netflixgpt-91a8c.firebasestorage.app",
  messagingSenderId: "1082457582750",
  appId: "1:1082457582750:web:3ead325b05ba6103445f8f",
  measurementId: "G-L0V7FQ6D4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();