import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPopularMovies,
  selectAllPopularMoviesStatus,
  getPopularMovies,
} from "../features/movie/getPopularMovies";

import MovieList from "../components/home/MovieList";

const Home = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(selectAllPopularMovies);
  const popularMoviesStatus = useSelector(selectAllPopularMoviesStatus);

  useEffect(() => {
    if (popularMoviesStatus === "idle") {
      dispatch(getPopularMovies());
    }
  }, [popularMovies, dispatch]);

  return (
    <div className="w-4/5">
      <MovieList categoryName="popular" movieList={popularMovies} />
    </div>
  );
};

export default Home;
