// Membutuhkan state untuk meng-track value dari TextField
import React, { useState, useEffect } from "react";
import image from "../assets/images/ProfilePicture.png";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";

import {
  auth,
  loginDenganEmailDanPassword,
  registerDenganEmailDanPassword,
} from "../authentication/firebase";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  const [user, isLoading, error] = useAuthState(auth);
  console.log(useAuthState(auth));

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    console.log("Login");
    loginDenganEmailDanPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    console.log("Register");
    registerDenganEmailDanPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = (e) => {
    e.preventDefault();
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(
    () => {
      console.log(user);
      // if (isLoading) {
      //   // Tampilkan loading screen (bila ada)
      //   return;
      // }

      // Lalu apabila usernya ditemukan (ada / tidak null)
      // Maka akan kita navigasikan ke halaman HomePage
      if (user) {
        navigate("/");
      }
    },
    // Sekarang dependency kita tergantung pada user dan isLoading dari useAuthState
    [user, isLoading, navigate]
  );

  return (
    <div className="lg:flex h-screen">
      <div
        className="hidden md:w-3/4 lg:flex items-center justify-center p-12"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: `linear-gradient(270deg, rgb(0 0 0), rgb(0 0 0 / 20%)) ,url(
              '${image}'
            )`,
        }}
      ></div>
      <div className="absolute  right-0 items-center justify-center flex-1 lg:w-1/2 xl:max-w-screen-sm self-center p-12">
        <div className="p-10 w-full">
          {" "}
          <p className="text-white text-center text-lg font-semibold">
            {" "}
            MOVIE APP
          </p>
        </div>
        <div className="p-4 w-full">
          <form onSubmit={buttonLoginOrRegisterOnClickHandler}>
            <div className="mb-4">
              <input
                type="text"
                className="form-control justify-center block w-full px-4 py-2 font-small text-black bg-black bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-white focus:bg-black focus:border-blue-600 focus:outline-blue rounded"
                id="email"
                placeholder="Email address"
                onChange={textFieldEmailOnChangeHandler}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control block w-full px-4 py-2 font-small text-black bg-black bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-white focus:bg-black focus:border-blue-600 focus:outline-blue rounded"
                id="password"
                placeholder="Password"
                onChange={textFieldPasswordOnChangeHandler}
              />
            </div>

            <div className="text-center lg:text-left">
              <button
                type="submit"
                className=" font-bold tracking-wider inline-block w-full px-4 py-2 bg-blue-600 text-white font-smaall  leading-snug uppercase rounded shadow-md hover:bg-red-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                {loginOrRegister === "login" ? "Login" : "Register"}
              </button>

              {loginOrRegister === "login" ? (
                <p className="text-base text-gray-500 font-semibold mt-2 pt-1 mb-0">
                  Don't have an account ?,
                  <Link
                    className="font-bold text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    to="/register"
                  >
                    REGISTER
                  </Link>
                </p>
              ) : (
                <p className="text-base text-gray-500 font-semibold mt-2 pt-1 mb-0">
                  or do you want Login ?,{" "}
                  <Link
                    className="font-bold text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    to="/login"
                  >
                    LOGIN
                  </Link>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginOrRegisterForm;
