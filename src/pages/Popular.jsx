import List from "../components/List";
import Movies from "../data/Movies.js";

function Popular() {
  const data = Movies.popular.results;

  return (
    <div className="min-w-full">
      <h1 className="text-1xl underline m-4">Popular Movies</h1>
        <List movieList={data}/>
    </div>
  );
}

export default Popular;
