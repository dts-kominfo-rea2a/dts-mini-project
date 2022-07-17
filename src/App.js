import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import Navigation from "./containers/Navigation";
import Home from "./containers/Home";
import Footer from "./containers/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <main className="w-full min-h-full pt-2 pb-2 flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
