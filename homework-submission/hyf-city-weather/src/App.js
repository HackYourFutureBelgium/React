import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import Result from './components/Result';

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
