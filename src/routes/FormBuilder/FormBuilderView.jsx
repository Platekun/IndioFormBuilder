import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  selectCondition,
  typeConditionValue,
  typeQuestion,
  selectQuestionType,
  addQuestion,
  removeQuestion,
  addSubQuestion
} from '../../actionCreators';
import { NAME as questionsName } from '../../reducers/questions';
import FormBuilderLayout from './FormBuilderLayout';

const mapStateToProps = (state) => ({
  [questionsName]: state[questionsName],
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    selectCondition,
    typeConditionValue,
    typeQuestion,
    selectQuestionType,
    addQuestion,
    removeQuestion,
    addSubQuestion
  }, dispatch)
});

class FormBuilderView extends Component {
  render() {
    return (
      <FormBuilderLayout {...this.props} />
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormBuilderView));
