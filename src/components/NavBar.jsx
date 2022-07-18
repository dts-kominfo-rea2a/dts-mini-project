import React from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import {
  keluarDariApplikasi
} from "../authentication/firebase"

// Di sini kita akan menggunakan useNavigate untuk bisa keluar dari halaman HomePage dan
// beralih ke halaman Login
import { useNavigate } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  // Gunakan hooks useNavigate
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async() => {
    
    await keluarDariApplikasi();
    navigate("/login");
  };

  return (
    <Box className={styles.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" className={styles.grow}>
            GARLIC'S MOVIES LIST
          </Typography>
          <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
