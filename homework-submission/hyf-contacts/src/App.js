import React, { Component } from "react";
import "./App.css";
import CONTACTS from "./MockData";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: CONTACTS,
      searchText: "",
      detailContactId: CONTACTS[0].id
    };
  }

  generateItems() {
    let searchText = this.state.searchText.toLowerCase().trim();
    return this.state.contacts
      .filter(
        e =>
          e.firstName.toLowerCase().includes(searchText) ||
          e.lastName.toLowerCase().includes(searchText)
      )
      .map(({ id, firstName, lastName, profileImage, done }, ix) => {
        let classNames =
          this.state.detailContactId === id
            ? "clist__contact active"
            : "clist__contact";
        return (
          <div
            key={id}
            className={classNames}
            onClick={event => this.updateDetail(id)}
          >
            <div className="clist__icon">
              <img src={profileImage} alt="" />
            </div>
            <div className="clist__name">
              <span className="clist__firstName">{firstName}</span>
              <span className="clist__lastName">{lastName}</span>
            </div>
          </div>
        );
      });
  }

  setSearchText(event) {
    event.preventDefault();
    let searchText = event.target.value ? event.target.value : "";
    this.setState({
      contacts: CONTACTS,
      searchText: searchText
    });
  }

  updateDetail(id) {
    this.setState({
      detailContactId: id
    });
  }

  generateDetail() {
    let {
      firstName,
      lastName,
      mobile,
      telephone,
      email,
      homeAddress,
      profileImage
    } = this.state.contacts.find(e => e.id === this.state.detailContactId);
    return (
      <div className="details">
        <div className="details__large">
          <div className="details__icon">
            <img src={profileImage} alt="" />
          </div>
          <div className="details__name">
            <span className="details__firstName">{firstName}</span>
            <span className="details__lastName">{lastName}</span>
          </div>
        </div>
        <div className="details__info">
          <div className="details__row">
            <label className="details__label">Mobile</label>
            <span className="details__text">{mobile}</span>
          </div>
          <div className="details__row">
            <label className="details__label">Telephone</label>
            <span className="details__text">{telephone}</span>
          </div>
          <div className="details__row">
            <label className="details__label">Email</label>
            <span className="details__text">{email}</span>
          </div>
          <div className="details__row">
            <label className="details__label">Home Address</label>
            <span className="details__text">{homeAddress}</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="root">
        <div className="app">
          <div className="header">
            <span className="header__branding">
              <img
                src="media/logo.4b7bec3b.svg"
                className="header__logo"
                alt="Contacts app logo"
                width="35"
                height="35"
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
          {/* -- Main Panel */}
          <div className="main">
            {/* Sidebar - Contact List */}
            <div className="clist">
              {/* Search Control */}
              <div className="clist__search">
                <span className="clist__searchIcon">
                  <i className="fas fa-search" />
                </span>
                <input
                  className="clist__searchInput"
                  type="search"
                  placeholder="Search"
                  onChange={event => this.setSearchText(event)}
                  value={this.state.searchText}
                />
              </div>
              {/* Contact List Subpanel */}
              <div className="clist__contacts">
                {/* Contact list element */}
                {this.generateItems()}
              </div>
            </div>
            {/* Contact Details */}
            {this.generateDetail()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
