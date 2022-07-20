import React from "react";
import MovieList from "../components/home/MovieList";

const Home = ({ moviesData, search }) => {
  return (
    <div className="w-4/5">
      <MovieList
        categoryName="popular"
        movieList={moviesData}
        search={search}
      />
    </div>
  );
};

export default Home;
