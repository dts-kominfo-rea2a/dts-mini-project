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
        setListMovie([...listMovie, ...data.results]);
      } else {
        setListMovie(data.results);
      }
    }
  }, [data]);
  return (
    <>
      <p className="text-white font-semibold pb-4">{title}</p>
      <div
        id={title}
        className="flex w-full gap-2  pb-4 overflow-x-auto overflow-y-visible"
      >
        {error ? (
          <div className="w-full bg-red-500 justify-center">
            <h3> Data tidak dapat diload</h3>
          </div>
        ) : isLoading ? (
          <div className="w-full bg-red-500 justify-center">
            <h3> Mohon tunggu</h3>
          </div>
        ) : (
          <>
            {listMovie?.map((movie) => (
              <MovieTile key={movie.id} dataMovie={movie}></MovieTile>
            ))}
          </>
        )}

        <div
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === 1}
          className="bg-slate-50 h-10 w-52 fixed"
        >
          {" "}
          dsfsdf
        </div>
      </div>
    </>
  );
};
export default PopularList;
