import axios from "axios";

// Di sini kita membuat instance dari axios
const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    // TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
    api_key: "1415dc66b6ef1d7172388a426b3b7a65",
  },
});

// Jangan lupa diexport karena akan digunakan di tempat lainnya
export default tmdbInstance;
