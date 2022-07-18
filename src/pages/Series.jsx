import React, { useState, useEffect } from "react";
import List from "../components/List";
import axios from "axios";

const baseURL =
  "https://api.themoviedb.org/3/tv/popular?api_key=aaea8dcf53c572d15f8e305dfba3cefd";

function Series() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  const data = post.results;
  // console.log(data)
  return (
    <div className="min-w-full">
<h1 className="text-1xl underline m-4">Series</h1>
        <List movieList={data}/>
    </div>
  );
}

export default Series;
