import React, { useState } from 'react';

import Search from './Components/Search';
import Result from './Components/Result';
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
