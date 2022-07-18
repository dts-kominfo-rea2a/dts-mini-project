import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import Series from "../pages/Series.jsx";
import Popular from "../pages/Popular.jsx";
import MyList from "../pages/MyList.jsx";
import Footer from "../components/Footer.jsx";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-neutral-900 text-white max-h-fit">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Series" element={<Series />} />
          <Route path="/Popular" element={<Popular />} />
          <Route path="/mylist" element={<MyList />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default Main;
