import MovieCarousel from "../components/Movie/MovieCarousel";
import MoviePopular from "../components/Movie/MoviePopular";
import MovieOriginal from "../components/Movie/MovieOriginal";
import MovieTop from "../components/Movie/MovieTopTen";
const Home = () => {
    return (
      <div className="flex flex-col gap-y-10">
        <MovieCarousel/>
        <MoviePopular/>
        <MovieOriginal/>
        <MovieTop/>
      </div>
    );
  };
  export default Home;