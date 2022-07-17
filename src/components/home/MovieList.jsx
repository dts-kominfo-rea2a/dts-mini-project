import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movieList, categoryName }) => {
  return (
    <>
      <section className="container mt-4 bg-slate-50 p-y-4 shadow-lg">
        <div className="flex justify-between bg-sky-600 px-4 py-2 rounded-t-lg font-semibold text-white">
          <div className="py-1">{categoryName}</div>
          <button className="bg-sky-700 py-1 px-2 rounded-lg flex gap-2 content-center">
            More {categoryName} movies &raquo;
          </button>
        </div>
        <div className="container p-4 grid grid-cols-6 gap-4 ">
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
        </div>
      </section>
    </>
  );
};

export default MovieList;
