import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import About from './body/About';
import Teach from './body/Teach';
import Apply from './body/Apply';
import data from './data';

const Body = () => (
  <Router>
    <div className="site">
      <Navigation data={data.navigation} />
      <Switch>
        <Route exact path="/" >
          <About data={data.pages.about} />
        </Route>
        <Route exact path="/teach" >
          <Teach data={data.pages.teach} />
        </Route>
        <Route exact path="/apply" >
          <Apply data={data.pages.apply} />
        </Route>
      </Switch >
    </div >
  </Router >
);

export default Body;
