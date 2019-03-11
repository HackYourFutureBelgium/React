import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MockData from "../src/MockData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: MockData,
      originalContacts: MockData,
      filteredContacts: [],
      searchtext: "",
      activeContactIndex: 0
    };
  }

  handleSelectContact = originalContacts => {
    console.log("SELECTED", originalContacts);
    this.setState({ activeContactIndex: originalContacts.id - 1 });
  };

  renderContacts(contacts) {
    //console.log(this.contacts);
    return (
      <div
        key={contacts.id}
        className="clist__contact"
        //onClick={this.handleSelectContact.bind(this, contacts)}
        onClick={() => this.handleSelectContact(contacts)}
      >
        <div className="clist__icon">
          <img src={contacts.profileImage} alt="" />
        </div>

        <div className="clist__name">
          <span className="clist__firstName">{contacts.firstName}</span>
          <span className="clist__lastName">{contacts.lastName}</span>
        </div>
      </div>
    );
  }

  handleSeach(e) {
    const value = e.target.value;
    console.log("searchtext:", value);
    this.setState({ searchtext: value });

    const myfilteredContacts = this.state.originalContacts.filter(
      mycontact =>
        mycontact.firstName.toLowerCase().includes(value.toLowerCase()) |
        mycontact.lastName.toLowerCase().includes(value.toLowerCase())
    );

    // console.log("filteredContacts:", myfilteredContacts);
    this.setState({ contacts: myfilteredContacts });
    this.setState({ filteredContacts: myfilteredContacts });
    console.log("filteredContacts:", this.state.filteredContacts);
  }

  render() {
    const {
      contacts,
      originalContacts,
      activeContactIndex,
      searchtext
    } = this.state;
    const activeContact = originalContacts[activeContactIndex];
    const allContacts = contacts.map(contact => this.renderContacts(contact));

    return (
      <div className="App">
        <header className="App-header">
          <div className="header">
            <span className="header__branding">
              <img
                src={logo}
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
                  placeholder="Search by name...."
                  value={searchtext}
                  onChange={this.handleSeach.bind(this)}
                />
              </div>
              <div className="clist_contact">{allContacts}</div>
            </div>
            <div class_name="details">
              <div className="details__large">
                <div className="details__icon">
                  <img
                    scr={logo}
                    src={activeContact.profileImage}
                    alt={activeContact.firstName + " " + activeContact.lastName}
                  />
                </div>
                <div className="details__name">
                  <span className="details__firstName">
                    {activeContact.firstName}
                  </span>
                  {""}
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
                  <span className="details__text">
                    {activeContact.telephone}
                  </span>
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
        </header>
      </div>
    );
  }
}

export default App;
