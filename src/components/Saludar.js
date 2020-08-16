import React from "react";

export default function Saludar(props) {
  //   const saludar = () => {
  //     console.log("Hola Claudio");
  //   };

  //   asignacion por destructing
  const { userInfo, saludarfn } = props;
  const { nombre } = userInfo;

  console.log(props);
  console.log(userInfo);
  return (
    <div>
      <button onClick={() => saludarfn(nombre)}>saludar</button>
    </div>
  );
}
