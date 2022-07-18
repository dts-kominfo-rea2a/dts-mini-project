import React from "react";
import {
  Avatar,
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link, useNavigate } from "react-router-dom";

const SignForm = ({ text }) => {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/");
  };
  return (
    <Container
      maxWidth="xs"
      sx={{
        mt: "10%",
        bgcolor: "rgb(255,255,255,0.9)",
        pt: 5,
        pb: 5,
        borderRadius: 3,
      }}
    >
      <Box fullWidth textAlign="center">
        {text === "Login" ? (
          <Avatar
            sx={{ bgcolor: "black", margin: "0 auto", width: 60, height: 60 }}
          >
            <LockIcon />
          </Avatar>
        ) : (
          <Avatar
            sx={{ bgcolor: "black", margin: "0 auto", width: 60, height: 60 }}
          >
            <AssignmentIcon />
          </Avatar>
        )}
        <Typography variant="h4">{text}</Typography>
      </Box>
      <Box>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          sx={{ borderRadius: 40 }}
        />
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          height: 40,
          backgroundColor: "rgba(0,0,0,1)",
          borderRadius: 10,
        }}
        onClick={loginHandler}
      >
        {text}
      </Button>
      <Box textAlign="center">
        {text === "Register" ? (
          <Link to="/login">Don't have an account? Sign Up</Link>
        ) : (
          <Link to="/register">Already have an account?</Link>
        )}
      </Box>
    </Container>
  );
};

export default SignForm;
