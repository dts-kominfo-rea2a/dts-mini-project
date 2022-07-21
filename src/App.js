import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import MovieList from "./pages/MovieList/MovieList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
