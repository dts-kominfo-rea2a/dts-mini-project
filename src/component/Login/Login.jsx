import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <div className={styles.loginWrapper}>
        <form className={styles.loginForm}>
          <h2>Halaman Login</h2>
          <label htmlFor="username" placeholder="Masukkan Username">
            Username
          </label>
          <input id="username" type="text" />
          <label htmlFor="password" placeholder="Masukkan Password">
            Password
          </label>
          <input id="password" type="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
