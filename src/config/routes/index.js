import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "../../pages/home";
import Login from "../../pages/login";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
