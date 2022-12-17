import PropTypes from 'prop-types';


const Button = ({text, clickHandler}) => {
  return (
    <button type="button" onClick={clickHandler}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
}

export default Button;