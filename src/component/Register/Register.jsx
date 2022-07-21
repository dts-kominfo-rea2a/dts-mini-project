import React from "react";
import styles from "./Register.module.css";
import { TextField, Button } from "@mui/material";

const Register = () => {
  return (
    <div>
      <div className={styles.mainRegister}>
        <h2>Form Register</h2>
        <div className={styles.formWrapperRegister}>
          <form>
            <TextField id="namaLengkap" label="Nama Lengkap" variant="outlined" />
            <br></br>
            <TextField id="username" label="Username" variant="outlined" />
            <br></br>
            <TextField id="password" label="Password" type="password" autoComplete="current-password" />
            <br></br>
            <TextField id="ulangiPassword" label="Password" type="password" autoComplete="current-password" />
            <br></br>
            <Button variant="contained" color="success">
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
