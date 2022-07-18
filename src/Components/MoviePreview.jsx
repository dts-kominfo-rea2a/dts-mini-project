import React from "react";

export default function VideoPreview() {
  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/bC6rC8OpKR4"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="YouTube video player"
        width="853"
        height="480"
      />{" "}
    </div>
  );
}
