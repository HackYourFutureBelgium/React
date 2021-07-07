import React, { useState } from 'react';
const Search = ({ setSearch }) => {
  const [value, setValue] = useState('');
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        setSearch(value);
      }}
    >
      <label htmlFor="search">Search the weather of a city</label>
      <input
        type="search"
        name="search"
        value={value}
        onChange={event => {
          setValue(event.target.value);
        }}
      />
      <input type="submit" value="search" />
    </form>
  );
};

export default Search;
