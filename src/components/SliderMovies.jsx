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
const SliderMovies = ({ dataMovie }) => {
  // console.log(dataMovie);

  const baseUrlForMovie = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="flex w-screen rounded-md bg-black h-96 md:w-screen md:h-96">
        <div
          className="md:w-2/3 bg-fixed right-0 w-screen md:absolute h-96 rounded-sm object-fill"
          style={{
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundImage: `linear-gradient(90deg, rgb(0 0 0), rgb(0 0 0 / 0%)) ,url(
              '${baseUrlForMovie}${dataMovie.backdrop_path}'
            )`,
          }}
        ></div>
        <div className="w-full  md:w-2/3 absolute top-24 left-5 md:inset-y-0 md:left-12 md:top-32 lg:w-1/2">
          <div className="flex-row w-full top-24 md:w-full text-white md:p-5 rounded-lg backdrop-opacity-5">
            <div className="md:h-46 w-auto">
              <p className="text-xl font-extrabold text-left">
                {dataMovie.original_title}
              </p>
              <h1 className="text-sm md:text-base text-left">
                {" "}
                {dataMovie.overview}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderMovies;
