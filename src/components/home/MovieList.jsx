import React from "react";
import MovieItem from "./MovieItem";
import { useNavigate } from "react-router-dom";

const MovieList = ({ movieList, categoryName }) => {
  let navigate = useNavigate();

  return (
    <>
      <section className="container mt-4 bg-slate-50 p-y-4 shadow-lg">
        <div className="flex justify-between border-b-4 font-semibold text-white">
          <div className="py-1 bg-sky-600 px-4 py-2 rounded-t-lg uppercase">
            {categoryName} movies
          </div>
        </div>
        <div className="container p-4 grid grid-cols-6 gap-4 ">
          {movieList.slice(0, 6).map((movie) => (
            <MovieItem key={movie.id} itemMovie={movie} />
          ))}
        </div>
        <button
          className="bg-sky-600 text-white w-full text-end py-1 px-2 rounded-lg flex gap-2 content-center capitalize"
          onClick={() => navigate("/popular")}
        >
          Show more {categoryName} movies &raquo;
        </button>
      </section>
    </>
  );
};

export default MovieList;
