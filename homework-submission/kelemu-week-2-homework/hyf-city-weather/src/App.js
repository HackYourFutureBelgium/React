import React, { useState } from 'react';
import Result from './Result';
import Search from './Search';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <Search setSearch={setSearch} />
      <Result search={search} />
    </div>
  );
}

export default App;
