export function NuevoMundo() {
  return <h2>Nuevo Mundo</h2>;
}

export function UserCard({ name, amount, married, points, address }) {
  console.log("");
  return (
    <div>
      <h1>{name}</h1>
      <h3>${amount}</h3>
      <h3>{married ? "Casado" : "Soltero"}</h3>
      <h3>{points[1]}</h3>
      <h3>
        {address.city} {address.street}
      </h3>
    </div>
  );
}
