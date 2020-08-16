import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  //variables
  const nombre = "Agustin";
  const edad = "35";

  // objecto
  const usuario = {
    nombre: "Elena",
    edad: "15",
    color: "Azul",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Saludar userInfo={usuario} />
      </header>
    </div>
  );
}

export default App;
