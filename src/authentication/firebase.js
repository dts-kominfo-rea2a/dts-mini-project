import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/**
 * function register use email and password
 * @param {*} email
 * @param {*} password
 */
const registerWithEmailAndPassword = async (email, password) => {
  // See: https://firebase.google.com/docs/auth/web/password-auth
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return response.user;
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  // See : https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password

  try {
    const userCredential = await signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
  }
};

const resetPassword = async (email) => {
  // See: https://firebase.google.com/docs/reference/js/auth.md#sendpasswordresetemail
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("check email to reset password");
  } catch (error) {
    console.log(error);
  }
};

const signOutFromApplication = async () => {
  // See : https://firebase.google.com/docs/auth/web/password-auth#next_steps
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
  signOutFromApplication,
};
