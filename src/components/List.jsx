import React from "react";

function List({ movieList }) {
  // const img = "https://placekitten.com/400/200";
  const img = "https://image.tmdb.org/t/p/w300";
  // const img = "https://image.tmdb.org/t/p/original";

  return (
    <div className="flex flex-row m-6">
      {movieList.splice(-6).map((item, index) => (
        <div key={item.id} className="box-border h-96 w-72 border-2 m-10">
          <img
            src={`${img}${item.poster_path}`}
            alt={item.title}
            // className="object-cover h-28 w-96 p-1 hover:object-scale-down"
            className=""
          />
          <span className="text-center">
            {item.title} {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default List;