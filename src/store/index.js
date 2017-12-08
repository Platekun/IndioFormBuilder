import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import app from '../reducers';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};
const enchancer = [createLogger()];

export default () => createStore(
  app,
  persistedState,
  applyMiddleware(...enchancer)
);
