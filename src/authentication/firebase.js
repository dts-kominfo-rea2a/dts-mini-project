// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbGpbuczDX_4X4IEulaEpmldHpQKjwUwY",
  authDomain: "pair-08-dts-mini-project.firebaseapp.com",
  projectId: "pair-08-dts-mini-project",
  storageBucket: "pair-08-dts-mini-project.appspot.com",
  messagingSenderId: "425556890105",
  appId: "1:425556890105:web:a14df42bc21872fb9ced28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

const registerWithEmailAndPassword = async (email, password)=>{
    try{
        const getUser = await createUserWithEmailAndPassword(auth, email, password);
        console.log(getUser.user);
    }catch(err){
        console.log(err.code);
        console.log(err.message);
    }
};

const loginWithEmailAndPassword = async (email, password)=>{
    try{
        const userLogin = await signInWithEmailAndPassword(auth, email, password);
        console.log(userLogin.user);
    }catch (err){
        console.log(err.code);
        console.log(err.message);
    }
};

const logout = async ()=>{
    try{
        await signOut(auth);
    }catch(err){
        console.log(err.code);
        console.log(err.message);
    }
}

export {
    auth,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    logout,
} 

