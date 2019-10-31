import React from 'react';
import { Link } from 'react-router-dom';

const Menu= () => {
  return ( 
    <div className='menu'>
      <span className='home'><Link to='/'>Home</Link></span> 
      <span className='create'><Link to='/create'>Create</Link></span>
    </div>
  );
}

export default Menu;