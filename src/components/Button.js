import React from 'react';
import PropTypes from 'prop-types';

function Button({
  type, onClick, btnName, btnValue,
}) {
  return (
    <button type={type} onClick={onClick} className={btnName}>
      {btnValue}
    </button>
  );
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  btnValue: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
