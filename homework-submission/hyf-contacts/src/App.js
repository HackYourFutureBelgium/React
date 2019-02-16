import React, { Component } from "react";
import "./App.css";
import CONTACTS from "./MockData";

// {
//   id: 1,
//   firstName: "Ron",
//   lastName: "Brookes",
//   mobile: "(530) 4689217",
//   telephone: "(301) 8210933",
//   email: "rbrookes0@timesonline.co.uk",
//   homeAddress: "38816 Weeping Birch Park",
//   profileImage:
//     "https://enigmeta.s3.amazonaws.com/hackyourfuture/avatars/male-1.jpg"
// },

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: CONTACTS,
      searchText: ""
    };
  }

  generateItems() {
    return this.state.contacts
      .filter(
        e =>
          e.firstName.toLowerCase().includes(this.state.searchText) ||
          e.lastName.toLowerCase().includes(this.state.searchText)
      )
      .map(({ id, firstName, lastName, profileImage, done }) => {
        return (
          <div key={id} className="clist__contact">
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
    let searchText = event.target.value ? event.target.value.toLowerCase() : "";
    this.setState({
      contacts: CONTACTS,
      searchText: searchText
    });
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
                  <span className="details__text">
                    38816 Weeping Birch Park
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
