import React from "react";
import FormSearch from "../components/header/FormSearch";
import Menu from "../components/header/Menu";

const Header = ({ search, searchHandler }) => {
  return (
    <header className="w-full min-h-full pt-2 pb-2 bg-slate-50 shadow flex justify-center">
      <div className="container w-4/5 flex gap-4 justify-between">
        <Menu />
        <FormSearch search={search} searchHandler={searchHandler} />
      </div>
    </header>
  );
};

export default Header;
