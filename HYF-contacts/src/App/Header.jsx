import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <span className="header__branding">
        <h1 className="header__title">Contacts</h1>
      </span>
      <span className="header__actions">
        <span className="btn">
          <span className="btn__label">Create Contact</span>
        </span>
      </span>
    </div>
  );
};

export default Header;
