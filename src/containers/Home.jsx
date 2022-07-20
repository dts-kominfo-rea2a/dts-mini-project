import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Box className={styles.container}>
        <Typography variant="body1"><h1>Home Page</h1></Typography>
      </Box>
    </>
  );
};

export default HomePage;
