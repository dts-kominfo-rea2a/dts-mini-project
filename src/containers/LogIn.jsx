import { Box } from "@mui/system";
import React from "react";
import NavBar from "../components/NavBar";
import SignForm from "../components/SignForm";

const LogIn = () => {
  return (
    <Box height="100vh" sx={{ background: "url(background.jpg)" }}>
      <NavBar />
      <SignForm text="Login" />
    </Box>
  );
};

export default LogIn;
