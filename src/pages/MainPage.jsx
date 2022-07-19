import React from "react";

import NavigationBar from "../components/navBar";

import { Outlet } from "react-router-dom";

import { store } from "../app/store";

const MainPage = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default MainPage;
