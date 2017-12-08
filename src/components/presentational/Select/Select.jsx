import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

const Select = (props) => (
  <label className="IndioSelect" style={{ width: props.inline ? '75%' : 'unset' }}>
    <span style={{ 'marginRight': props.inline ? '0.375en' : '2.3em' }}>
      {props.label}
    </span>
    <select
      onChange={props.onChange}
      value={props.value}
      className={`IndioSelect__select ${props.className ? props.className : ''}`}
      style={props.style}>
      {props.children}
    </select>
  </label>
);

Select.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  value: PropTypes.string.isRequired
};

export default Select;
