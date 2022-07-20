import List from "../components/List";
import Movies from "../data/Movies.js";
import React, { useState, useEffect } from "react";

function Popular() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    Movies.popular.then((response) => {
      setPost(response.results);
    });
  }, []);
  return <List movieList={post} title="Popular Movies" />;
}

export default Popular;
