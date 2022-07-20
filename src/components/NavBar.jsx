import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { logOut } from "../services/authentication/firebase";
import LogoutIcon from "@mui/icons-material/Logout";

const NavBar = ({ isHomePage }) => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    logOut();
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(0,0,0,0.75)",
      }}
    >
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Karena link ini bukan dari MUI yang kita gunakan adalah style, bukan sx */}
            <Box display={"flex"}>
              <LocalMoviesIcon sx={{ width: 40, mt: 0.3, color: "red" }} />
              <Typography variant="h5">Movieku</Typography>
            </Box>
            {isHomePage ? (
              <Box display={"flex"}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  {/* Karena button ini dari MUI, maka yang kita gunakan adalah sx */}
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Populer
                  </Button>
                </Link>

                {/* Karena link ini bukan dari MUI yang kita gunakan adalah style, bukan sx */}
                <Link to="/login" style={{ textDecoration: "none" }}>
                  {/* Karena button ini dari MUI, maka yang kita gunakan adalah sx */}
                  <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    onClick={logOutHandler}
                  >
                    <LogoutIcon />
                  </Button>
                </Link>
              </Box>
            ) : (
              <></>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
