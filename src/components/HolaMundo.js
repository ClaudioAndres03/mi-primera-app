import React from "react";

//creando un componente
export default function HolaMundo() {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <h2>Mi APP</h2>
    </div>
  );
}

//exportar el componente una forma de hacerlo
// export default HolaMundo;

// un componente dentro de otro componente, lo normal es que cada componente tenga su propio fichero
export function AdiosMundo() {
  // nota el return solo devuelve una sola cosa, por ejemplo no puede devolver dos h1 si esta fuera del frame
  return (
    <>
      <h3>Adios</h3>
    </>
  );
}
