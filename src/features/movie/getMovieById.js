import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "1415dc66b6ef1d7172388a426b3b7a65";

const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

export const getMovieBy