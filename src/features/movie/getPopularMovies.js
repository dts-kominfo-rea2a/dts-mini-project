import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "1415dc66b6ef1d7172388a426b3b7a65";

const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

export const getPopularMovies = createAsyncThunk("movies/getData", async () => {
  const response = await axios.get(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );
  return response.data.results;
});

const popularMoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.movies = state.movies.concat(action.payload);
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const selectAllPopularMovies = (state) => state.movies.movies;
export const selectAllPopularMoviesStatus = (state) => state.movies.status;
export const selectAllPopularMoviesError = (state) => state.movies.error;

export default popularMoviesSlice.reducer;
