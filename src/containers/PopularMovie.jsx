import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPopularMovies,
  selectAllPopularMoviesStatus,
  getPopularMovies,
} from "../features/movie/getPopularMovies";

import MovieItem from "../components/home/MovieItem";

const PopularMovie = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(selectAllPopularMovies);
  const popularMoviesStatus = useSelector(selectAllPopularMoviesStatus);

  useEffect(() => {
    if (popularMoviesStatus === "idle") {
      dispatch(getPopularMovies());
    }
  }, [popularMovies, dispatch]);
  return (
    <div className="w-4/5 mt-8">
      <div className="mb-4 font-semibold text-xl uppercase">Popular Movies</div>
      <div className="grid grid-cols-6 gap-4">
        {popularMovies.slice(0, 20).map((movie) => (
          <MovieItem itemMovie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovie;
