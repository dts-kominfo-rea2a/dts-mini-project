import React from "react";
import CardMovie from "../components/CardMovie";
import { Typography, Box } from "@mui/material";

const ListMovies = ({ movies }) => {
  return (
    <>
      <Typography variant="h5" component={"div"}>
        Popular Movies from TMDB API
      </Typography>
      <Box
        className="boxy"
        sx={{
          m: 2,
          display: "flex",
          flexDirection: "row",
          gap: 2,
          flexWrap: "wrap",
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

export default ListMovies;
