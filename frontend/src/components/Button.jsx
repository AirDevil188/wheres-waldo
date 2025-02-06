import PropTypes from "prop-types";

const Button = ({ text, type, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
