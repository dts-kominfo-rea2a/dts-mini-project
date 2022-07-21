import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api_key = "d4e79dafcbc97c2aeac1624837c5904c";
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),

  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ page = 1, param }) =>
        `movie/${param}?api_key=${api_key}&page=${page}`,
    }),
    getDetail: builder.query({
      query: (idMovie) => `movie/${idMovie}?api_key=${api_key}`,
    }),
  }),
});
export const { useGetMoviesQuery, useGetDetailQuery } = moviesApi;
