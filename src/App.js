// import logo from './logo.svg';
// import './App.css';
import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/HomePage";
import Footer from "./Components/Footer";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div className="App" style={{display:"flex", flexDirection: 'column', }}>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}


export default App;




