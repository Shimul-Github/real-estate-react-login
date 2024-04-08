// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('inside from firbase config', import.meta.env.VITE_PLUS)

const firebaseConfig = {
  apiKey: "AIzaSyDCd0D3tw8dmFLoVwgLdZ85Qo5s20oNzq4",
  authDomain: "project-real-estate-commercial.firebaseapp.com",
  projectId: "project-real-estate-commercial",
  storageBucket: "project-real-estate-commercial.appspot.com",
  messagingSenderId: "1034079672134",
  appId: "1:1034079672134:web:2c034bf22f2cf68faaf747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);