import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateComponent from './components/CreateComponent';
import DetailComponent from './components/DetailComponent';
import ListComponent from './components/ListComponent';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/create" exact>
            <CreateComponent />
          </Route>
          <Route path={['/', '/posts']} exact>
            <ListComponent />
          </Route>
          <Route path={['/:id', '/posts/:id']} exact>
            <DetailComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
