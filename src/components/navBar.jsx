import React from "react";
import image from "../assets/images/ProfilePicture.png";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth, logOut } from "../authentication/firebase";

import { Link, NavLink, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  let activeStyle = "text-white font-semibold";
  const [user, isLoading] = useAuthState(auth);
  let unActiveStyle = "text-gray-500 hover:text-red-500";

  const buttonLogoutOnClickHandler = async () => {
    // Kita akan memanggil fungsi keluarDariApps di sini
    await logOut();
    navigate("/login");
  };

  return (
    <>
      <div className="flex gap-4 items-center justify-between bg-gray-900 h-6 w-full px-4 md:px-12 py-8">
        <img
          src={image}
          alt="LOGO APLIKASDI"
          className="h-10 w-10 rounded-lg"
        />
        <div className=" flex gap-4 md:w-8/12 px-7 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeStyle : unActiveStyle
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Login2"
            className={({ isActive }) =>
              isActive ? activeStyle : unActiveStyle
            }
          >
            Series
          </NavLink>
          <NavLink
            to="/register2"
            className={({ isActive }) =>
              isActive ? activeStyle : unActiveStyle
            }
          >
            Movie
          </NavLink>
        </div>
        <div className="flex justify-end gap-2 w-2/12 ">
          {user ? (
            <div
              className="text-white hover:text-red-500"
              onClick={buttonLogoutOnClickHandler}
            >
              Logout
            </div>
          ) : (
            <Link className="text-white hover:text-red-500" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
