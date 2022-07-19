import { Box } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import PopularList from "../components/PopularList";

const Home = () => {
  return (
    <Box bgcolor={"rgba(0,0,0,0.8)"}>
      <PopularList />
    </Box>
  );
};

export default Home;
