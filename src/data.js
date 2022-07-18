import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const apiKey = "api_key=aaea8dcf53c572d15f8e305dfba3cefd";

const popular = (baseURL, apiKey) => {
  const url = "move/popular?";
  axios.get(baseURL.concat(url)).then((response) => {
    console.log(response.data);
  });
};

const series = (baseURL, apiKey) => {};

const genres = (baseURL, apiKey) => {};

