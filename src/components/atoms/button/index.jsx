import React from "react";

const Button = (props) => {
  const { type, children, onClick } = props;
  return (
    <>
      <button
        type={type}
        className="py-8 text-center text-white bg-merah rounded font-Inter tracking-[0.16em] font-bold md:text-s2 w-full"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
