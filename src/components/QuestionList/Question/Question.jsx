import React from 'react';
import PropTypes from 'prop-types';
import QuestionType from './QuestionType';
import Predicate from './Predicate';
import Button from '../../presentational/Button';
import Input from '../../presentational/Input';
import './Question.css';

const prevent = (evt) => evt.preventDefault();

const Question = (props) => (
  <form onSubmit={prevent} className="Question">
    {
      props.question.isSubInput ?
        <Predicate
          type={props.question.predicate.condition}
          value={props.question.predicate.value}
          onValueChange={(evt) => props.questionActions.typeConditionValue(props.question.id, evt.target.value)}
          onTypeSelect={(evt) => props.questionActions.selectCondition(props.question.id, evt.target.value)}
        />
        : undefined
    }

    <Input
      type="text"
      label="Question"
      onChange={(evt) => props.questionActions.typeQuestion(props.question.id, evt.target.value)}
      value={props.question.label} />

    <QuestionType
      onChange={(evt) => props.questionActions.selectQuestionType(props.question.id, evt.target.value)}
      value={props.question.type}
    />

    <div className="Question__controls">
      <Button
        value="Add Sub-Input"
        onClick={() => props.questionActions.addSubQuestion(props.question.id)}
      />

      <Button
        value="Delete"
        onClick={() => props.questionActions.removeQuestion(props.question.id)}
      />
    </div>
  </form>
);

Question.propTypes = {
  question: PropTypes.object.isRequired,
  questionActions: PropTypes.object.isRequired
};

export default Question;
