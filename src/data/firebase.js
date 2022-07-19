// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  // sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  // getDocs,
  collection,
  // query,
  // where,
  addDoc,
} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxh7kvVqhlhDc9PAefx6Nf2bfSgxFtzCY",
  authDomain: "pair-47-dts-mini-project.firebaseapp.com",
  projectId: "pair-47-dts-mini-project",
  storageBucket: "pair-47-dts-mini-project.appspot.com",
  messagingSenderId: "852268618608",
  appId: "1:852268618608:web:8e41202a7316cd201c75b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const login = (email, password) => {
  console.log(email, password);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    }) 
    .catch((error) => {
      console.error(error);
    });
}

const registerWithEmailAndPassword = async (name, email, password) => {
  
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  // signInWithGoogle,
  login,
  registerWithEmailAndPassword,
  // sendPasswordReset,
  logout,
};
