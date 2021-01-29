import React, { useState } from 'react';
// import { Card } from 'antd';
import MainMenu from './components/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Creatcomponent from './components/Creatcomponent';
import ListComponenet from './components/ListComponenet';
import DetailComponenet from './components/DetailComponenet';
import AutoComponenet from './components/user/AutoComponenet';

// import 'antd/dist/antd.css';
import './App.css';
import LoginComponenet from './components/user/LoginComponenet';
import ErrorComponent from './components/ErrorComponent';

function App() {
  const [error, setError] = useState(null);
  return (
    <div className="App">
      <Router>
        <MainMenu />
        {error ? (
          <ErrorComponent error={error} />
        ) : (
          <Switch>
            <Route path="/login" exact>
              <LoginComponenet setError={setError} />
            </Route>
            {/* <Route path="/resister" exact>
            <Resister setError={setError} />
          </Route> */}
            <AutoComponenet>
              <Route path="/" exact>
                <ListComponenet setError={setError} />
              </Route>
              <Route path="/create" exact>
                <Creatcomponent />
              </Route>

              <Route path="/:id" exact>
                <DetailComponenet />
              </Route>
            </AutoComponenet>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
