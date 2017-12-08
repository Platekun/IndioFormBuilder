import { combineReducers } from 'redux';
import question, { NAME as questionName } from './questions';

const app = combineReducers({
  [questionName]: question
});

export default app;
