import React, { useEffect, useState } from "react";
import tmdbInstance from "../apis/tmdb";
import MovieList from '../components/home/MovieList'

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const response = await tmdbInstance.get("/movie/popular");
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataMovies();
  }, []);

  return (
    <div className="w-4/5">
      <MovieList categoryName="popular" movieList={movies} />
    </div>
  );
};

export default Home;
