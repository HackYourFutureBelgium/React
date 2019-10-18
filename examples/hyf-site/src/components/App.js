import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../css/App.css';
import Body from './Body'
import Header from './Header'

const App = () => (
  <Router>
    <div className="site">
      <Header />
      <Body />
    </div >
  </Router>
);
export default App;
