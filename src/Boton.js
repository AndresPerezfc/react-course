import PropTypes from "prop-types";

export function Boton({ text = "Texto boton", name = "user" }) {
  console.log("hola");
  if (!text) {
    console.error("el texto es requerido");
  }

  return (
    <button>
      {text} - {name}
    </button>
  );
}

Boton.propTypes = {
  text: PropTypes.string.isRequired,
};

Boton.defaultProps = {
  name: "Algún usuario",
};
