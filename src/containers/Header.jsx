import React from "react";

const Header = () => {
  return (
    <header className="w-full min-h-full pt-2 pb-2 bg-slate-50 shadow flex justify-center">
      <div className="container w-4/5 flex gap-2 justify-between">
        <a href="#">1</a>
        <a href="#">1</a>
        <a href="#">1</a>
      </div>
      <form>
        <input
          type="text"
          onClick={(e) => {
            return null;
          }}
        />
      </form>
    </header>
  );
};

export default Header;
