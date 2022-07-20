import axios from "axios";

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
  popular: getMovies(popular),
  series: getMovies(series),
  genres: getMovies(genres),
};

export default data;
