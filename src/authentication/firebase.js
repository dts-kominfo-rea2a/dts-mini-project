import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU7Wy5iaThiuI9zH5oOXGnKHAQo8ZP5Fs",
  authDomain: "jeihanpraja.firebaseapp.com",
  projectId: "jeihanpraja",
  storageBucket: "jeihanpraja.appspot.com",
  messagingSenderId: "370433155780",
  appId: "1:370433155780:web:8275122f78924deb7e9f91",
};

//initialize firebase to use authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//create register function
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    console.log("user saat ini :", response.user);
  } catch (err) {
    console.log(err);

    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

//create login function
const loginWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("username logged in: ", userCredential.user);
  } catch (err) {
    console.log(err);

    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

//create reset password function
const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Reset password has been sent");
  } catch (err) {
    console.log(err);
  }
};

//create log out function
const getOutFromApp = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  resetPassword,
  getOutFromApp,
};
