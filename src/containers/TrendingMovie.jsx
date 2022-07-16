import React, { useEffect, useState } from "react";
//import { Box, Typography, Skeleton } from "@mui/material";
import axios from "axios";
import CardMovie from "../components/CardMovie";
import Row from "react-bootstrap/esm/Row";
import LinearProgress from "@mui/material/LinearProgress";

const TrendingMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataMovie = async () => {
      try {
        const respMovie = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
        );

        setLoading(false);
        setMovies(respMovie.data.results);
      } catch (err) {
        console.log("Error ", err);
      }
    };

    fetchDataMovie();
  }, []);

  return (
    <>
      <section>
        <Row>
          {loading ? (
            <LinearProgress />
          ) : (
            movies.slice(0, 4).map((movie) => {
              return <CardMovie key={movie.id} data={movie} />;
            })
          )}
        </Row>
      </section>
    </>
  );
};

export default TrendingMovie;
