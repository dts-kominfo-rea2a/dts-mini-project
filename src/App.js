import "./App.css";
import "./pages/LoginPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";

import MainPage from "./pages/MainPage";
import ProtectedComponent from "./components/protectedComponent";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <Link to="/">
    //       <Typography variant="body1">LOGIN</Typography>
    //       </Link>
    //   </header>
    // </div>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route
              path="/"
              element={
                <ProtectedComponent>
                  <HomePage />
                </ProtectedComponent>
              }
            />
            <Route path="login2" element={<LoginPage />} />
            <Route path="register2" element={<RegisterPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
