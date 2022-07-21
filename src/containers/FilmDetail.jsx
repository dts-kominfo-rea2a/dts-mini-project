import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { async } from "@firebase/util";

const FilmDetail = ({ movies }) => {
  let params = useParams();
  // const [selectedMovie, setSelectedMovie] = useState();

  // const response = async (movieTitle) => {
  //   return await movies.filter((movie) => {
  //     return movie.id === movieTitle;
  //   });
  // };

  // const response = movies.then((element) => {
  //   return element.filter((movie) => params.movieId === movie.id);
  // });

  return (
    <Box>
      {/* <Typography variant="h5">Movie Detail Page</Typography> */}
      <Typography>{`Movie Id : ${params.movieId}`}</Typography>
      {/* <Typography>{response("Lightyear")}</Typography> */}
    </Box>
  );
};

export default FilmDetail;
