import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProtectedComponent from "./components/ProtectedComponent";
import { ThemeProvider } from "@mui/material";
import themes from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={themes}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedComponent>
              <App />
            </ProtectedComponent>
          }
        ></Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
