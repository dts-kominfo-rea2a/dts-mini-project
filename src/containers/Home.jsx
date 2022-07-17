import React from "react";
import MovieList from "../components/home/MovieList";

const Home = () => {
  return (
    <div className="w-4/5">
      <MovieList categoryName="Popular" />
      <MovieList categoryName="New" />
    </div>
  );
};

export default Home;
