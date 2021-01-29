import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'antd/dist/antd.css';

import Create from "./components/Create"
import DetailComponent from "./components/DetailComponent"
import ListComponent from "./components/ListComponent"
import MenuComponent from "./components/MenuComponent"
import AuthComponent from "./components/user/AuthComponent"
import LoginComponent from "./components/user/LoginComponent"
import ErrorComponent from "./components/ErrorComponent"
import LogoutComponent from './components/user/LogoutComponent'
import RegisterComponent from './components/user/RegisterComponent'

function App() {
  const [error, setError] = useState[null]
  return (
    <div className="App">
      <Router>
        <MenuComponent />
        {error ? (
          <ErrorComponent error={error} />
        ) : (
            < Switch >

              <Route path="/register" exact>
                <RegisterComponent setError={setError} />
              </Route>
              <AuthComponent>
                <Route path="/login" exact>
                  <LoginComponent setError={setError} />
                </Route>
                <Route path="/logout" exact>
                  <LogoutComponent setError={setError} />
                </Route>
                <Route path="/create" exact>
                  <Create setError={setError} />
                </Route>
                <Route path="/:id" exact>
                  <DetailComponent setError={setError} />
                </Route>
                <Route path="/" exact>
                  <ListComponent setError={setError} />
                </Route>

              </AuthComponent>
            </Switch>
          )}
      </Router >
    </div >
  );
}

export default App;
