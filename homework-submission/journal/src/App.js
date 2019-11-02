import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css';


import CreatePost from "./components/CreatePost"
import PostDetails from "./components/PostDetails"
import ListPost from "./components/ListPost"
import NavMenu from "./components/NavMenu"

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Switch >
          <Route path="/CreatePost" exact>
            <CreatePost />
          </Route>
          <Route path="/:id" exact>
            <PostDetails />
          </Route>
          <Route path="/" exact>
            <ListPost />
          </Route>
        </Switch>
      </Router >
    </div >
  );
}

export default App;
