import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../apis/firebase";

import SignUpForm from "./components/user/SignUpForm";
import LoginForm from "./components/user/LoginForm";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const inputEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const inputPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  if (loginOrRegister === "login") {
    return <LoginForm />;
  } else {
    return <SignUpForm />;
  }
};

export default LoginOrRegisterForm;
