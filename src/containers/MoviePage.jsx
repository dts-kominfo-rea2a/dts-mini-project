import React from "react";

const MoviePage = ({ itemMovie }) => {
  return (
    <>
      <section className="container w-4/5 h-full mt-4 mb-16 bg-slate-50 shadow-lg flex flex-row">
        <div>
          <img
            src={`http://image.tmdb.org/t/p/w185/${itemMovie.poster_path}`}
            alt="Poster"
          />
        </div>
        <div>
          <div className="p-4 text-start flex flex-col">
            <div className="font-bold text-lg">{itemMovie.title}</div>
            <div>&#9733; 6.5</div>
            <div>"Sinopsis"</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoviePage;
