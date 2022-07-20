import React from "react";
import { Link } from "react-router-dom";

function List({ movieList, title }) {
  const img = "https://image.tmdb.org/t/p/original";

  return (
    <div className="flex flex-col">
      <h1 className="text-lg ml-28 m-4 px-4 underline">{title}</h1>
      <div className="flex flex-row mb-20 justify-center flex-wrap">
        {movieList ? movieList.map((item, index) => (
          <div key={item.id} className="h-auto w-72 mx-12 text-center py-4">
            <Link to="/detail" state={{ from: item.id }}>
              <img
                src={`${img}${item.poster_path}`}
                alt={item.title}
                className="hover:p-1"
              />
              <span>
                {item.title} {item.name}
              </span>
            </Link>
          </div>
        )) : ""}
      </div>
    </div>
  );
}

export default List;
