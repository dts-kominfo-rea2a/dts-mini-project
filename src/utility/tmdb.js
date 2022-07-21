import axios from "axios"

const tmdbIns = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      // TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
      api_key: "a9c6e153b93f1224305aa40269bba3d0"
    }
})

export default tmdbIns