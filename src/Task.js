import "./task.css";

export function TaskCard({ ready }) {
  const stylesp = { background: "red" };

  return (
    <div style={{ background: "#e3e3e3" }}>
      <h1 style={{ color: "#232323" }}>Mi primera tarea</h1>

      <span>{ready ? "Tarea Realizada" : "Tarea pendiente"}</span>

      {ready ? (
        <p className="realizado">Tarea Realizadas</p>
      ) : (
        <p className="pendiente">Tarea Pendiente</p>
      )}
    </div>
  );
}
