import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const buttonLogoutOnClickHandler = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <Box className={styles.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" className={styles.grow}>
            MyMovies
          </Typography>
          {user ? (
            <Typography variant="body1">
              <strong>{user.email}</strong>
            </Typography>
          ) : (
            ""
          )}
          <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
