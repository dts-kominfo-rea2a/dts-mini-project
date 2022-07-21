import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import styles from "./Header.module.css";

const Footer = () => {
  return (
    <Box className={styles.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" className={styles.grow}>
            MyMovies
          </Typography>
          <Typography variant="body1">Copyright &copy; MyMovies 2022</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
