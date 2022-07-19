import React from "react";

const dummyMovie = {
  adult: false,
  backdrop_path: "/qTkJ6kbTeSjqfHCFCmWnfWZJOtm.jpg",
  genre_ids: [10751, 16, 12, 35, 14],
  id: 438148,
  original_language: "en",
  original_title: "Minions: The Rise of Gru",
  overview:
    "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
  popularity: 11510.186,
  poster_path: "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
  release_date: "2022-06-29",
  title: "Minions: The Rise of Gru",
  video: false,
  vote_average: 7.6,
  vote_count: 391,
};
const MovieTile = ({ dataMovie }) => {
  console.log(dataMovie);
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
  return (
    <>
      <div className="flex-grow-0 flex-shrink-0 w-44 h-20 md:w-72 md:h-44 justify-center rounded-md bg-blue-400">
        <img
          style={{ width: "inherit", height: "inherit" }}
          className="rounded-md"
          src={`${baseUrlForMovie}${dataMovie.poster_path}`}
          alt=""
        />
        <p>{dummyMovie.original_title}</p>
      </div>
    </>
  );
};

export default MovieTile;
