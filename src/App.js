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
    // nombre: "Elena",
    edad: "15",
    color: "Azul",
  };

  const saludarfn = (nombre, edad) => {
    console.log("Hola " + nombre + ", tiene " + edad + " años ");

    //template string
    console.log(`Hola ${nombre}, tiene ${edad} años`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Saludar userInfo={usuario} saludarfn={saludarfn} />
      </header>
    </div>
  );
}

export default App;
