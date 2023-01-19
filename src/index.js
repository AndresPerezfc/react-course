import React from "react";
import ReactDOM from "react-dom/client";
import { NuevoMundo, UserCard } from "./NuevoMundo";
import { Boton } from "./Boton";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Post";
const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    image: "https://robohash.org/user",
    name: "andres",
  },
  {
    id: 2,
    image: "https://robohash.org/user2",
    name: "Felipe",
  },
  {
    id: 3,
    image: "https://robohash.org/user3",
    name: "Pérez",
  },
  {
    id: 4,
    image: "https://robohash.org/user4",
    name: "Campo",
  },
];

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
    <Boton
      text="Texto añadido para solucionar el error
    "
    />

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

    <Saludar />

    <Posts></Posts>

    {users.map((user, index) => {
      //return

      return (
        <div key={index}>
          <h1>{user.name + " " + (index + 1)}</h1>;
          <img src={user.image} />
        </div>
      );
    })}
  </>
);
