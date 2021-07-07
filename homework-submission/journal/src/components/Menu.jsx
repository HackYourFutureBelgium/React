import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <header>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </div>
    </header>
  );
};

export default Menu;
