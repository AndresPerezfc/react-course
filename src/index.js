import React from "react";
import ReactDOM from "react-dom/client";
import { NuevoMundo, UserCard } from "./NuevoMundo";
import { Boton } from "./Boton";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Post";

import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

let counter = 10;

function Counter() {
  const [counter, setCounter] = useState(0);

  const [mensaje, setMensaje] = useState("");
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 10);
        }}
      >
        Sumar
      </button>

      <button
        onClick={() => {
          setCounter(counter - 10);
        }}
      >
        Restar
      </button>

      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reiniciar
      </button>
      <br />
      <br />
      <input onChange={(e) => setMensaje(e.target.value)}></input>
      <button
        onClick={() => {
          alert("El mensaje es: " + mensaje);
        }}
      >
        Guardar
      </button>
    </div>
  );
}

root.render(
  <>
    <Counter></Counter>
  </>
);
