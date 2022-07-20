import React, { useState, useEffect } from "react";
import List from "../components/List";
import Movies from "../data/Movies.js";

function Series() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    Movies.series.then((response) => {
      setPost(response.results);
    });
  }, []);

  if (!post) return null;

  return <List movieList={post} title="Series" />;
}

export default Series;
