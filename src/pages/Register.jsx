import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "../data/firebase";
// , sendPasswordResetEmail
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/login");
    if (error) console.log(error);
  }, [user, loading, navigate, error]);

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-neutral-900 rounded-md shadow-xl shadow-neutral-800 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-white uppercase">
          Sign Up
        </h1>
        <form className="mt-6">
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
              onChange={(e) => {setPassword(e.target.value)}}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-red-700 bg-neutral-100 border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
            />
          </div>
          {/* <Link to="/home" className="text-xs text-red-600 hover:underline">Forget Password?</Link> */}
          <div className="mt-6">
            {/* <Link to="/"> */}
            <button
              onClick={() => {registerWithEmailAndPassword(email, password)}}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Sign Up
            </button>
            {/* </Link> */}
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-white">
          {" "}
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-red-600 hover:underline"
          >
            Sign in instead
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
