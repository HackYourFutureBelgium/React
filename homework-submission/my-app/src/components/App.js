import React from 'react';
import '../css/app.css';
import Navigation from './Navigation'
import Body from './Body'
import data from '../data';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => (
  <div className='site'>
    <Router>
      <Navigation data={data} />
      <Switch>
        {
          data.map((dataObject, key) => (
            <Route exact path={dataObject.url} key={key}>
              <Body data={dataObject} />
            </Route>
          ))
        }
      </Switch>
    </Router>
  </div>
);

export default App;
