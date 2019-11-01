import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Menu from './Components/Menu';
import CreateComponent from './Components/CreateComponent';
import DetailComponent from './Components/DetailComponent';
import ListComponent from './Components/ListComponent';
import MenuComponent from './Components/MenuComponent';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <MenuComponent />
        <Switch>
          <Route path="/create" exact>
            <CreateComponent />
          </Route>

          <Route path="/:id">
            <DetailComponent />
          </Route>

          <Route path="/" exact>
            <ListComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
