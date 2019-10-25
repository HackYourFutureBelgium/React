import React from 'react';
import Search from './Search';
import ContactList from './ContactList';

function Navigation() {
  return (
    <div className="clist">
      <Search />
      <ContactList />
    </div>
  );
}
export default Navigation;
