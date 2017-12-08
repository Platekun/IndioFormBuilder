import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = (props) => (
  <label className="IndioInput">
    <span>{props.label}</span>
    <input
      className={`IndioInput__input ${props.className ? props.className : ''}`}
      onChange={props.onChange}
      type={props.type}
      value={props.value}
      name={props.name}
    />
  </label>
);

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired
};

export default Input;
