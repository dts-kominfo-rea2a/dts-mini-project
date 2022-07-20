import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import {
  auth,
  createUserApp,
  signInApp
} from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from 'react-router-dom';
import { Alert, Typography } from '@mui/material';

const FromLoginRegister = ({title}) => {

  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();


  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChangeEmail = (e) => {
    setCredential({
      ...credential,
      email: e.target.value
    });
    setErrorMessage({
      ...errorMessage,
      emailError: null
    })
  }
  const handleChangePassword = (e) => {
    setCredential({
      ...credential,
      password: e.target.value
    });
    setErrorMessage({
      ...errorMessage,
      passwordError: null
    })
  }

  const loginHandler = () => {
    signInApp(credential.email, credential.password).then((response) => setErrorMessage({ ...errorMessage, msg: response?.message}))
  }
  const registerHandler = () => {
    createUserApp(credential.email, credential.password)
  }

  const validation = () => {

    let emailError = ''
    let passwordError = ''

    if (!credential.email) emailError = 'Email is required'

    if (!credential.password) passwordError = 'Password is required'

    if (emailError || passwordError) {
      setErrorMessage({
        emailError,
        passwordError
      });

      return false;
    }

    return true;

  }

  const handleSubmit = () => {
    
    const isValid = validation();

    if (isValid) {
      if (title === 'Login') {
        loginHandler();
      } else {
        registerHandler();
      }
    }

  }

  useEffect(() => {
  
      if (isLoading) {
        return;
      }
      if (user) {
        navigate("/");
      }

    }, [user, isLoading, navigate]);


  return (
    <Box sx={{
        padding: '2em',
        maxWidth: '30em',
        marginLeft: 'auto',
        marginRight: '12em',
        marginY: '10em',
      }}
    >
      {
          errorMessage && errorMessage.msg && (
            <Alert variant="filled" severity="error" sx={{marginBottom:'2em'}}>
              {errorMessage?.msg}
            </Alert>
          )   
      }
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        
        <TextField sx={
          {
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray"
            },
            "& .MuiOutlinedInput-input": {
              color: "white"
            },
            "& .MuiInputLabel-outlined": {
              color: "gray"
            },
          }
        } id="outlined-basic" 
          label="EMAIL" 
          variant="outlined" 
          onChange={handleChangeEmail} 
          helperText={errorMessage?.emailError}
          error={errorMessage?.emailError}
        />
        <TextField sx={
          {
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray"
            },
            "& .MuiOutlinedInput-input": {
              color: "white"
            },
            "& .MuiInputLabel-outlined": {
              color: "gray"
            }
          }
        } id="outlined-basic" 
          label="PASSWORD" 
          variant="outlined" 
          type="password" 
          onChange={handleChangePassword}
          helperText={errorMessage?.passwordError}
          error={errorMessage?.passwordError}
        />
        <Button variant="contained" color='error' onClick={handleSubmit}>{title}</Button>
      </Box>  
      {title === "Login" ? (
          <>
            <Typography variant="body1" align="center" sx={{color:'#fff'}}> Don't have an account yet?</Typography>
            <Link to="/register">
              <Typography variant="body1" align="center" sx={{color:'#fff'}}>Register here</Typography>
            </Link>
          </>
        ) : (
          <>
            <Typography variant="body1" align="center" sx={{color:'#fff'}}> Already have an account?</Typography>
            <Link to="/login">
              <Typography variant="body1" align="center" sx={{color:'#fff'}}>Login here</Typography>
            </Link>
          </>
        )}
    </Box>
  )
}

export default FromLoginRegister