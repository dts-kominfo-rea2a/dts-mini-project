import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <div className="w-full bg-slate-400 text-red-500 self-center p-4 text-center text-xl rounded">
      {message}
    </div>
  );
};

export default ErrorComponent;
