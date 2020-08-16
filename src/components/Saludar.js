import React from "react";

export default function Saludar(props) {
  console.log(props.userInfo.nombre);
  console.log(props.userInfo.edad);
  console.log(props.userInfo.color);
  return (
    <div>
      <p>
        Hola {props.userInfo.nombre}, tiene {props.userInfo.edad}, color
        favorito {props.userInfo.color}
      </p>
    </div>
  );
}
