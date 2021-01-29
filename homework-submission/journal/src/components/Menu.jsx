import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <header>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/logout">Log out</Link>
      </div>
    </header>
  );
};

export default Menu;
