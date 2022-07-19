// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaYx1p-0gQAMXKKOWuUX52yfgNYUNmNpI",
  authDomain: "dts-mini-project-pair20.firebaseapp.com",
  projectId: "dts-mini-project-pair20",
  storageBucket: "dts-mini-project-pair20.appspot.com",
  messagingSenderId: "1033699750046",
  appId: "1:1033699750046:web:3e4835a8b88b859f284b8f",
  measurementId: "G-1QKFYD4TKX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
