import React from 'react';
import data from './data.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';
import './App.css';

import Home from './Home.jsx';
import Details from './Details.jsx';
import Create from './Create.jsx';
import ErrorPage from './ErrorPage.jsx';
import AuthConnect from './AuthConnect.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';

let error = {
  title: 'error 1',
  description: 'there was a problem',
};

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/error">
            <ErrorPage />
          </Route>
          <AuthConnect>
            <Route exact path="/">
              <Home data={data} />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route path="/:id">
              <Details data={data} />
            </Route>
          </AuthConnect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
