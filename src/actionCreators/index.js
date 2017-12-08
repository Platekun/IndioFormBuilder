import * as actionTypes from '../actionTypes';

export const selectCondition = (id, condition) => ({
  type: actionTypes.SELECT_CONDITION,
  payload: { id, condition }
});

export const typeConditionValue = (id, input) => ({
  type: actionTypes.TYPE_CONDITION_VALUE,
  payload: { id, input }
});

export const typeQuestion = (id, input) => ({
  type: actionTypes.TYPE_QUESTION,
  payload: { id, input }
});

export const selectQuestionType = (id, questionType) => ({
  type: actionTypes.SELECT_QUESTION_TYPE,
  payload: { id, questionType }
});

export const addQuestion = (question) => ({
  type: actionTypes.ADD_QUESTION,
  payload: question
});

export const removeQuestion = (id) => ({
  type: actionTypes.REMOVE_QUESTION,
  payload: id
});

export const addSubQuestion = (id, match) => ({
  type: actionTypes.ADD_SUBQUESTION,
  payload: { id, match }
});
