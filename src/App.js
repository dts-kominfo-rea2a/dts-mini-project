import "./App.css";
import { Routes, Route } from "react-router-dom";

// Partial Component
import Header from "./containers/Header";
import Navigation from "./containers/Navigation";
import Footer from "./containers/Footer";

// Container Component
import Home from "./containers/Home";
import MoviePage from "./containers/MoviePage";
import PopularMovie from "./containers/PopularMovie";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <main className="w-full  min-h-screen pt-2 pb-2 flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/popular" element={<PopularMovie />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
