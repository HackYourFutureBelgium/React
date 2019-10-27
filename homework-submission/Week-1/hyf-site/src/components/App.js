import React from 'react';
import '../App.css';
import Body from "./Body";
import Navigation from "./Navigation";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="site">
      <Navigation />
      <Body />
    </div >
  </Router>   
   
  );
}

export default App;
