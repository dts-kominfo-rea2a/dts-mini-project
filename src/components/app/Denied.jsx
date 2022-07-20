import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Denied = () => {
  return (
    <div className="w-4/5">
      <div className="w-full mt-4 bg-slate-100 flex rounded-lg shadow-lg py-8 px-4">
        <div>
          <img
            src="https://i.kym-cdn.com/entries/icons/mobile/000/002/144/You_Shall_Not_Pass!_0-1_screenshot.jpg"
            alt="Denied"
          />
        </div>
        <div className="w-full flex flex-col">
          <div
            class="w-full text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-black 
           after:inline-block after:relative after:align-middle after:w-1/4 
           before:bg-black before:inline-block before:relative before:align-middle 
           before:w-1/4 before:right-2 after:left-2 text-xl p-4 capitalize font-semibold"
          >
            Access Forbiden!
          </div>
          <div className="w-full">
            <p>Sorry, you have to be logged in to access this page.</p>
            <p>But, no worries! You can find more on Our Hompage</p>
          </div>
          <div className="w-full mt-4">
            <Link to="/">
              <button className="w-3/5 p-2 bg-amber-600 text-white font-semibold">
                <span className="flex gap-2 justify-center align-center">
                  <span className="self-center">
                    <FaHome />
                  </span>
                  BreezyMovies Homepage
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Denied;
