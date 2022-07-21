import React from "react";

import NavigationBar from "../components/navigation/navBar";

import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default MainPage;
