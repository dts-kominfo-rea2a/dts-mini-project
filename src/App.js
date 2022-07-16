import Navigasi from "./components/Navigasi";
import Container from "react-bootstrap/esm/Container";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigasi />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
