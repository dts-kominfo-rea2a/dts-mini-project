import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdb from "../apis/tmdb";
import Footer from "../components/Footer"
import NavBar from "../components/NavBar";
import ListMovies from "./ListMovies";
import FilmDetail from "./FilmDetail";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseFromTMDB = await tmdb.get("/movie/popular");
        setMovies(responseFromTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataMovies();
  }, [params]);

  return (
    <>
      <NavBar />
      <ListMovies movies={movies} />
      {/* <FilmDetail movies={movies} /> */}
      <Footer />
    </>
  );
};

export default Home;
