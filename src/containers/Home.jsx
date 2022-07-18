import React, { useEffect, useState } from "react";
import tmdb from "../apis/tmdb";

import { Box, Typography } from "@mui/material";
import CardMovie from "../components/CardMovie";
import NavBar from "../components/NavBar";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseFromTMDB = await tmdb.get("/movie/popular");
        setMovies(responseFromTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataMovies();
  }, []);

  return (
    <>
      <NavBar />
      <Typography variant="h5" component="div">
        Popular Movies from TMDB
      </Typography>
      <Box
        className="boxy"
        sx={{
          // border: "1px dashed gray",
          m: 2,
          display: "flex",
          flexDirection: "row",
          gap: 2,
          // flexWrap: "wrap",
        }}
      >
        {/* buat list moviesnya di sini */}
        {movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })}
      </Box>
    </>
  );
};

export default Home;
