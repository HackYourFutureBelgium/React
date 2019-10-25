import React from 'react';
import Header from './App/Header';
import Main from './App/Main';
import contactInfo from './Public/contactInfo.js';
import './Public/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Main data={contactInfo} />
    </div>
  );
}

export default App;
