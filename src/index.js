import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import ProtectedComponent from "./Validation/ProtectedComponent";
import ProtectedComponentSignUp from "./Validation/ProtectedComponen2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={ <App />}  />
        <Route path="login" element={
        <ProtectedComponent>
        <LoginPage />
        </ProtectedComponent>
        } />
        <Route path="signup" element={
           <ProtectedComponentSignUp>
        <SignUpPage />
        </ProtectedComponentSignUp>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
