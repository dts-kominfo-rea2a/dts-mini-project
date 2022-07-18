// import React, { useState, useEffect } from "react";
import axios from "axios";
import Popular from "./popular.json";

const baseURL = "https://api.themoviedb.org/3/";
const apiKey = "api_key=aaea8dcf53c572d15f8e305dfba3cefd";

const popular = "movie/popular?";
const series = "tv/popular?";
const genres = "tv/popular?";

const getMovies = (url) => {
  return axios.get(`${baseURL}${url}${apiKey}`).then((response) => {
    return response.data;
  });
};

const data = {
  popularity: getMovies(popular),
  popular: Popular,
  series: getMovies(series),
  genres: getMovies(genres),
};

export default data;
