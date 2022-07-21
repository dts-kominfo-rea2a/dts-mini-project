import * as React from "react";
import { Typography, TextField, Box, Button, Link } from "@mui/material";

export default function LoginOld() {
  return (
    <Box
      component="form"
      sx={{
        border: "1px solid black",
        borderRadius: 2,
        bgcolor: "white",
        width: 400,
        height: 400,
        margin: "auto",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
      autoComplete="off"
    >
      <Typography>Login Page</Typography>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="password" variant="outlined" type="password" />
      <Button color="inherit" variant="contained" type="submit">
        Login
      </Button>
      <Link href="/register" underline="hover">
        {"Doesn't Have an Account? Register Now"}
      </Link>
    </Box>
  );
}
