import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navigation from './Navigation';
import Page from './Page';
import data from '../data';

const App = () => (
  <div className="site">
    <Router>
      <Navigation data={data} />
      <Switch>
        {data.map((dataObject, key) => (
          <Route exact key={key} path={dataObject.url}>
            <Page data={dataObject} />
          </Route>
        ))}
      </Switch>
    </Router>
  </div>
);

export default App;
