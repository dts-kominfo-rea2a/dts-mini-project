import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../apis/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginForm from "../components/user/LoginForm";
import SignUpForm from "../components/user/SignUpForm";

const LoginOrRegister = ({ loginOrRegister }) => {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const [user, isLoading] = useAuthState(auth);

  const onEmailChangeHandler = (email) => {
    setCredential({
      ...credential,
      email: email,
    });
  };

  const onPasswordChangeHandler = (password) => {
    setCredential({
      ...credential,
      password: password,
    });
  };

  const loginHandler = () => {
    loginWithEmailAndPassword(credential.email, credential.password);
  };

  const registHandler = () => {
    registerWithEmailAndPassword(credential.email, credential.password);
  };

  const onSubmithandler = (event) => {
    event.preventDefault();
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registHandler();
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  if (loginOrRegister === "login") {
    return (
      <LoginForm
        email={credential.email}
        emailHandler={onEmailChangeHandler}
        password={credential.password}
        passwordHandler={onPasswordChangeHandler}
        onSubmithandler={onSubmithandler}
      />
    );
  } else if (loginOrRegister === "register") {
    return (
      <SignUpForm
        email={credential.email}
        emailHandler={onEmailChangeHandler}
        password={credential.password}
        passwordHandler={onPasswordChangeHandler}
        onSubmithandler={onSubmithandler}
      />
    );
  }
};

export default LoginOrRegister;
