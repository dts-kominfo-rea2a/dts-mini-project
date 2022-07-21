import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "./ListMovies.css";
import CardMovie from "../components/CardMovie";

import axios from "axios";

const ListMovies = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const response = await axios.get(props.TMDBurl);
        setMovies(response.data.results);
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchDataMovies();
  });

  return (
    <Box className="boxy">
      <Typography className="movie-group-title" variant="h5">
        {props.title}
      </Typography>
      <div className="list-movie">
        {movies.slice(8).map((movie) => {
          return (
            <CardMovie
              className="card-movie"
              key={movie.id}
              propsMovie={movie}
            />
          );
        })}
      </div>
    </Box>
  );
};

export default ListMovies;
