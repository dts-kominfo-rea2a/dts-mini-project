import React, { useEffect } from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import axios from "axios";
import UpComingMovie from "../containers/UpComingMovie";
import TrendingMovie from "../containers/TrendingMovie";

const Home = () => {
  return (
    <>
      <Box sx={{ mt: 2, mb: 2, p: 2, border: "1px dashed grey" }}>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          🎆Welcome to Movie-in
        </Typography>
      </Box>

      {/* Upcoming */}
      <Box sx={{ mt: 2, mb: 1, p: 2, border: "1px dashed grey" }}>
        <Typography variant="body1" sx={{ color: "#fff", mb: 3 }}>
          🍿 UPCOMING
        </Typography>

        <UpComingMovie />
      </Box>

      <Box sx={{ mt: 2, mb: 1, p: 2, border: "1px dashed grey" }}>
        <Typography variant="body1" sx={{ color: "#fff", mb: 3 }}>
          🔥 TRENDING
        </Typography>

        <TrendingMovie />
      </Box>
    </>
  );
};

export default Home;
