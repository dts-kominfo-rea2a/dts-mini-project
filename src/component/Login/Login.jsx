import React from "react";
import styles from "./Login.module.css";
import { TextField, Button } from "@mui/material";

const Login = () => {
  return (
    <div>
      <div className={styles.mainLogin}>
        <h2>Halaman Login</h2>
        <div className={styles.formWrapper}>
          <form>
            <TextField id="outlined-basic" label="Username" variant="outlined" white="white" />
            <br></br>
            <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
            <br></br>
            <Button variant="contained" color="primary">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
