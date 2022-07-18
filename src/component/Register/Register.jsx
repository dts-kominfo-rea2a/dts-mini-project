import React from "react";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div>
      <div className={styles.registerWrapper}>
        <form className={styles.registerForm}>
          <h2>Halaman Register</h2>
          <label htmlFor="nama" placeholder="Masukkan Nama Lengkap">
            Nama Lengkap
          </label>
          <input id="email" type="email" />
          <label htmlFor="email" placeholder="Masukkan Email">
            Email
          </label>
          <input id="email" type="email" />
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

export default Register;
