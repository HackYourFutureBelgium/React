import React, { Component } from "react";
import MockData from "./MockData";
import logo from "../src/logo.4b7bec3b.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: MockData,
      activeContactIndex: 0,
      filtered: MockData,
      activeContactDetails: [
        { mobile: "(530) 4689217" },
        { telephone: "(301) 8210933" },
        { email: "rbrookes0@timesonline.co.uk" },
        { homeAddress: "38816 Weeping Birch Park" }
      ]
    };

    this.changeClass = this.changeClass.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  changeClass(oneContact) {
    const selectedElementIndex = this.state.contacts.findIndex(
      element => element.id === oneContact.id
    );
    const newDetails = Object.entries(oneContact)
      .splice(3, 4)
      .map(([detailName, value]) => ({ detailName, value }));
    newDetails.map(detail => (detail.dataId = Date.now()));
    this.setState({
      activeContactIndex: selectedElementIndex,
      activeContactDetails: newDetails
    });
  }

  handleSearch(event) {
    const searchText = event.target.value;

    const filtered = this.state.contacts.filter(
      contactElements =>
        contactElements.firstName
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        contactElements.lastName
          .toLowerCase()
          .includes(searchText.toLowerCase())
    );

    filtered.push(filtered);
    filtered.splice(-1, 1);
    this.setState({ filtered });
  }

  renderDetails(detailContact) {
    return (
      <div className="details__row">
        <label className="details__label">{detailContact.detailName}</label>
        <span className="details__text">{detailContact.value}</span>
      </div>
    );
  }

  renderContact(oneContact) {
    return (
      <div
        key={oneContact.id}
        className={
          this.state.activeContactIndex === oneContact.id - 1
            ? "clist__contact active"
            : "clist__contact "
        }
        onClick={this.changeClass.bind(this, oneContact)}
      >
        <div className="clist__icon">
          <img
            src={oneContact.profileImage}
            alt={oneContact.firstName + " " + oneContact.lastName}
          />
        </div>
        <div className="clist__name">
          <span className="clist__firstName">{oneContact.firstName}</span>
          <span className="clist__lastName">{oneContact.lastName}</span>
        </div>
      </div>
    );
  }

  render() {
    const {
      contacts,
      activeContactIndex,
      filtered,
      activeContactDetails
    } = this.state;

    const contactDetails = activeContactDetails.map(details =>
      this.renderDetails(details)
    );

    const contactElements = filtered.map(oneContact =>
      this.renderContact(oneContact)
    );

    const activeContact = contacts[activeContactIndex];

    return (
      <div className="app">
        <div className="header">
          <span className="header__branding">
            <img
              src={logo}
              width={35}
              height={35}
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
                onChange={this.handleSearch}
                value={this.state.value}
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
            <div className="details__info">{contactDetails}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
