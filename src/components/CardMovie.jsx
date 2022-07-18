import React from "react";
import { Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material";

export default function CardMovie({ movie }) {
  //link awal movie image
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";

  return (
    <Card sx={{ minWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={`${baseUrlForMovie}${movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {movie.title}
          </Typography>
          {/* <Typography variant="body2">{movie.overview}</Typography> */}
          <Typography>{movie.release_date.slice(0, 4)}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
