import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CoverPage from './pages/CoverPage';
import HomePage from './pages/HomePage';
import Routers from './pages/Routers';
import Profile from './pages/Profile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          {/* redirect */}
          <Route path="/" element={<Navigate to="/mini-project-movie" />} />
          {/* splash page element */}
          <Route path="/mini-project-movie" element={<CoverPage />} />
          {/* main router */}
          <Route path="/project-movies/*" element={<Routers />} />
          {/* home page element */}
          <Route path="/mini-project-movie/home" element={<HomePage />} />
          {/* profile */}
          <Route path="/mini-project-movie/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
