import React, { useState } from 'react';

const Search = ({setSearchValue}) => {
  const [value, setValue] = useState('');

  const handleSearchInputChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  }

  const callSearchFunction = (event) => {
    event.preventDefault();
    setSearchValue(value);
  }
  console.log(value)
  return ( 
    <div className='clist__search'>
    <span className='clist__searchIcon'>
      <i className='fas fa-search'></i>
    </span>
    <input className='clist__searchInput' type='search' placeholder='Search' value={value} onChange={handleSearchInputChange} />
  </div>
  );
  
}

export default Search;