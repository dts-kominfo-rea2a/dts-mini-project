import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./containers/Home";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import FilmDetail from "./containers/FilmDetail";
import LoginOrRegisterForm from "./components/LoginOrRegisterForm";

function App() {
  //ubah title website
  useEffect(() => {
    document.title = "Movies Web App";
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="detail/:movieId" element={<FilmDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
