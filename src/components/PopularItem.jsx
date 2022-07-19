import { Box, Typography } from "@mui/material";
import React from "react";
import { imageUrl } from "../services/Movies/TMDBMoviesAPI";

const PopularItem = ({ popular }) => {
  return (
    <Box
      display={"flex"}
      sx={{
        gap: "20px",
        margin: "10px 30vw",
        bgcolor: "white",
        p: "10px",
        borderRadius: 3,
      }}
    >
      <img
        width={"200px"}
        src={imageUrl + popular.poster_path}
        alt={popular.original_title}
      />
      <Box>
        <Typography variant="h5">{popular.original_title}</Typography>
        <Typography variant="body1">{popular.release_date}</Typography>
        <Typography variant="body2">{popular.overview}</Typography>
      </Box>
    </Box>
  );
};

export default PopularItem;
