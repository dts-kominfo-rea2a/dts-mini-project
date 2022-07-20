// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO3deqCvXmH5uNmkgLURC7tkLCRh_y_uE",
  authDomain: "miniproject-dts.firebaseapp.com",
  projectId: "miniproject-dts",
  storageBucket: "miniproject-dts.appspot.com",
  messagingSenderId: "949635434103",
  appId: "1:949635434103:web:f74939105dedc38fcde872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signInApp = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        return userCredential;
      } catch (err) {
        return err; 
      }
}

const createUserApp = async (email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log("User yang berhasil dibuat adalah", response.user);
    } catch (err) {
        console.log(err);
        console.log("error code auth", err.code);
        console.log("error message auth", err.message);
    }
}

const signOutApp = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        console.log(err);
    }
}


export {
    auth,
    signInApp,
    signOutApp,
    createUserApp
};
