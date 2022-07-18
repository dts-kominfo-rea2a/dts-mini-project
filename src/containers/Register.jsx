import { Box } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import SignForm from "../components/SignForm";
const Register = () => {
  return (
    <>
      <Box height="100vh" sx={{ background: "url(background.jpg)" }}>
        <NavBar />
        <SignForm text="Register" />
      </Box>
    </>
  );
};

export default Register;
