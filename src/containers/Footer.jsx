import React from "react";
import KominfoLogo from "../assets/kominfo.png";

const Footer = () => {
  return (
    <footer className="w-full min-h-full mt-48 bg-slate-300 flex justify-center">
      <div className="container w-4/5 p-4 flex gap-2 justify-between">
        <div className="grid grid-cols-2">
          <div>
            <img
              src={KominfoLogo}
              alt="Logo Kominfo"
              className="object-contain h-12 w-full"
            />
          </div>
          <div className="self-center font-bold">DTS Mini Project</div>
        </div>
        <div className="self-center font-bold flex text-start gap-4">
          <div>Pair 20:</div>
          <div>
            <ul>
              <li>Muhammad Fakhri</li>
              <li>Yusfi Farkhan</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
