import React from 'react';

const Header = () => (
  <div className="header">
    <span className="header__branding">
      <img
        src="https://hyf-contacts.netlify.com/static/media/logo.4b7bec3b.svg"
        width="35"
        height="35"
        className="header__logo"
        alt="Contacts app logo"
      />
      <h1 className="header__title">CONTACTS</h1>
    </span>

    <span className="header__actions">
      <span className="btn">
        <i className="btn__icon fas fa-plus"></i>
        <span className="btn__label">Create a Contact</span>
      </span>
    </span>
  </div>
);

export default Header;
