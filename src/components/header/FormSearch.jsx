import React from "react";

const FormSearch = ({ search, searchHandler }) => {
  return (
    <form className="basis-2/5">
      <input
        className="w-full outline-none shadow border border-gray-500 p-1 rounded-t-lg 
        focus:border-b-2 focus:border-sky-600"
        type="text"
        onChange={(e) => searchHandler(e.target.value)}
        value={search}
        placeholder="Cari judul film..."
      />
    </form>
  );
};

export default FormSearch;
