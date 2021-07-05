import React, { useState } from 'react';

const Search = ({ setCity }) => {
  const [wordFromUser, setwordFromUser] = useState('');
  return (
    <div className="search">
      <form onSubmit={(event) => {
        event.preventDefault();
        setCity(wordFromUser);
        setwordFromUser('');
      }}>
        <label>Search the weather of any city
          <input name="search" value={wordFromUser} type="search" onChange={(event) => {
            event.preventDefault();
            setwordFromUser(event.target.value);
          }} />
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default Search;