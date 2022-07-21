import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material";

export default function CardMovie({ movie }) {
  //link awal movie image
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
  const navigate = useNavigate();
  const [selectedMovieId, setSelectedMovieId] = useState();

  //onCLick handler untuk CardMovie
  const CardOnCLickHandler = (event, selected) => {
    event.preventDefault();
    setSelectedMovieId(selected);
    console.log(selected);
    navigate(`detail/${selected}`);
  };

  return (
    <Card sx={{ width: 250 }}>
      <CardActionArea onClick={(event) => CardOnCLickHandler(event, movie.id)}>
        <CardMedia
          component="img"
          height="250"
          image={`${baseUrlForMovie}${movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {movie.title}
          </Typography>
          {/* <Typography variant="body2">{movie.overview}</Typography> */}
          <Typography>{`Year: ${movie.release_date.slice(0, 4)}`}</Typography>
          <Typography>{`Rating: ${movie.vote_average}`}</Typography>
          {/* <Typography>{`Movie.id: ${movie.id}`}</Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
