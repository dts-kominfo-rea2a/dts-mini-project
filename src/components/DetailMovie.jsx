import React from "react";

const DetailMovie = ({ movie }) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="flex h-96 md:w-full md:h-96">
        <div className="w-full md:w-2/3 absolute top-24 left-5 md:inset-y-0 md:left-12 md:top-32 lg:w-1/2">
          <div className="flex-row w-full top-24 md:w-full text-white md:p-5 rounded-lg backdrop-opacity-5">
            <div className="md:h-46 w-auto">
              <h2 className="text-lg font-bold">Description</h2>
              <h1 className="text-sm">{movie.overview}</h1>
            </div>
            <div className="py-5">
              <button className=" font-bold tracking-wider inline-block w-24 px-4 py-2 bg-blue-600 bg-opacity-50 text-white font-smaall  leading-snug uppercase rounded shadow-md">
                Play
              </button>
            </div>
          </div>
        </div>
        <div className="md-2/3">
          <img
            className=" right-0 w-screen h-96 bg-red-500 rounded-sm object-fill"
            src={`${baseUrlForMovie}${movie.backdrop_path}`}
            alt={movie.original_title}
          />
        </div>
      </div>
    </>
  );
};
export default DetailMovie;
