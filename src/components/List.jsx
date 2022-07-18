import React from "react";

function List({ movieList }) {
  // const img = "https://placekitten.com/400/200";
  // const img = "https://image.tmdb.org/t/p/w300";
  const img = "https://image.tmdb.org/t/p/original";

  return (
    <div className="flex flex-row">
          {/* <div className="shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Series</h1>
        </div>
      </div>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex ">
        </div>
      </main> */}
      {movieList.map((item, index) => (
        <div key={item.id} className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <img
            src={`${img}${item.poster_path}`}
            alt={item.title}
            className=" w-screen p-4"
          />
          <span>
            {item.title} {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default List;