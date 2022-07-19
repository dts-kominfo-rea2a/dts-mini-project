import React, { useEffect, useState } from "react";

import MovieTile from "../components/MovieTile";

import { usePopularQuery } from "../services/movies";

const PopularList = ({ title }) => {
  const [page, setPage] = useState(1);
  const [listMovie, setListMovie] = useState([]);
  const { data, error, isLoading } = usePopularQuery(page);

  useEffect(() => {
    if (data) {
      if (page > 1) {
        let movies = [...listMovie, ...data.results];
        console.log(movies);
        setListMovie([...listMovie, ...data.results]);
      } else {
        setListMovie(data.results);
      }
    }
  }, [data]);
  return (
    <>
      <p className="text-white font-semibold pb-4">{title}</p>
      <div className="flex w-full gap-2  pb-4 overflow-x-auto overflow-y-visible">
        {error ? (
          <>Ada error di sini nih ...</>
        ) : isLoading ? (
          <>Loading sdcds dulu yah ...</>
        ) : (
          <>
            {listMovie?.map((movie) => (
              <MovieTile key={movie.id} dataMovie={movie}></MovieTile>
            ))}
          </>
        )}
      </div>
      <div
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page === 1}
        className="bg-slate-50 h-10 w-52"
      ></div>
    </>
  );
};
export default PopularList;
