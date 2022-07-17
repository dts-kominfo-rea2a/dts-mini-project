import logo from './logo.svg';
import './App.css';
import  {BrowserRouter, Router, Routes, Navigate, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Registrasi from './Components/Registrasi';
import Error from './Components/Error';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrasi" element={<Registrasi />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
