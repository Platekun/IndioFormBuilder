import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NAME as questionsName } from '../../reducers/questions';
import ExportLayout from './ExportLayout';

const mapStateToProps = (state) => ({
  questions: state[questionsName].questions,
});

class Exportview extends Component {
  render() {
    return (
      <ExportLayout {...this.props} />
    );
  }
}

export default withRouter(connect(mapStateToProps, undefined)(Exportview));
