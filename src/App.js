import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Saludar name="Jose Perez" edad="22" />
        <Saludar name="Ricardo Lopez" edad="15" />
      </header>
    </div>
  );
}

export default App;
