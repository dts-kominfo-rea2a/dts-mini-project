import React from "react";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth } from "../authentication/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { LogOut } from "../authentication/Firebase";
import GoogleButton from "react-google-button";
import { LoginGoogle } from "../authentication/Firebase";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const buttonLogoutOnClickHandler = async () => {
    await LogOut();
    navigate("/");
  };

  const ButtonGoogle = async () => {
    await LoginGoogle();
  };

  return (
    <Box >
        <Toolbar style={{backgroundColor: '#575757',}}>
          <Typography variant="h4" component="div" style={{flex:1, color:'white'}}>
            Movieapp
          </Typography>
          <Typography variant="p" component="div" style={{flex:1, color:'white'}}>
            <Link to="" style={{color:'white'}}>Trending</Link>
            <Link to="" style={{marginLeft:'1em', color:'white'}}>Country</Link>
          </Typography>
          <Typography style={{color:'white'}}>
            {user ? (<strong>{user.email}</strong>) : ( <Button onClick={ButtonGoogle} style={{color:'black', backgroundColor: 'white', }}>Log In With Google</Button>)}
            </Typography>
            {user ? (<Button onClick={buttonLogoutOnClickHandler} style={{color:'black', backgroundColor: 'white', marginLeft:'2em'}}>Logout</Button>) : 
            (<Link to="/login"> <Button style={{color:'black', backgroundColor: 'white', marginLeft:'1em'}}>Log In</Button></Link>)}
          
        </Toolbar>
     
    </Box>
  );
};

export default NavBar;
