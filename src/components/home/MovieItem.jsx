import React from "react";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ itemMovie }) => {
  let navigate = useNavigate();
  const navigateTo = (destination) => {
    navigate(destination);
  };

  return (
    <div
      className="movieCard rounded-lg shadow-md flex flex-col justify-between"
      onClick={() => navigate(`/movie/${itemMovie.id}`)}
    >
      <div className="relative h-full">
        <img
          src={`http://image.tmdb.org/t/p/w185/${itemMovie.poster_path}`}
          alt="Movie"
          className="w-full rounded-lg"
        />
        <div
          className="absolute top-0 right-0 bg-slate-100 bg-opacity-50 
          px-2 rounded-tr-lg rounded-bl-lg"
        >
          &#9733; {itemMovie.vote_average}
        </div>
      </div>
      <div className="flex flex-col justiy-between">
        <button
          className="mt-4 bg-sky-600 text-white p-2 rounded-b-lg"
          onClick={() => navigateTo(`/movie/${itemMovie.id}`)}
        >
          <span> {itemMovie.title} &raquo;</span>
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
