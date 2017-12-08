import React from 'react';
import { Switch, Router, Route, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './components/Header';
import FormBuilder from './routes/FormBuilder';
import FormPreview from './routes/FormPreview';
import Export from './routes/Export';
import './index.css';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <div>
      <Header/>
      <Switch>
        <Route path="/create" component={FormBuilder} />
        <Route path="/preview" component={FormPreview} />
        <Route path="/export" component={Export} />
        <Route render={() => <Redirect to="/create" />} />
      </Switch>
    </div>
  </Router>
);

export default App;
