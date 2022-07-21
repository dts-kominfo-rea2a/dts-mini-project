import React from "react";
import { Card, CardMedia } from "@mui/material";

const urlDepanPosterPath = "https://image.tmdb.org/t/p/w200";

const CardMovie = ({ propsMovie }) => {
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          image={`${urlDepanPosterPath}${propsMovie.poster_path}`}
          sx={{ width: 150 }}
        ></CardMedia>
      </Card>
    </>
  );
};
export default CardMovie;
