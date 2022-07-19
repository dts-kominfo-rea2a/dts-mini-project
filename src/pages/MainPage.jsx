import React from "react";

import NavigationBar from "../components/navBar";

import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <NavigationBar />

      <div className="flex-row">
        <Outlet />
      </div>
    </>
  );
};

export default MainPage;
