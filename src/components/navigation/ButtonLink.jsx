import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ buttonName, destination, variant }) => {
  let navigate = useNavigate();

  return (
    <>
      <button
        className={`w-full ${variant} px-4 py-2 rounded-md hover:font-semibold`}
        onClick={() => {
          navigate(destination);
        }}
      >
        {buttonName}
      </button>
    </>
  );
};

export default Button;
