import PropTypes from  'prop-types';
const SubmitButton = ({ input}) => {
    return <button disabled={input.length < 2 }>Enviar</button>
};

SubmitButton.propTypes = {
    input: PropTypes.string.isRequired,
};
export default SubmitButton;