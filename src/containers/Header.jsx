import React from "react";
import FormSearch from "../components/header/FormSearch";
import HeaderName from "../components/header/HeaderName";


const Header = () => {
  return (
    <header className="w-full min-h-full pt-2 pb-2 bg-slate-50 shadow flex justify-center">
      <div className="container w-4/5 flex gap-4 justify-between">
        <HeaderName />
        <FormSearch />
      </div>
    </header>
  );
};

export default Header;
