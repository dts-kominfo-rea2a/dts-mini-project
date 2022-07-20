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
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                p: 5,
              }}
            >
              {data.results.map((popular) => (
                <PopularItem key={popular.id} popular={popular}></PopularItem>
              ))}
            </Box>
          </div>
        </>
      )}
    </Box>
  );
};

export default PopularList;
