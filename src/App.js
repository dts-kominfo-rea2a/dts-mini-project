import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./pages";
import { Footer } from "./components";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
