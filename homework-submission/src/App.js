import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "antd/dist/antd.css";

import Create from "./Components/Create";
import ListComponent from './Components/List';
import DetailComponent from "./Components/Detail";
import MenuComponent from "./Components/Menu";


function App() {
  return (
    <div className="App">

    <Router>
      <MenuComponent/>
      <Switch>
        <Route path="/create" exact>
          <Create/>
        </Route>
        <Route path="/:id" exact>
          <DetailComponent/>
        </Route>
        <Route path="/" exact>
        <ListComponent/>
        </Route>
      </Switch>
    </Router>

    </div>
  );
};

export default App;
