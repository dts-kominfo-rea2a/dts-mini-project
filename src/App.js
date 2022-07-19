import "./App.css";
import React, { useEffect, useState } from "react";
import tmdbInstance from "./apis/tmdb";
import { Routes, Route } from "react-router-dom";

// Partial Component
import Header from "./containers/Header";
import Navigation from "./containers/Navigation";
import Footer from "./containers/Footer";

// Container Component
import Home from "./containers/Home";
import PopularMovies from "./containers/PopularMovies";
import SelectedMovie from "./containers/SelectedMovie";
import Missing from "./components/navigation/Missing";
import SignUpForm from "./containers/SignUpForm";
import LoginForm from "./containers/LoginForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchHandler = (query) => {
    setSearch(query);
  };
  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await tmdbInstance.get("/movie/popular");
        setMovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Header search={search} searchHandler={searchHandler} />
      <main className="w-full  min-h-screen pt-2 pb-2 flex justify-center">
        <Routes>
          <Route
            path="/"
            element={<Home moviesData={movies} search={search} />}
          />
          <Route path="/movie/:id" element={<SelectedMovie />} />
          <Route
            path="/popular"
            element={<PopularMovies moviesData={movies} search={search} />}
          />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
