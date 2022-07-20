import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import Popular from "../pages/Popular.jsx";
import Series from "../pages/Series.jsx";
import Genres from "../pages/Genres.jsx";
import MyList from "../pages/MyList.jsx";
import Detail from "../pages/Detail.jsx";
import Footer from "../components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
// , useParams

const Main = () => {
  // const {movieId} = useParams();
  // console.log(movieId)
  return (
    <div className="bg-neutral-900 text-white max-h-fit">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Genres" element={<Genres />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path={"/detail"} element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
