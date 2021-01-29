import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateComponent from './components/CreateComponent';
import DetailComponent from './components/DetailComponent';
import ListComponent from './components/ListComponent';
import Menu from './components/Menu';
import AuthComponent from './components/AuthComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import LogoutComponent from './components/LogoutComponent';

import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <AuthComponent>
            <Route path="/login" exact>
              <LoginComponent />
            </Route>
            <Route path="/create" exact>
              <CreateComponent />
            </Route>
            <Route path={['/', '/posts']} exact>
              <ListComponent />
            </Route>
            <Route path={['/:id', '/posts/:id']} exact>
              <DetailComponent />
            </Route>
            <Route path="/register" exact>
              <RegisterComponent />
            </Route>
            <Route path="/logout" exact>
              <LogoutComponent />
            </Route>
          </AuthComponent>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
