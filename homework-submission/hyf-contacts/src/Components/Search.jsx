import React, { useState, useEffect } from 'react';
import searchicon from './../searchicon.svg';
import ContactList from './ContactList';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <form>
      <div className="clist__search">
        <span>
          <img className="clist__searchIcon" src={searchicon} alt="Contacts icon" />
        </span>
        <input
          className="clist__searchInput"
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <div>
          <ContactList />
        </div>
      </div>
    </form>
  );
};

export default Search;
