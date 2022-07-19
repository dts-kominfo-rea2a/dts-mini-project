import React from "react";
import MovieItem from "./MovieItem";
import { useNavigate } from "react-router-dom";

const MovieList = ({ movieList, categoryName }) => {
  let navigate = useNavigate();

  return (
    <>
      <section className="container mt-4 bg-slate-50 p-y-4 shadow-lg">
        <div className="flex justify-between border-b-4 font-semibold text-white"></div>
        <div className="container p-4 grid md:grid-cols-5 sm:grid-cols-2 gap-4 ">
          {movieList.slice(0, 5).map((movie) => (
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
