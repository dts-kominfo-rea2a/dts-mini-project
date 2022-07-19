import React, { useState } from "react";

const MenuComponent = ({ isActive, text }) => {
  return (
    <p
      className={
        isActive
          ? "text-white font-semibold"
          : "text-gray-500  hover:text-red-500 hover:shadow-lg"
      }
    >
      {text}
    </p>
  );
};

export default MenuComponent;
