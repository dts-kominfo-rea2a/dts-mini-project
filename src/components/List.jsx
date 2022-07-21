import React from "react";
import { Link } from "react-router-dom";

function List({ movieList, title }) {
  const img = "https://image.tmdb.org/t/p/original";

  return (
    <div className="flex flex-col justify-center mx-auto max-w-7xl">
      <h1 className="text-lg pt-4 underline mx-5">{title}</h1>
      <div className="flex flex-row mb-10 flex-wrap ">
        {movieList ? movieList.map((item, index) => (
          <div key={item.id} className="h-auto w-72 text-center py-2 mx-auto">
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
