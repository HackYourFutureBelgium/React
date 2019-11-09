import React from 'react';
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

function App() {
  return (
    <div className="App">

      <Router>
        <MenuComponent />
        <Switch>
          <Route path="/create" exact>
            <Create />
          </Route>
          <Route path="/:id" exact>
            <DetailComponent />
          </Route>
          <Route path="/" exact>
            <ListComponent />
          </Route>
        </Switch>
      </Router >
    </div >
  );
}

export default App;