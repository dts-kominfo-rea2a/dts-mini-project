import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./MovieList.module.css";
import MovieCard from "../../component/MovieCard/MovieCard";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=f2026a1ebf4585e85922daa07771d8bc");
        setMovies(response.data.results);
      } catch (err) {
        console.log("Error nih", err);
      }
    };
    fetchDataMovies();
  }, []);

  return (
    <Box className="boxy">
      <Typography variant="h5">Container for ListMovies</Typography>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} propsMovie={movie} />;
      })}
    </Box>
  );
};

export default MovieList;
