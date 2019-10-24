import React, { useState } from 'react';

const Search = () => {
  const [value, setValue] = useState('');
  return (
    <form>
      <label htmlFor="search"> Search the weather of any city</label>
      <input
        value={value}
        onChange={event => {
          setValue(event.target.value);
        }}
        name="search"
        type="search"
      ></input>
      <input type="submit" value="search"></input>
    </form>
  );
};

export default Search;
