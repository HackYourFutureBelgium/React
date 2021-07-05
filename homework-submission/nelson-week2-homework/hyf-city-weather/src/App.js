import React, { useState } from 'react';
import Search from './components/Search';
import Information from './components/Information';
import './css/App.css';
import './css/table.css';

let App = () => {
  const [city, setCity] = useState('');
  return (
    <div className="App">
      <Search setCity={setCity} />
      <Information city={city} />
    </div>
  )
};

export default App;
