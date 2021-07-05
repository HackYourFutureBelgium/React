import React, { useState }from 'react';
import '../App.css';

const Search = ({setSearch}) => {
  const [value, setValue] = useState('');

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      setSearch(value);
    }}>

      <label htmlFor="search">Search the weather of any city</label>
      <input
        name="search"
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
        placeholder="Enter the City"
        autoFocus
        type="search" />
      <input type="submit" value="search" />

    </form>
  )
}

export default Search;