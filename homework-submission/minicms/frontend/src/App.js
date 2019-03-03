import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import ShowPage from "./ShowPage";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <main>
            <Route exact path="/" component={ShowPage} />
            <Route exact path="/:slug" component={ShowPage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
