import React, { useEffect, useState } from "react";
import tmdbInstance from "../apis/tmdb";
import MovieItem from "../components/home/MovieItem";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await tmdbInstance.get("/movie/popular");
        setMovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, []);

  return (
    <div className="w-4/5 mt-8">
      <div className="mb-4 font-semibold text-xl uppercase">Popular Movies</div>
      <div className="grid grid-cols-6 gap-4">
        {movies.slice(0, 20).map((movie) => (
          <MovieItem itemMovie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
