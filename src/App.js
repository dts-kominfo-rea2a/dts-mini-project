import Main from "./pages/Main.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
