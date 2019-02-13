import React, { Component } from "react";
import "../src/index.css";
import MockData from "../src/MockData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: MockData,
      activeContactIndex: [0],
      searchText: []
    };
  }

  handleClickedContact(contact) {
    this.setState({ activeContactIndex: this.state.contacts.indexOf(contact) });
  }

  renderContact(contact) {
    return (
      <li
        onClick={this.handleClickedContact.bind(this, contact)}
        key={contact.id}
      >
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

  handleSearch(e) {
    const value = e.target.value;
    this.setState({ searchText: value.toLowerCase() });
  }

  render() {
    const { contacts, activeContactIndex, searchText } = this.state;
    const activeContact = contacts[activeContactIndex];

    const filteredContacts = contacts.filter(contact =>
      (contact.firstName + " " + contact.lastName)
        .toLowerCase()
        .includes(searchText)
    );

    const allContacts = filteredContacts.map(contact =>
      this.renderContact(contact)
    );

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
                value={searchText}
                onChange={this.handleSearch.bind(this)}
              />
            </div>
            <div className="clist__contacts">{allContacts}</div>
          </div>
          <div className="details">
            <div className="details__large">
              <div className="details__icon">
                <img src={activeContact.profileImage} alt="" />
              </div>
              <div className="details__name">
                <span className="details__firstName">
                  {activeContact.firstName}
                </span>
                <span className="details__lastName">
                  {activeContact.lastName}
                </span>
              </div>
            </div>
            <div className="details__info">
              <div className="details__row">
                <label className="details__label">Mobile</label>
                <span className="details__text">{activeContact.mobile}</span>
              </div>
              <div className="details__row">
                <label className="details__label">Telephone</label>
                <span className="details__text">{activeContact.telephone}</span>
              </div>
              <div className="details__row">
                <label className="details__label">Email</label>
                <span className="details__text">{activeContact.email}</span>
              </div>
              <div className="details__row">
                <label className="details__label">Home Address</label>
                <span className="details__text">
                  {activeContact.homeAddress}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
