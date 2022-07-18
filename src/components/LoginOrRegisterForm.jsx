import React from 'react';
import { Grid,Box, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./LoginOrRegisterForm.module.css";



const LoginOrRegisterForm = ({ loginOrRegister }) => {
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
            <Typography><h1 style={{color: '#1976D2'}}>Garlic's Movie List </h1></Typography>
            <img src={process.env.PUBLIC_URL + '/images/login.png'} width="130" height="130"alt="signinLogo" />
            <Typography><h2>Login/Register</h2></Typography> 
            
                <TextField className={styles.textFieldContainer}
                  label="Email Adress *"
                  type="email"
                  variant="outlined"
                  size="normal"
                 />
                <TextField className={styles.textFieldContainer}
                  label="Password *"
                  type="password"
                  variant="outlined"
                  size="normal"
                 />
                <Button 
                  variant="contained"
                  size="normal"
                  style={{marginTop: '3em'}}
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
                    }}>Copyright: &copy; Nagari&Mukhlis 2022</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default LoginOrRegisterForm;