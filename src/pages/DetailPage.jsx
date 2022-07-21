import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import styles from "./HomePage.module.css";

const DetailPage = () => {
  const [detailMovie, setDetailMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { movie_id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    await axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=8f74fb42fe9f1fcf7d474f5c3456b096&language=en-US`)
      .then((response) => {
        const { data } = response;
        setDetailMovie(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <Box className={styles.container} style={{ display: "flex", gap: 5 }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" width="300" image={detailMovie.poster_path ? `https://image.tmdb.org/t/p/w500${detailMovie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={detailMovie.title} />
          </CardActionArea>
        </Card>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography gutterBottom variant="h5" component="div">
            {detailMovie.title}
          </Typography>
          <Typography gutterBottom variant="body" component="div">
            Release date: {detailMovie.release_date}
          </Typography>
          <Typography gutterBottom variant="body" component="div">
            {detailMovie.overview}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default DetailPage;
