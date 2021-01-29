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
      <label htmlFor="search">Search the weather of any city</label>
      <input
        value={value}
        onChange={event => {
          setValue(event.target.value);
        }}
        name="search"
        type="search"
      />
      <input type="submit" value="search" />
    </form>
  );
};

export default Search;
