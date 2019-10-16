import React from 'react'
import Body from './Body'
import Header from './Header'
import { BrowserRouter as Router } from 'react-router-dom';

const Page = () => (
  <Router>
    <div className="site">
      <Header />
      <Body />
    </div >
  </Router>
);

export default Page;

