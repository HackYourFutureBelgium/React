import React, { useState } from 'react';

let ListSearch = () => {
  const [search, setSearch] = useState('');
  return (
    <div className='clist__search'>
      <span className='clist__searchIcon'>
        <i className='fas fa-search'></i>
      </span>
      <input className='clist__searchInput' type='search' placeholder='Search' value={search} onChange={(event) => {
        event.preventDefault();
        setSearch(event.target.value);
      }} />
    </div>
  )
};

export default ListSearch;