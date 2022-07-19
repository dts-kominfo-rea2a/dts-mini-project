import { Typography, Box } from "@mui/material";
import React from "react";
import PopularItem from "./PopularItem";
import { usePopularsQuery } from "../services/Movies/TMDBMoviesAPI";
const PopularList = () => {
  const { data, error, isLoading } = usePopularsQuery();

  return (
    <Box>
      {error ? (
        <>Ada error</>
      ) : isLoading ? (
        <>lagi loading..</>
      ) : (
        <>
          <Typography variant="h3" color={"white"}>
            Popular Movies
          </Typography>
          {data.results.map((popular) => (
            <PopularItem key={popular.id} popular={popular}></PopularItem>
          ))}
        </>
      )}
    </Box>
  );
};

export default PopularList;
