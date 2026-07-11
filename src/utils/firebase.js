// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDni6dY5AjwLNGQrXx8-xGlgxIPmhJHQ1s",
  authDomain: "netflixgpt-d24f4.firebaseapp.com",
  projectId: "netflixgpt-d24f4",
  storageBucket: "netflixgpt-d24f4.firebasestorage.app",
  messagingSenderId: "966614484335",
  appId: "1:966614484335:web:b680a3d6685a584152d49a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
