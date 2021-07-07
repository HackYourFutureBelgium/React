import React, { Component } from 'react';
import icon from './../icon.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <span className="header__branding">
          <img className="header__logo" src={icon} width={35} height={35} alt="Contacts icon" />
          <h1 className="header__title">Contacts</h1>
        </span>
        <span>
          <button type="button" className="btn">
            Create Contact
          </button>
        </span>
      </div>
    );
  }
}

export default Header;
