import React from "react";

const DetailMovie = ({ movie }) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div
        className="flex md:w-full items-center md:h-96"
        style={{
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundImage: `linear-gradient(90deg, rgb(0 0 0), rgb(0 0 0 / 0%)) ,url(
              '${baseUrlForMovie}${movie.backdrop_path}'
            )`,
        }}
      >
        <div className="w-full md:w-2/3  top-1/4 px-4 md:inset-y-0 md:left-12 md:top-1/3 lg:w-1/2">
          <div className="flex-row md:w-full text-white md:p-5 rounded-lg backdrop-opacity-5">
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
      </div>
    </>
  );
};
export default DetailMovie;
