import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import data from "../data";
import Page from "./components/Page";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => (
  <div className="site">
    
    
    <Router>
      <Navigation data={data}/>
      <Switch>
        {
          data.map((dataObject, key) =>(
            <Route exact key={key} path={dataObject.url}>
              <Page data={dataObject}/>
            </Route>
          ))
        }
      </Switch>
    </Router>
    <Page data={data.pages[0]}/>
  </div>
);
export default App;
