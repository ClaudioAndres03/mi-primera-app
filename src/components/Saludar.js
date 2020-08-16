import React from "react";

export default function Saludar(props) {
  //   const saludar = () => {
  //     console.log("Hola Claudio");
  //   };

  console.log(props);
  return (
    <div>
      <button onClick={() => props.saludarfn(props.userInfo.nombre)}>
        saludar
      </button>
    </div>
  );
}
