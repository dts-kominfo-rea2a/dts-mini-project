import React from "react";
import MovieItem from "../components/home/MovieItem";

const PopularMovies = ({ moviesData, search }) => {
  return (
    <>
      <div className="w-4/5 mt-8">
        <div className="mb-4 font-semibold text-xl uppercase">
          Popular Movies
        </div>
        <div className="grid grid-cols-6 gap-4">
          {moviesData
            .slice(0, 20)
            .filter((movie) => {
              return movie.title.toLowerCase().includes(search);
            })
            .map((movie) => (
              <MovieItem itemMovie={movie} key={movie.id} />
            ))}
        </div>
      </div>
    </>
  );
};

export default PopularMovies;
