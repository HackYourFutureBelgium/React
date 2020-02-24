import React, { useState, useEffect } from 'react';

let Info = props => {
  return (
    <div className="details__row">
      <label className="details__label">{props.objKey}</label>
      <span className="details__text">{props.contact[`${props.objKey}`]}</span>
    </div>
  );
};

const Details = props => {
  let [contact, setContact] = useState({});
  useEffect(() => {
    if (props.contact) {
      setContact(props.contact);
    }
  }, [props.contact]);

  return (
    <div className="details">
      <div className="details__large">
        <div className="details__icon">
          <img src={`${contact.profileImage}`} alt="" />
        </div>
        <div className="details__name">
          <span className="details__firstName">{contact.firstName}</span>
          <span className="details__lastName">{contact.lastName}</span>
        </div>
      </div>
      <div className="details__info">
        {Object.keys(contact)
          .filter(key => {
            return key != 'id' && key != 'firstName' && key != 'lastName' && key != 'profileImage';
          })
          .map((objKey, key) => (
            <Info key={key} objKey={objKey} contact={contact} />
          ))}
      </div>
    </div>
  );
};

export default Details;
