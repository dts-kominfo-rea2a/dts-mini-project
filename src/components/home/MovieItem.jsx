import React from "react";

const MovieItem = () => {
  return (
    <div className="rounded-lg shadow-md ">
      <div className="relative">
        <img
          src="http://image.tmdb.org/t/p/w185/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
          alt="Movie"
          className="w-full rounded-lg"
        />
        <div
          className="absolute top-0 right-0 bg-slate-100 bg-opacity-50 
          px-2 rounded-tr-lg rounded-bl-lg"
        >
          &#9733; 6.5
        </div>
      </div>
      <div className="flex flex-col mt-2 mb-2">
        <div className="font-semibold">Movie Name</div>
        <div className="">"Synopsis"</div>
      </div>
    </div>
  );
};

export default MovieItem;
