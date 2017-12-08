import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import setupStore from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = setupStore();

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));

registerServiceWorker();
