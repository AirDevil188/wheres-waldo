import PropTypes from "prop-types";

const Button = ({ text, type, onClick, id, value, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      value={value}
      id={id}
      className={className}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
