import { maxWidth, width } from '@mui/system';
import React from 'react';
import { Grid,Box, TextField, Button, Typography } from "@mui/material";
import styles from "./LoginOrRegisterForm.module.css";



const LoginOrRegisterForm = () => {
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
                <Button className={styles.signin_register}
                  variant="contained"
                  size="normal"
                >SignIn/Register</Button>

                <Typography style={{fontSize: '14px', 
                  fontWeight: 'lighter',
                    marginTop: '50px',
                    color: '#6D6D6D'
                    }}>Copyright: &copy; Nagari&Mukhlis 2022</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default LoginOrRegisterForm;