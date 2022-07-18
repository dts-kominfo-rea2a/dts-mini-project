// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
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
const auth = getAuth(app);

// fungsi - fungsi
const createAccount = (email, password) => {
  try{
    const getUser = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  console.log(
    "Account ",
    getUser.user
  )  
} catch (err) {
  console.log(err);
  console.log("Error code auth", err.code);
  console.log("Error msg auth", err.message);
}
};

const loginWithEmail = () => {};

const passReset = () => {};

const signOut = () => {};

export {
  auth,
  createAccount,
  loginWithEmail,
  passReset,
  signOut
}