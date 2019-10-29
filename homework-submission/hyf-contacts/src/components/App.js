import React, { useState }from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import Result from './Result';

function App () {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container">
      <Header />
      <Search setSearchValue={setSearchValue}/>
      <Result searchValue={searchValue}/>
    </div>
  );
}

export default App;
