import React, { useEffect, useState } from 'react';
import List from './List';
//const [counter, setCounter] = useState(0);
const Result = () => {
  useEffect(() => {
    console.log('useEffect');
  }, []);
  return (
    <div>
      <form className="Search-form">
        <input className="search-bar" type="search" />
        <button className="search-button" type="submit"></button>
      </form>
      <div className="constant_list">
        <List />
      </div>
    </div>
  );
};

export default Result;
