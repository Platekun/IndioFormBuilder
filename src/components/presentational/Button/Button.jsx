import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => (
  <button type="button" className={`IndioButton ${props.className ? props.className : ''}`} onClick={props.onClick}>
    {props.value}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
