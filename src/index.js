import React from "react";
import ReactDOM from "react-dom/client";
import { NuevoMundo, UserCard } from "./NuevoMundo";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Saludos() {
  const name = "Andrés";

  return <h1>{name}</h1>;
}

root.render(
  <>
    <Saludos />
    <NuevoMundo></NuevoMundo>
    <UserCard></UserCard>
  </>
);
