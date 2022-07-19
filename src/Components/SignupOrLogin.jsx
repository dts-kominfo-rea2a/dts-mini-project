import React, { useEffect, useState } from "react";
import styles from "./Components.module.css";
import { Grid, Box, Button, TextField, Typography, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  auth,
  LogIn,
  SignUp,
  LoginGoogle
} from "../authentication/Firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const SignupOrLogin = ({ result }) => {
  const navigate = useNavigate();
  const [user, isLoading, error] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const EmailOnChanger = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const PassOnChanger = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const LoginHandler = () => {
    LogIn(credential.email, credential.password);
  };

  const SignUpHandler = () => {
    SignUp(credential.email, credential.password);
  };

  const ButtonOnClickHandler = () => {
    if (result === "login") {
      LoginHandler();
    } else {
      SignUpHandler();
    }
  };

  const ButtonGoogle = async () => {
    await LoginGoogle();
  };

  useEffect(
    () => {

      if (isLoading) {

        return;
      }

      if (user) {
        navigate("/");
      } 
      // if (error) {return (<Alert severity="error">This is an error alert — check it out!</Alert>);}
    },

    [user, isLoading, error, navigate]
  );

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: "95vh" }}>
      <Box className={styles.formLogin} component="form" noValidate sx={{width:'20%', display:'flex', borderRadius: 2, height:'20em',}}>
        <Typography variant="h5" fontFamily={'"Segoe UI"'} style={{textAlign:'center'}}>MOVIEAPP</Typography>

        <TextField label="Type Your Email" type="email" variant="outlined" size="small" value={credential.email} onChange={EmailOnChanger} style={{marginTop:'2em'}}/>
        <TextField label="password" type="Password" variant="outlined" size="small" value={credential.password} onChange={PassOnChanger} />

        <Button variant="contained" size="small" color="success" onClick={ButtonOnClickHandler} >
          {result === "login" ? "Login" : "Create Accounnt"}
        </Button>

        { <Button variant="contained" size="small" color="success" onClick={ButtonGoogle} >
          Login Dengan Google
        </Button> }

        {/* <GoogleButton  label='Log in With Google' onClick={ButtonGoogle} /> */}

        {result === "login" ? (
          <>
          <Typography variant="body1" style={{textAlign:'center', marginTop:'1em'}} ><Link to="/signup">Click here</Link> to Sign Up</Typography>
          </>
          
        ) : (
          
          <>
          <Typography variant="body1" style={{textAlign:'center', marginTop:'1em'}}>Already have an account?<Link to="/login"> Click here</Link></Typography>
          </>
        )}
        <Typography variant="body1" style={{textAlign:'center', marginTop:'1em'}}><Link to="/"> Back To Home</Link></Typography>
      </Box>
    </Grid>
  );
};

export default SignupOrLogin;
