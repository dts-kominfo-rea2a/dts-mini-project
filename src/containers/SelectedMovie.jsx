import React, { useEffect, useState } from "react";
import tmdbInstance from "../apis/tmdb";

const SelectedMovie = () => {
  const [movie, setMovie] = useState([]);
  const url = window.location.href;
  const id = url.split("/movie/")[1];
  const posterPath = "https://image.tmdb.org/t/p/w200";

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const response = await tmdbInstance.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieById(id);
  }, [id]);

  return (
    <div className="w-4/5">
      <div className="w-full mt-4 bg-slate-100 flex">
        <img
          className="object-fill h-296 w-200"
          src={`${posterPath}/${movie.poster_path}`}
          alt="Placeholder"
        />
        <div className="flex flex-col gap-2 p-4 text-start justify-between">
          <div>
            <div className="text-xl font-semibold">{movie.title}</div>
            <div className="flex flex-col gap-4 align-top">
              <div className=""> &#9733; Rating: {movie.vote_average}</div>
              <div className="">
                &#128337; Released:{" "}
                {new Date(movie.release_date).toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div>{movie.overview}</div>
            </div>
          </div>
          <ul className="flex gap-2 flex-wrap">
            {movie?.genres?.map((genre) => (
              <li
                className="bg-sky-600 text-white py-1 px-2 rounded-lg text-sm"
                key={genre.id}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectedMovie;
