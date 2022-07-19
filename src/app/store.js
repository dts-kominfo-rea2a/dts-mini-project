import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TMDBMovies } from "../services/Movies/TMDBMoviesAPI";

export const store = configureStore({
  reducer: {
    [TMDBMovies.reducerPath]: TMDBMovies.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(TMDBMovies.middleware);
  },
});
