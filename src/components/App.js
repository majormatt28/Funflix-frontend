import React from "react";
import NavBar from "./NavBar";
import MovieContainer from "./MovieContainer";
import FunFlixHeader from "./FunFlixHeader"



function App() {
  
  return (
    <div className="App">
      <FunFlixHeader />
      <NavBar />
      <MovieContainer />
    </div>
  );
}

export default App;
