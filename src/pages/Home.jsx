import React, { useState, useEffect } from "react";
import List from "../components/List";
import axios from "axios";

const baseURL =
  "https://api.themoviedb.org/3/movie/popular?api_key=aaea8dcf53c572d15f8e305dfba3cefd";

function Home() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div className="">
      <List movieList={post.results} />
    </div>
  );
}

export default Home;
