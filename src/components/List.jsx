import React from "react";

function List({ movieList }) {
  return (
    <div>
      {movieList.map((item) => {
        return <li key={item.id}>{item.title}{item.name}</li>;
      })}
    </div>
  );
}

export default List;
