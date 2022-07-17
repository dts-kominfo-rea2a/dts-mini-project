import React from "react";
import { HiFilm } from "react-icons/hi";

const Branding = ({ brandName }) => {
  return (
    <span className="flex">
      <div className="basis-4 grow-1 self-center">
        <HiFilm />
      </div>
      <p className="grow-1 font-bold">{brandName}</p>
    </span>
  );
};

export default Branding;
