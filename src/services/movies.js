import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api_key = "d4e79dafcbc97c2aeac1624837c5904c";
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),

  endpoints: (builder) => ({
    popular: builder.query({
      query: (page = 1) => `movie/popular?api_key=${api_key}&page=${page}`,
    }),
  }),
});
export const { usePopularQuery } = moviesApi;
