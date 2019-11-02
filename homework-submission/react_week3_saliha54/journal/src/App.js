import React from 'react';
import data from './data.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';
import './App.css';

import Home from './Home.jsx';
import Details from './Details.jsx';
import Create from './Create.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="elements">
          <Switch>
            <Route exact path="/">
              <Home data={data} />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route path="/:id">
              <Details data={data} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
