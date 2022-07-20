import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Movie from "../data/Movies.js";

function Detail() {
  const [details, setDetails] = useState([]);
  const [genres, setGenres] = useState([]);
  const [production, setProduction] = useState([]);
  const [prodComp, setProdComp] = useState([]);

  const location = useLocation();
  const from = location.state;
  const movieId = from.from;
  const movieDetail = "movie/";
  const seriesDetail = "tv/";
  const img = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    Movie.getMovieDetail(movieDetail, movieId).then((response) => {
      setDetails(response);
      setGenres([...response.genres]);
      setProduction([...response.production_countries]);
      setProdComp([...response.production_companies]);
    });
    Movie.getMovieDetail(seriesDetail, movieId).then((response) => {
      setDetails(response);
      setGenres([...response.genres]);
      setProduction([...response.production_countries]);
      setProdComp([...response.production_companies]);
    });

  }, [movieId]);

  let date = details.release_date;
  let movieGenres = genres.map((item) => [item.name]);
  let prodCompList = prodComp.map((item) => [item.name]);
  let movieLength = ` . ${details.runtime} min`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <img
          src={`${img}${details.poster_path}`}
          alt={details.original_title}
          className="h-auto w-72 text-center mr-20"
        />
        <div className="flex flex-col">
          <div className="text-bold text-4xl font-bold pt-12">
            {details.title ? details.title : details.name}
          </div>
          <div className="text-sm">
            {date ? date.substring(0, date.indexOf("-")) : date}
          </div>
          <div className="flex flex-row py-2">
            <div className="font-bold pr-4">{details.vote_average} </div>
            <div className="italic">{movieGenres.join(", ")}</div>
          </div>
          <div className="py-4 text-2xl">{details.tagline}</div>
          <div className="text-base">{details.overview}</div>
          <div className="font-bold text-sm pt-10">
            {prodCompList.join(", ")}
          </div>
          <div className="py-2">
            {production.map((item) => item.iso_3166_1 + " ")}
            {movieLength}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
