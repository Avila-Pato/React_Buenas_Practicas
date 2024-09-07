import PropTypes from "prop-types"; // Importar PropTypes

const InputField = ({ input, setInput }) => {
  return (
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

// Validación de tipos de props
InputField.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired
};

export default InputField;
