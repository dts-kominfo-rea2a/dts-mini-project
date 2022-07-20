import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../data/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading, error, navigate]);

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-neutral-900 rounded-md shadow-xl shadow-neutral-800 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-white uppercase">
          Login
        </h1>
        <div className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-white">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="block w-full px-4 py-2 mt-2 bg-neutral-100 border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-white">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-red-700 bg-neutral-100 border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
            />
          </div>
          {/* <Link to="/home" className="text-xs text-red-600 hover:underline">Forget Password?</Link> */}
          <div className="mt-6">
            {/* <Link to="/"> */}
              {/* <Navigate to="/" replace={true} /> */}
              <button
                onClick={() => logInWithEmailAndPassword(email, password)}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Login
              </button>
            {/* </Link> */}
          </div>
        </div>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t"></div>
        <div className="flex mt-4 gap-x-2">
          <button
            onClick={signInWithGoogle}
            type="button"
            className="flex items-center justify-center w-full p-2 border border-white rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-red-400 bg-neutral-100 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-white">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-red-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
