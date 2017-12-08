import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Button from '../presentational/Button';
import './QuestionList.css';

const renderQuestions = (actions, question) => {
  if (question instanceof Array) {
    return question.map((question) => renderQuestions(actions, question));
  } else {
    if (question.subInputs.length) {
      return (
        <li key={question.id}>
          <Question questionActions={actions} question={question} />
          <ul>
            {question.subInputs.map((subQuestion) => renderQuestions(actions, subQuestion))}
          </ul>
        </li>
      );
    } else {
      return (
        <li key={question.id}>
          <Question questionActions={actions} question={question} />
        </li>
      );
    }
  }
};

/* eslint-disable */
const QuestionList = (props) => (
  <section className="QuestionList">
    <h2 hidden>Form Builder</h2>
    {
      props.questions.length ? (
        <ul>
          {renderQuestions(props.formActions, props.questions)}
        </ul>
      ) : undefined
    }
    <Button
      value="Add Input"
      onClick={() => props.formActions.addQuestion()}
    />
  </section>
);
/* eslint-enable */

QuestionList.propTypes = {
  formActions: PropTypes.object.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object)
};

export default QuestionList;
