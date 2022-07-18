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
  
  return (
    <div className="min-h-full">
      <div className="shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Series</h1>
        </div>
      </div>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <List movieList={post.results} />
      </main>
    </div>
  );
}

export default Series;
