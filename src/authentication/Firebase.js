import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyCoHtbRZfGBAjIPQDN1dX-jD6Y_W9t9kUA",

  authDomain: "dts2022-makfi.firebaseapp.com",

  projectId: "dts2022-makfi",

  storageBucket: "dts2022-makfi.appspot.com",

  messagingSenderId: "751989412481",

  appId: "1:751989412481:web:b60e1c7d5b567143fcb380"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

  const LoginGoogle = async () => {
    try {
      const response = await signInWithPopup(
        auth,
        provider
      );
  
    } catch (err) {
      console.log(err);
    }
  };

const SignUp = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  } catch (err) {
    console.log(err);
  }
};


const LogIn = async (email, password, error) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  } catch (err) {
    console.log(err); 
  }
};

const LogOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};


export {
  auth, 
  SignUp,
  LogIn,
  LogOut,
  LoginGoogle,
};
