// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzCet0JGW0vPUSxvsk6JzjJA4B9_jrwHA",
  authDomain: "dts-miniproject-pair20.firebaseapp.com",
  projectId: "dts-miniproject-pair20",
  storageBucket: "dts-miniproject-pair20.appspot.com",
  messagingSenderId: "234051586286",
  appId: "1:234051586286:web:df3dc4bab22024e2e8cbff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fucntion
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(UserCredential.user);
  } catch (error) {
    console.log(error.message);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const activeUser = await signInWithEmailAndPassword(auth, email, password);
    console.log(activeUser.user);
  } catch (error) {
    console.log(error.message);
  }
};

const resetPassword = async (email) => {
  try {
    sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log(error.message);
  }
};

const logOut = async () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};

export {
  auth,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  resetPassword,
  logOut,
};
