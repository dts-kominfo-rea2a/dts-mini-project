import React from "react";

import { Box, Typography } from "@mui/material";

import styles from "./HomePage.module.css";

// import {auth} from "../authentication/firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

const HomePage = () => {

//   const [user] = useAuthState(auth);

  return (
    <>
      <Box className={styles.container}>
        <Typography variant="body1">Halo, ini adalah halaman utama </Typography>
      </Box>
    </>
  );
};

export default HomePage;