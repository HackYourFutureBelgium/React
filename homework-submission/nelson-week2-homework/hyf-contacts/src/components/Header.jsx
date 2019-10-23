import React from 'react';
import contacstImg from '../static/contacs.svg';

let Header = () => (
  <div className='header'>
    <span className='header__branding'>
      <img src={contacstImg} className='header__logo' alt='Contacts app logo' />
      <h1 className='header__title'>Contacts</h1>
    </span>
    <span className='header__actions'>
      <span className='btn'><i className='btn__icon fas fa-plus'></i>
        <span className='btn__label'>Create Contact</span>
      </span>
    </span>
  </div>
);
export default Header;