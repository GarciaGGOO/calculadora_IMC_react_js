import PropTypes from "prop-types";
import "./Button.css"

const Button = ({id, text, action}) => {
const handleAction = (e) => {
  action(e);
}

  return (
    <button id={id} onClick={handleAction}>{text}</button>
  )
}
Button.propTypes = {
    id: PropTypes.string.isRequired, //ptnr 
    text: PropTypes.string.isRequired, //ptsr 
    action: PropTypes.func.isRequired, //ptfr
  };

export default Button