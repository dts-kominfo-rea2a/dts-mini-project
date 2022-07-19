import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api_key = "d4e79dafcbc97c2aeac1624837c5904c";
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  // ini adalah base Query yang akan dibuat
  // Anggap saja ini adalah cara kita untuk mendefiniskan Base URL dari API yang ingin kita gunakan

  // kita akan menggunakan fetchBaseQuery di sini
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),

  endpoints: (builder) => ({
    popular: builder.query({
      // di sini kita definisikan querynya mau seperti apa
      // Berupa fungsi yah yang mengembalikan string apa yang ditempelkan ke baseUrl

      // ini artinya baseUrl + /colors => https://reqres.in/api/colors
      query: (page = 1) => `movie/popular?api_key=${api_key}&page=${page}`,
    }),
  }),
});
export const { usePopularQuery } = moviesApi;
