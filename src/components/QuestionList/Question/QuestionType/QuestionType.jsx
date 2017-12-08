import React from 'react';
import PropTypes from 'prop-types';
import Select from '../../../presentational/Select';

const QuestionType = (props) => (
  <Select label="Type" onChange={props.onChange} value={props.value} style={{margin: '0.5em 0'}}>
    <option value="text">Text</option>
    <option value="number">Number</option>
    <option value="yes/no">Yes/No</option>
  </Select>
);

QuestionType.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default QuestionType;
