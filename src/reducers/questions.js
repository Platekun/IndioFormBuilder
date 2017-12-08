import uuid from 'uuid';
import {
  SELECT_CONDITION,
  TYPE_CONDITION_VALUE,
  TYPE_QUESTION,
  SELECT_QUESTION_TYPE,
  ADD_QUESTION,
  REMOVE_QUESTION,
  ADD_SUBQUESTION
} from '../actionTypes';
import {
  updateQuestion,
  removeQuestion
} from './utils';

export const NAME = 'questions';

const defaultState = {
  questions: []
};

export default (prevState = defaultState, action) => {
  let newState;

  switch (action.type) {
    case SELECT_CONDITION:
      newState = {
        ...prevState,
        questions: updateQuestion(prevState.questions, action.payload.id, (question) => ({
          ...question,
          predicate: {
            ...question.predicate,
            condition: action.payload.condition
          }
        }))
      };
      break;
    case TYPE_CONDITION_VALUE:
      newState = {
        ...prevState,
        questions: updateQuestion(prevState.questions, action.payload.id, (question) => ({
          ...question,
          predicate: {
            ...question.predicate,
            value: action.payload.input
          }
        }))
      };
      break;
    case TYPE_QUESTION:
      newState = {
        ...prevState,
        questions: updateQuestion(prevState.questions, action.payload.id, (question) => ({
          ...question,
          label: action.payload.input
        }))
      };
      break;
    case SELECT_QUESTION_TYPE:
      newState = {
        ...prevState,
        questions: updateQuestion(prevState.questions, action.payload.id, (question) => ({
          ...question,
          type: action.payload.questionType
        }))
      };
      break;
    case ADD_QUESTION:
      newState = {
        ...prevState,
        questions: [
          ...prevState.questions,
          {
            id: uuid(),
            label: '',
            type: 'text',
            isSubInput: false,
            subInputs: []
          }
        ]
      };
      break;
    case REMOVE_QUESTION:
      newState = {
        ...prevState,
        questions: prevState.questions
          .map((question) => removeQuestion(question, action.payload))
          .filter((x) => !!x)
      };
      break;
    case ADD_SUBQUESTION:
      newState = {
        ...prevState,
        questions: updateQuestion(prevState.questions, action.payload.id, (question) => ({
          ...question,
          subInputs: [
            ...question.subInputs,
            {
              id: uuid(),
              label: '',
              type: 'text',
              isSubInput: true,
              subInputs: [],
              predicate: {
                condition: 'equals',
                value: ''
              }
            }
          ]
        }))
      };
      break;
    default:
      newState = prevState;
  }

  return newState;
};
