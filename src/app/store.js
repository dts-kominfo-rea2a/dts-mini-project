import { configureStore } from "@reduxjs/toolkit";
import popularMovieReducer from "../features/movie/getPopularMovies";

export const store = configureStore({
  reducer: {
    movies: popularMovieReducer,
  },
});
