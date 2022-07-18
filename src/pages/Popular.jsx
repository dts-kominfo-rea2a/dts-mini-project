import List from "../components/List";
import Movies from "../data/Movies.js";

function Popular() {
  console.log(Movies)
  const data = Movies.popular.results;

  return (
    <div className="flex flex-col m-20">
      <h1 className="text-1xl underline m-4">Popular Movies</h1>
      {/* <div className="flex flex-row justify-center items-center text-center">
      </div> */}
        <List movieList={data}/>
    </div>
  );
}

export default Popular;
