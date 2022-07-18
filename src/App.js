import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import Login from "./containers/Login";

function App() {
  return (
    <div className="App">
      <Home />
      <Login />
    </div>
  );
}

export default App;
