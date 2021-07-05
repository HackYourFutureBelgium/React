import React from 'react';
import '../index.css';
import Navigation from './Navigation'
import Page from './Page'
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
                <Page data={dataObject}/>
              </Route>
            ))
          }
        </Switch>
    </Router>
  </div>
  );

export default App;
