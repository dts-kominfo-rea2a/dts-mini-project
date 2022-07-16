import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { keluarDariAplikasi } from "../authentication/firebase";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async () => {
    await keluarDariAplikasi();
    navigate("/login");
  };

  return (
    <Box className={styles.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" className={styles.grow}>
            Movie List App
          </Typography>
          <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
