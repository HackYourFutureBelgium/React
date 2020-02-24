import React from 'react';
import Navigation from './Navigation';
import Page from './Page';
import data from './data';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";

const App = () => (
  <div className="site"> 
  <Router>
  <Navigation data={data}/>
    <Switch>
        {
           data.map((dataObject, key) => (
            <Route exact key = {key} path = {dataObject.url}>
            <Page data={dataObject} />
            </Route>
          ))
        }
      </Switch>
      </Router> 
  </div>
);

export default App;
