import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import MovieList from "./component/MovieList/MovieList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie" element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;
