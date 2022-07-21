import "./App.css";
import Navbar from "./components/Navbar";
import ListMovies from "./containers/ListMovies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <ListMovies
          title="Now Playing Movies"
          TMDBurl="https://api.themoviedb.org/3/movie/now_playing?api_key=18594ab348cc3a56c1c45cc4ed2f35e0"
        />
        <ListMovies
          title="Popular Movies"
          TMDBurl="https://api.themoviedb.org/3/movie/popular?api_key=18594ab348cc3a56c1c45cc4ed2f35e0"
        />
        <ListMovies
          title="Top Rated Movies"
          TMDBurl="https://api.themoviedb.org/3/movie/top_rated?api_key=18594ab348cc3a56c1c45cc4ed2f35e0"
        />
      </section>
    </div>
  );
}

export default App;
