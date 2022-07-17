// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//firebase-auth
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7o6m2TmRVSETkVAtKXe_pYVvfWJkq57U",
  authDomain: "dts-mini-project-80abf.firebaseapp.com",
  projectId: "dts-mini-project-80abf",
  storageBucket: "dts-mini-project-80abf.appspot.com",
  messagingSenderId: "791220804007",
  appId: "1:791220804007:web:b8ce607a7fd7d485e1be82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//register
const register = (email, password) => {
  const user = createUserWithEmailAndPassword(auth, email, password)
    .then((res) => res.user)
    .catch((error) => error);
  return user;
};

//login
const login = (email, password) => {
  const user = signInWithEmailAndPassword(auth, email, password)
    .then((res) => res.user)
    .catch((error) => error);
  return user;
};

//logout
const logout = async () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export { auth, register, login, logout };
