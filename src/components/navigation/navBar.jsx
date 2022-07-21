import React, { useState, Fragment } from "react";
import profile from "../../assets/images/ProfilePicture.png";
import iconPage from "../../assets/images/icon.png";

import { Transition, Menu } from "@headlessui/react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, logOut } from "../../authentication/firebase";

import { Link, NavLink, useNavigate } from "react-router-dom";
import MenuMobile from "./MenuMobile";

const NavigationBar = () => {
  const navigate = useNavigate();
  let activeStyle = "text-white  font-bold";
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);
  let unActiveStyle = "text-gray-200 hover:text-red-500";

  const buttonLogoutOnClickHandler = async () => {
    await logOut();
    navigate("/login");
  };

  return (
    <>
      <div className="flex gap-4 items-center justify-between bg-gray-900 h-6 w-full px-4 md:px-12 py-8">
        <img src={iconPage} alt="LOGO APPP" className="h-10 w-10 rounded-lg" />
        <div className="hidden md:block gap-4 md:w-8/12 px-7 ">
          <div className="ml-10 flex items-baseline space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeStyle : unActiveStyle
              }
            >
              Home
            </NavLink>
            <h1 to="#" className={unActiveStyle}>
              Series
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 w-2/12 ">
          <div className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              {user ? (
                <Menu.Button>
                  <img
                    src={profile}
                    alt="LOGO APPP"
                    className="h-10 w-10 rounded-full"
                  />
                </Menu.Button>
              ) : (
                <Link className="text-white hover:text-red-500" to="/login">
                  Login
                </Link>
              )}
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right z-50 outline outline-slate-700 w-auto p-2 absolute right-0 mt-2 rounded-md shadow-lg  bg-gray-900">
                <div className="py-1">
                  <div className="text-white hover:text-red-500 p-2">
                    {user?.email}
                  </div>
                  <div
                    className="text-white hover:text-red-500 p-2"
                    onClick={buttonLogoutOnClickHandler}
                  >
                    Logout
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <Transition show={isOpen}>{(ref) => <MenuMobile ref={ref} />}</Transition>
    </>
  );
};

export default NavigationBar;
