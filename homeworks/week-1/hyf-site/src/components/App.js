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

const App = () =>
  (
    <div className='site'>
      {console.log(data)}
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
      {
        /*
      1. page Component
      2. repeating : Block Component
      3. separate the data from the component
      */
      }
    </div>
  );


export default App;
