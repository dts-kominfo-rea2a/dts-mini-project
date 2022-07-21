import React from "react";

import { AppBar, Box, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Menu, Search } from "@mui/icons-material";
import { SearchBar, SearchIconWrapper, StyledInputBase } from "./SearchBar";
import { useNavigate } from "react-router-dom";

import {
  auth,
  getOutFromApp,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  const navigate = useNavigate();

  const [user, isLoading, error] = useAuthState(auth);

  const buttonLogOutHandler = () => {
    getOutFromApp();
    navigate("login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
          <Button variant="text" color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Typography
            variant="body1"
            component="div"
            sx={{ flexGrow: 1, textAlign: "right", mr: 4 }}
          >
            {user ? user.email : "Anda Belum Login"}
          </Typography>
          <SearchBar>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." inputProps={{ "aria-label": "search" }} />
          </SearchBar>
          <Button variant="text" color="inherit" sx={{ ml: 2 }} onClick={buttonLogOutHandler}>
            {user ? "logout" : "login"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
