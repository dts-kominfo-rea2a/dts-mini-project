import { Box, Typography } from "@mui/material";
import React from "react";
import { imageUrl } from "../services/Movies/TMDBMoviesAPI";
import StarRateIcon from "@mui/icons-material/StarRate";

const PopularItem = ({ popular }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "background.paper",
        maxWidth: 200,
        m: 2,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        sx={{
          width: 200,
          maxWidth: { xs: 100, md: 200 },
        }}
        src={imageUrl + popular.poster_path}
        alt={popular.original_title}
      />
      <Box sx={{ p: "5px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <StarRateIcon />
          {popular.vote_average}
        </Box>
      </Box>
    </Box>
  );
};

export default PopularItem;
