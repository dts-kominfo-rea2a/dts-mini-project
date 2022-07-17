// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5JpDr-CuIWj4fYpzAPAtELy7_i8LWz44",
  authDomain: "pair-40-dts-mini-project.firebaseapp.com",
  projectId: "pair-40-dts-mini-project",
  storageBucket: "pair-40-dts-mini-project.appspot.com",
  messagingSenderId: "961253167368",
  appId: "1:961253167368:web:d8e4a5bb4ff26f0a851cbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuthentication = app.auth();