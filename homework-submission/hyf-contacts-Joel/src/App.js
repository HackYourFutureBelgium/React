import React, { Component } from "react";
import "../src/index.css";
import MockData from "../src/MockData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: MockData
    };
  }

  renderContacts(contact) {
    return (
      <li key={contact.id}>
        <div className="clist__contact">
          <div className="clist__icon">
            <img src={contact.profileImage} alt="" />
          </div>
          <div className="clist__name">
            <span className="clist__firstName"> {contact.firstName}</span>
            <span className="clist__lastName">{contact.lastName}</span>
          </div>
        </div>
      </li>
    );
  }

  render() {
    const allContacts = MockData.map(contact => this.renderContacts(contact));

    return (
      <div className="app">
        <div className="header">
          <span className="header__branding">
            <img
              src="https://hyf-contacts.netlify.com/static/media/logo.4b7bec3b.svg"
              width="35"
              height="35"
              className="header__logo"
              alt="Contacts app logo"
            />
            <h1 className="header__title">Contacts</h1>
          </span>
          <span className="header__actions">
            <span className="btn">
              <i className="btn__icon fas fa-plus" />
              <span className="btn__label">Create Contact</span>
            </span>
          </span>
        </div>
        <div className="main">
          <div className="clist">
            <div className="clist__search">
              <span className="clist__searchIcon">
                <i className="fas fa-search" />
              </span>
              <input
                className="clist__searchInput"
                type="search"
                placeholder="Search"
                defaultValue=""
              />
            </div>
            <div className="clist__contacts">{allContacts}</div>
          </div>
          <div className="details">
            <div className="details__large">
              <div className="details__icon">
                <img src="/profiles/male-1.jpg" alt="" />
              </div>
              <div className="details__name">
                <span className="details__firstName">Ron</span>
                <span className="details__lastName">Brookes</span>
              </div>
            </div>
            <div className="details__info">
              <div className="details__row">
                <label className="details__label">Mobile</label>
                <span className="details__text">(530) 4689217</span>
              </div>
              <div className="details__row">
                <label className="details__label">Telephone</label>
                <span className="details__text">(301) 8210933</span>
              </div>
              <div className="details__row">
                <label className="details__label">Email</label>
                <span className="details__text">
                  rbrookes0@timesonline.co.uk
                </span>
              </div>
              <div className="details__row">
                <label className="details__label">Home Address</label>
                <span className="details__text">38816 Weeping Birch Park</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
