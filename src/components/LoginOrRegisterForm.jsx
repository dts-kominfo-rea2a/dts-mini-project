import React, { useEffect, useState } from "react";
import styles from "./LoginOrRegisterForm.module.css";

import { Grid, Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { auth, loginWithEmailAndPassword, registerWithEmailAndPassword } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    loginWithEmailAndPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    registerWithEmailAndPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
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

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: "95vh" }}>
      <Box className={styles.boxy} component="form" noValidate>
        <Typography variant="body1">{loginOrRegister === "login" ? "Login Page" : "Register Page"}</Typography>
        <TextField label="Email" type="email" variant="outlined" size="small" value={credential.email} onChange={textFieldEmailOnChangeHandler} />
        <TextField label="password" type="Password" variant="outlined" size="small" value={credential.password} onChange={textFieldPasswordOnChangeHandler} />
        <Button variant="outlined" size="small" onClick={buttonLoginOrRegisterOnClickHandler}>
          {loginOrRegister === "login" ? "Login" : "Register Account"}
        </Button>
        {loginOrRegister === "login" ? (
          <Link to="/register">
            <Typography variant="body1">or do you want Register ?</Typography>
          </Link>
        ) : (
          <Link to="/login">
            <Typography variant="body1">or do you want Login ?</Typography>
          </Link>
        )}
      </Box>
    </Grid>
  );
};

export default LoginOrRegisterForm;
