import React from 'react';
import PropTypes from 'prop-types';
import './PreviewRadio.css';

const PreviewRadio = (props) => (
  <div className="PreviewRadio">
    <h3>{props.label}</h3>
    <div className="PreviewRadio__controls">
      <label className="PreviewRadio__label">
        <input type="radio" name={props.name} value="yes" onChange={props.onChoose} checked={props.checked === 'yes'} /> <span>Yes</span>
      </label>
      <label className="PreviewRadio__label">
        <input type="radio" name={props.name} value="no" onChange={props.onChoose} checked={props.checked === 'no'} /> <span>No</span>
      </label>
    </div>
  </div>
);

PreviewRadio.propTypes = {
  checked: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChoose: PropTypes.func.isRequired
};

export default PreviewRadio;
