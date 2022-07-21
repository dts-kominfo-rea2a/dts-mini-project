import axios from "axios";

//buat axios intance utk fetch data
const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "fd3d835d1a33a554e233738f9542bd71",
    page: 1,
  },
});

export default tmdbInstance;
