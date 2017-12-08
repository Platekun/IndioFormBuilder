import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../presentational/Input';
import Select from '../../../presentational/Select';

const Predicate = (props) => (
  <div style={{display:'flex', 'justifyContent': 'space-between'}}>
    <Select label="Condition" onChange={props.onTypeSelect} value={props.type} style={{ margin: '0.5em 0' }} inline>
      <option value="greaterThan">Greater Than</option>
      <option value="equals">Equals</option>
      <option value="lowerThan">Lower Than</option>
    </Select>
    <Input value={props.value} onChange={props.onValueChange}/>
  </div>
);

Predicate.propTypes = {
  onTypeSelect: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string
};

export default Predicate;
