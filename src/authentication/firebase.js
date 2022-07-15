import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAjPZCsIImjVM3IfBdvVH3tvUNHCzK-i8",
  authDomain: "mini-project-dts-2022.firebaseapp.com",
  projectId: "mini-project-dts-2022",
  storageBucket: "mini-project-dts-2022.appspot.com",
  messagingSenderId: "400292665921",
  appId: "1:400292665921:web:fb5d39d56ba06b4f0844c0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User yang teregistrasi dan berhasil login adalah", response.user);
  } catch (error) {
    console.log(error);
    console.log("error code auth", error.code);
    console.log("error message auth", error.message);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User yang berhasil login adalah", userCredential.user);
  } catch (error) {
    console.log(error);
    console.log("error code auth", error.code);
    console.log("error message auth", error.message);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export { auth, registerWithEmailAndPassword, loginWithEmailAndPassword, logout };
