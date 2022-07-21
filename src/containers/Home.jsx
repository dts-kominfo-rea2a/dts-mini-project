import React, { useEffect , useState} from "react";
import { Box, Card, Typography } from "@mui/material";
import styles from "./HomePage.module.css";
import Movie from "./Movie";

const HomePage = () => {

  const [mostView, setmostView] = useState([]);

    const url ="https://api.themoviedb.org/3/movie/popular?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1";
  
    useEffect(() => {
      fetchPopular();
    },
    []);

  const fetchPopular = async () => {
      const data = await fetch(url);
      const movies = await data.json();
      setmostView(movies.results)
    };

  return (
    <>
      <Box className={styles.container}>
        <Typography variant="body1"><h1>Home Page</h1></Typography>
        <h1>Movies</h1>
        <div className={styles.moviePage}>
          {mostView.map((props) => {
            return <Movie key={props.id} movie={props}/>;
          })}
        </div>
      </Box>
    </>
  );
};

export default HomePage;
