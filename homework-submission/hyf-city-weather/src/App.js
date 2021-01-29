import React, { useState } from 'react';
import './App.css';
import Search from './Search';
import Result from './Result';
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
