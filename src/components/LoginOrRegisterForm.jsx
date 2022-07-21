import React, { useState, useEffect } from 'react';
import { Grid,Box, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./LoginOrRegisterForm.module.css";

import {auth, loginWithEmailAndPassword, registerWithEmailAndPassword} from "../authentication/firebase"

import {useAuthState} from  "react-firebase-hooks/auth";

import {useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginOrRegisterForm = ({ loginOrRegister }) => {

  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email : "",
    password : "",
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

  const buttonLoginOrRegisterOnClickHandler =()=>{
    if(loginOrRegister === "login"){
      loginHandler();
    }else if(loginOrRegister === "register"){
      registerHandler();
    }
  }

  const loginHandler = ()=>{
    loginWithEmailAndPassword(credential.email, credential.password);

  }

  const registerHandler = ()=>{
    registerWithEmailAndPassword(credential.email, credential.password);
  }

  useEffect(()=>{
    if(loading) {
      return ;
    }if(user){
      navigate('/');
    }
  }, [loading, user, navigate]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "95vh" }}
    >
      <Box className={styles.bodyContainer}>
        <Box className={styles.imageContainer}>
        </Box>
        <Box className={styles.loginContainer}>
          <Box className={styles.formContainer}>
            <Typography variant="h3" sx={{color: '#1976D2'}}>Garlic's Movie List </Typography>
            <img src={process.env.PUBLIC_URL + '/images/login.png'} width="130" height="130"alt="signinLogo" />
            <Typography variant="h5">Login/Register</Typography> 
            
                <TextField className={styles.textFieldContainer}
                  label="Email Adress *"
                  type="email"
                  variant="outlined"
                  size="normal"
                  value={credential.email}
                  onChange={textFieldEmailOnChangeHandler}
                 />
                <TextField className={styles.textFieldContainer}
                  label="Password *"
                  type="password"
                  variant="outlined"
                  size="normal"
                  value={credential.password}
                  onChange={textFieldPasswordOnChangeHandler}
                 />
                <Button 
                  variant="contained"
                  size="normal"
                  style={{marginTop: '3em'}}
                  onClick={buttonLoginOrRegisterOnClickHandler}
                  >{loginOrRegister === "login" ? "Login" : "Register Account"}</Button>

                  {loginOrRegister === "login" ? (
                      <Link to="/register">
                        <Typography variant="body1">or do you want Register ?</Typography>
                      </Link>
                    ) : (
                      <Link to="/login">
                        <Typography variant="body1">or do you want Login ?</Typography>
                      </Link>
                    )}

                <Typography 
                  style={{fontSize: '14px', 
                    fontWeight: 'lighter',
                    marginTop: '10px',
                    color: '#6D6D6D'
                    }}>Copyright: &copy; M & N WebApp 2022</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default LoginOrRegisterForm;