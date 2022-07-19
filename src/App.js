import logo from "./logo.svg";
import "./App.css";
import Home from "./containers/Home";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar isHomePage={true} />
      <Outlet />
    </div>
  );
}

export default App;
