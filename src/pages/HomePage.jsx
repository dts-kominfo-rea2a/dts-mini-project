import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import styles from "./HomePage.module.css";
import axios from "axios";
import CardMovie from "../components/CardMovie";

const HomePage = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = async (page) => {
    setLoading(true);
    await axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=8f74fb42fe9f1fcf7d474f5c3456b096&language=en-US&page=${page}`)
      .then((response) => {
        const { results } = response.data;
        console.log(results);
        if (results) {
          setDatas(results);
          setPage(2);
        }
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
      <Box className={styles.container}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {datas.map((data, key) => (
            <Grid item xs={2} sm={4} md={4} key={key}>
              <CardMovie key={data.id} data={data} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
