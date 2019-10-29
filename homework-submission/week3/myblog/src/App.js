
import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Blog from './components/Blog';
import 'antd/dist/antd.css';
import './css/App.css';

const App = () => (
  <div className="App">
    <Router>
      <Blog />
    </Router>
  </div>
);

export default App;
