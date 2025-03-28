import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ text, type, onClick, id, value, className, name }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      value={value}
      id={id}
      className={className}
      name={name}
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
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
