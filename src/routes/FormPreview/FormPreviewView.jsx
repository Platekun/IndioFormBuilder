import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NAME as questionsName } from '../../reducers/questions';
import FormPreviewLayout from './FormPreviewLayout';

const mapStateToProps = (state) => ({
  questions: state[questionsName].questions,
});

class FormPreviewView extends Component {
  render() {
    return (
      <FormPreviewLayout {...this.props} />
    );
  }
}

export default withRouter(connect(mapStateToProps, undefined)(FormPreviewView));
