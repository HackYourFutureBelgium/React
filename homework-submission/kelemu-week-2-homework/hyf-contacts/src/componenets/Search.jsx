import React from 'react';

const Search = () => {
  return (
    <div className="clist__search">
      <span className="clist__searchIcon">
        {' '}
        <i class="fas fa-search"></i>
      </span>
      <input class="clist__searchInput" type="search" placeholder="Search" value="">
        {/* {Search} */}
      </input>
    </div>
  );
};

export default Search;
