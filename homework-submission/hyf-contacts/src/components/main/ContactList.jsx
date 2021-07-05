import React, { useState } from 'react';
import CListContacts from './CListContacts';

const ContactList = () => {
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');

  return (
    <div className="clist">
      <div className="clist__search">
        <span className="clist__searchIcon">
          <i className="fas fa-search"></i>
        </span>
        <input className="clist__searchInput" type="search" placeholder="Search" value="" />
      </div>

      <CListContacts />
    </div>
  );
};

export default ContactList;
