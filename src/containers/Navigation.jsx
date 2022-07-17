import React from "react";
import Branding from "../components/navigation/Branding";
import Menu from "../components/navigation/Menu";
import User from "../components/navigation/User";

const Navigation = () => {
  return (
    <nav className="w-full min-h-full pt-4 pb-4 bg-sky-700 text-white flex justify-center">
      <div className="container w-4/5 flex gap-2 justify-between">
        <Branding brandName="BreezyMovies" />
        <Menu />
        <User />
      </div>
    </nav>
  );
};

export default Navigation;
