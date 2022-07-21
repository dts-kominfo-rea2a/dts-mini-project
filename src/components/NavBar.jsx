import img1 from "../assets/image-3.png";
import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Menu, Search } from "@mui/icons-material";
import { SearchBar, SearchIconWrapper, StyledInputBase } from "./SearchBar";
import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import {
  auth,
  getOutFromApp,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  // const [navbar, setNavbar] = useState[true]
  const navigate = useNavigate();

  const [user, isLoading, error] = useAuthState(auth);

  const buttonLogOutHandler = () => {
    getOutFromApp();
    navigate("login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar style={{ justifyContent: "space-around" }}>
          {/*           
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
           */}
          <Button variant="text" color="inherit" onClick={() => navigate("/")}>
            <img src={img1} style={{ width: '35%' }} />
          </Button>
          <Box style={{ display: 'flex', flexDirection: 'row' }}>

            <Typography
              variant="body1"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center", mr: 4, display: "flex" }}
            >
              {/* {user ? user.email : "Anda Belum Login"} */}
              Home
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center", mr: 4, display: "flex" }}
            >
              {/* {user ? user.email : "Anda Belum Login"} */}
              Series
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center", mr: 4, display: "flex" }}
            >
              {/* {user ? user.email : "Anda Belum Login"} */}
              Movies
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center", mr: 4, display: "flex" }}
            >
              {/* {user ? user.email : "Anda Belum Login"} */}
              News and Popular
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center", mr: 4, display: "flex" }}
            >
              {/* {user ? user.email : "Anda Belum Login"} */}
              My List
            </Typography>
          </Box>
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
