import React from "react";

import { AppBar, Box, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Button variant="text" color="inherit">
            Home
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie List App
          </Typography>
          <Button variant="text" color="inherit">
            LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
