import React from "react";

const FormSearch = ({ search, searchHandler }) => {
  return (
    <form className="basis-2/5 shadow border border-gray-500 p-1">
      <input
        className="w-full outline-none"
        type="text"
        onChange={(e) => searchHandler(e.target.value)}
        value={search}
        placeholder="Cari judul film..."
      />
    </form>
  );
};

export default FormSearch;
