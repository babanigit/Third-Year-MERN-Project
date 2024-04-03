// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "third-year-7a355.firebaseapp.com",
  projectId: "third-year-7a355",
  storageBucket: "third-year-7a355.appspot.com",
  messagingSenderId: "265819127278",
  appId: "1:265819127278:web:53e7b721173a88374b62ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);