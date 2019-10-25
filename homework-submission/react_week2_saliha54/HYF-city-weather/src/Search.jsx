import React, { useState } from 'react';

const Search = ({ setSearch }) => {
  let [value, setValue] = useState('');
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        setSearch(value);
      }}
    >
      <label htmlFor="search"> Search for any city</label>
      <input
        value={value}
        name="search"
        type="search"
        onChange={event => {
          setValue(event.target.value);
        }}
      />
      <input type="submit" value="search" />
    </form>
  );
};

export default Search;
