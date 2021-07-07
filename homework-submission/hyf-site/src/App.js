import React from '../node_modules/react';
import './App.css';
import Navigation from './Navigation';
import pageData from './Data';
import Page from './Page';

import { BrowserRouter as Router, Switch, Route } from '../node_modules/react-router-dom';
const App = () => (
  <div className="site">
    <Router>
      <Navigation pageData={pageData} />
      <Switch>
        {pageData.navigationData.map((dataObject, key) => (
          <Route exact path={dataObject.url} key={key}>
            <Page pageData={dataObject} />
          </Route>
        ))}
      </Switch>
    </Router>
  </div>
);

export default App;
