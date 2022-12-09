import React from "react";
import ReactDOM from "react-dom/client";
import { NuevoMundo, UserCard } from "./NuevoMundo";
import { Boton } from "./Boton";
import { TaskCard } from "./Task";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Saludos({ title, name = "user" }) {
  //const name = "Andrés";
  console.log("");

  return (
    <h1>
      {title} {name}
    </h1>
  );
}

root.render(
  <>
    <Boton text="Click me" />
    <Boton text="Pay me" />
    <Boton />

    <Saludos title="Hola React" />
    <NuevoMundo></NuevoMundo>
    <UserCard
      name="Andres Perez"
      amount={120000}
      married={true}
      points={[99, 33, 22]}
      address={{ street: "123 Main Street", city: "New York" }}
    ></UserCard>

    <TaskCard ready={true}></TaskCard>
  </>
);
