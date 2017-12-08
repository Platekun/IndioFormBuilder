import React from 'react';
import PropTypes from 'prop-types';
import './PreviewInput.css';

const PreviewInput = (props) => (
  <label className="PreviewInput">
    <span className="PreviewInput__title">
      {props.label}
    </span>
    <input type={props.type} value={props.value} onChange={props.onChange} className="PreviewInput__input"/>
  </label>
);

PreviewInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default PreviewInput;
