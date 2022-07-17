import React from "react";

const FormSearch = ({ onSearchHandlerFn }) => {
  return (
    <form className="basis-2/5 shadow border border-gray-500">
      <input
        className="w-full"
        type="text"
        onClick={(e) => {
          return null;
        }}
      />
    </form>
  );
};

export default FormSearch;
