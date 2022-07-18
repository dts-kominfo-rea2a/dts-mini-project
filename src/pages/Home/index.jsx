import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";

import { ListFilm } from "../../components";

import "./Home.css";

const Home = () => {
  const basePath = "https://api.themoviedb.org/3/";
  const apiKey = "1cabb7d2645dbac2b690ffd7ec0a4a23";

  const [popularMovies, setPopularMovies] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const [tvTopRated, setTvTopRated] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularMoviesResult = await axios.get(
        `${basePath}movie/popular?api_key=${apiKey}`
      );
      setPopularMovies(popularMoviesResult.data.results);

      const upcomingResult = await axios.get(
        `${basePath}movie/upcoming?api_key=${apiKey}&language=id-ID`
      );
      setUpcoming(upcomingResult.data.results);

      const topRatedResult = await axios.get(
        `${basePath}movie/top_rated?api_key=${apiKey}`
      );
      setTopRated(topRatedResult.data.results);

      const TvTopRatedResult = await axios.get(
        `${basePath}tv/top_rated?api_key=${apiKey}`
      );
      setTvTopRated(TvTopRatedResult.data.results);
    };

    fetchData();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <div className="home__list_film">
          <ListFilm title="Popular" movies={popularMovies} />
          <ListFilm title="Now Playing" movies={upcoming} />
          <ListFilm title="Tv Top Rated" movies={tvTopRated} tv="true" />
          <ListFilm title="Top Rated" movies={topRated} />
        </div>
      </Container>
    </>
  );
};

export default Home;
