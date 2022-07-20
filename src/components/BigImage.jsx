import React, { useState, useEffect } from "react";
import Movies from "../data/Movies.js";
import { Carousel } from "react-carousel-minimal";

function BigImage() {
  const [post, setPost] = useState([]);
  const img = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    Movies.popular.then((response) => {
      setPost(response.results);
    });
  }, []);

  const images = post.map((item) => [item.backdrop_path]);
  const title = post.map((item) => [item.title]);

  const data = [
    {
      image: `${img}${images[1]}`,
      caption: title[1],
    },
    {
      image: `${img}${images[3]}`,
      caption: title[3],
    },
    {
      image: `${img}${images[2]}`,
      caption: title[2],
    },
  ];

  const captionStyle = {
    fontSize: "2em",
  };

  return (
    <div className="bg-neutral-900">
      <Carousel
        slideBackgroundColor="black"
        data={data}
        width="100%"
        height="720px"
        captionStyle={captionStyle}
        radius="4px"
        captionPosition="bottom"
        dots={true}
        style={{
          textAlign: "center",
          maxWidth: "100%",
          maxHeight: "30%",
        }}
      />
    </div>
  );
}

export default BigImage;
