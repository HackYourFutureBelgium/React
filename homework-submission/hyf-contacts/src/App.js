import React, { Component } from "react";
import MockData from "./MockData";
import logo from "../src/logo.4b7bec3b.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: MockData,
      showFull: {
        id: 1,
        firstName: "Ron",
        lastName: "Brookes",
        mobile: "(530) 4689217",
        telephone: "(301) 8210933",
        email: "rbrookes0@timesonline.co.uk",
        homeAddress: "38816 Weeping Birch Park",
        profileImage:
          "https://enigmeta.s3.amazonaws.com/hackyourfuture/avatars/male-1.jpg"
      },
      active: false,
      searchText: "",
      filtered: MockData
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.changeClass = this.changeClass.bind(this);
  }

  changeClass(oneContact) {
    for (const contactElement of this.state.contact) {
      contactElement.active = false;
      this.setState({ active: false });
    }
    const contact = this.state.contact;
    oneContact.active = !oneContact.active;
    this.setState({
      contact,
      active: oneContact.active,
      showFull: oneContact
    });
  }

  handleSearch(event) {
    const searchText = event.target.value;
    this.setState({ searchText: searchText.toLowerCase() });
    const filtered = this.state.contact.filter(
      oneContact =>
        oneContact.firstName.toLowerCase().includes(this.state.searchText) |
        oneContact.lastName.toLowerCase().includes(this.state.searchText)
    );
    filtered.push(filtered);
    filtered.splice(-1, 1);
    this.setState({ filtered });
  }

  render() {
    const contactElement = this.state.filtered.map(oneContact =>
      this.renderContact(oneContact)
    );
    console.log(this.state);
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
              />
            </div>
            <div className="clist__contacts">{contactElement}</div>
          </div>
          <div className="details">
            <div className="details__large">
              <div className="details__icon">
                <img
                  src={this.state.showFull.profileImage}
                  alt={
                    this.state.showFull.firstName +
                    " " +
                    this.state.showFull.lastName
                  }
                />
              </div>

              <div className="details__name">
                <span className="details__firstName">
                  {this.state.showFull.firstName}
                </span>
                <span className="details__lastName">
                  {this.state.showFull.lastName}
                </span>
              </div>
            </div>
            <div className="details__info">
              <div className="details__row">
                <label className="details__label">Mobile</label>
                <span className="details__text">
                  {this.state.showFull.mobile}
                </span>
              </div>

              <div className="details__row">
                <label className="details__label">Telephone</label>
                <span className="details__text">
                  {this.state.showFull.telephone}
                </span>
              </div>

              <div className="details__row">
                <label className="details__label">email</label>
                <span className="details__text">
                  {this.state.showFull.email}
                </span>
              </div>

              <div className="details__row">
                <label className="details__label">Home Address</label>
                <span className="details__text">
                  {this.state.showFull.homeAddress}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderContact(oneContact) {
    return (
      <div
        key={oneContact.id}
        className={
          oneContact.active ? "clist__contact active" : "clist__contact"
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
}

export default App;
