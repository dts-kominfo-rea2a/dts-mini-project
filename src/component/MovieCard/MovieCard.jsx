import React from "react";
import { Box, Card, CardMedia, CardContent, Rating, Typography } from "@mui/material";
const urlImg = "https://image.tmdb.org/t/p/w200";

const MovieCard = ({ propsMovie }) => {
  return (
    <>
      <Card className="boxy">
        <Box>
          <Typography variant="h6">Component CardMovie</Typography>
        </Box>
        <Box className="boxy" sx={{ display: "flex", flexDirection: "row", alignItem: "center" }}>
          <CardMedia component="img" sx={{ width: 150 }} image={`${urlImg}${propsMovie.poster_path}`} alt="image poster"></CardMedia>
          <CardContent>
            <Typography variant="body1">{propsMovie.title}</Typography>
            <Rating value={propsMovie.vote_average} precision={0.1} readOnly max={10} />
            <Typography variant="body1">{propsMovie.overview}</Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default MovieCard;
