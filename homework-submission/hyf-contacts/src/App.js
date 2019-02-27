import React, { Component } from "react";
import MockData from "./MockData";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: MockData,
      filteredContacts: [],
      activeContactIndex: 0,
      searchText: ""
    };
  }
  handleSelectContact(oneContact) {
    const selectedElementIndex = this.state.contacts.findIndex(
      element => element.id === oneContact.id
    );
    this.setState({ activeContactIndex: selectedElementIndex });
  }
  handleSearch(e) {
    const value = e.target.value;
    this.setState({ searchText: value });
  }

  render() {
    const { contacts, activeContactIndex, searchText } = this.state;
    const activeContact = contacts[activeContactIndex];
    const filteredContacts = this.state.contacts.filter(
      contact =>
        contact.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchText.toLowerCase())
    );
    const contactElements = filteredContacts.map(contact =>
      this.renderDetail(contact)
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

            <div className="clist__contacts">{contactElements}</div>
          </div>

          <div className="details">
            <div className="details__large">
              <div className="details__icon">
                <img
                  src={activeContact.profileImage}
                  alt={activeContact.firstName + " " + activeContact.lastName}
                />
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
                <label className="details__label">mobile</label>

                <span className="details__text">{activeContact.mobile}</span>
              </div>

              <div className="details__row">
                <label className="details__label">telephone</label>

                <span className="details__text">{activeContact.telephone}</span>
              </div>

              <div className="details__row">
                <label className="details__label">email</label>

                <span className="details__text">{activeContact.email}</span>
              </div>

              <div className="details__row">
                <label className="details__label">home adress</label>

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
  renderDetail(contact) {
    return (
      <div
        className={
          this.state.activeContactIndex === contact.id
            ? "clist__contact active"
            : "clist__contact "
        }
        key={contact.id}
        onClick={this.handleSelectContact.bind(this, contact)}
      >
        <div className="clist__icon">
          <img
            src={contact.profileImage}
            alt={contact.firstName + " " + contact.lastName}
          />
        </div>
        <div className="clist_name">
          <span className="clist__firstName">{contact.firstName} &nbsp;</span>
          <span className="clist__lastName">{contact.lastName}</span>
        </div>
      </div>
    );
  }
}

export default App;
