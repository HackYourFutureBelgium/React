import React, { useState } from 'react';

let ContactList = props => {
  return (
    <div
      className="clist__contact"
      onClick={event => {
        event.preventDefault();
        props.setContact(props.contactInfo);
      }}
    >
      <div className="clist__icon">
        <img src={`../../Public/picture"/${props.contactInfo.profileImage}`} alt="" />
      </div>
      <div className="clist__name">
        <span className="clist__firstName">{props.contactInfo.firstName}</span>
        <span className="clist__lastName">{props.contactInfo.lastName}</span>
      </div>
    </div>
  );
};

const ContactListNav = props => {
  let [value, setValue] = useState('');

  return (
    <div className="clist ">
      <div className="clist__search">
        <input
          className="clist__searchInput"
          type="search"
          placeholder="Search"
          value={value}
          onChange={event => {
            setValue(event.target.value);
          }}
        />
      </div>
      <div className="clist__contacts">
        {props.data
          .filter(contact => contact.firstName.includes(value) || contact.lastName.includes(value))
          .map((contactInfo, key) => (
            <ContactList key={key} contactInfo={contactInfo} setContact={props.setContact} />
          ))}
      </div>
    </div>
  );
};

export default ContactListNav;
