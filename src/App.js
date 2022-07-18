import React from "react";
import NavBar from "./components/Navbar";
import HomePage from "./containers/Home";
import ListMovies from "./containers/ListMovies";


function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
        <section style={{ paddingLeft: 16, paddingRight: 16 }}>
          <ListMovies />
        </section>            
    </div>
  );
}

export default App;
