import React from "react";
import { NavLink } from "react-router-dom";
const MenuMobile = ({ ref }) => {
  return (
    <div className="md:hidden" id="mobile-menu">
      <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NavLink
          to="/"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Home
        </NavLink>
        <h1 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          Series
        </h1>
      </div>
    </div>
  );
};

export default MenuMobile;
