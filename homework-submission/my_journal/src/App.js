import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Card } from 'antd';

import './App.css';
import 'antd/dist/antd.css';

import Menu from './components/Menu';
import DetailComponent from './components/DetailComponent';
import CreateComponent from './components/CreateComponent';
import ErrorComponent from './components/ErrorComponent';
import ListComponent from './components/ListComponent';

import AuthComponent from './components/user/AuthComponent';
import LogInComponent from './components/user/LogInComponent';

/*
import LogoutComponent from './components/user/LogoutComponent';
import FetchForDetailComponent from './components/actions/detail/FetchForDetailComponent';
import FetchForListComponent from './components/actions/list/FetchForListComponent';
*/

function App() {
  const [error, setError] = useState(null);
  return (
    <div className="App" id="Appid">
      <Router>
        <MenuComponent />
        {error ? (
          <ErrorComponent error={error} />
        ) : (
          <Switch>
            <Route path="/login" exact>
              <LogInComponent setError={setError} />
            </Route>
            <Route path="/logout" exact>
              <LogoutComponent setError={setError} />
            </Route>

            <AuthComponent>
              <Route path="/create" exact>
                <CreateComponent setError={setError} />
              </Route>
              <Route path="/:id" exact>
                <FetchForDetailComponent setError={setError} />
              </Route>
              <Route path="/" exact>
                <FetchForListComponent setError={setError} />
              </Route>
            </AuthComponent>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
