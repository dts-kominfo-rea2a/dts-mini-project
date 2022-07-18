import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Home, FilmDetail } from "./pages";
import { Footer } from "./components";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-film/:filmId" element={<FilmDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
