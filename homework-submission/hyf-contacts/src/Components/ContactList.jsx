import React, { useState, useEffect } from 'react';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://api.myjson.com/bins/ofhd0')
      .then(res => res.json())
      .then(result => {
        setContacts(result);
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  }, [setContacts]);

  return (
    <div>
      <ul>
        {contacts.map((data, key) => {
          return (
            <div>
              <li className="clist__contact" key={`${data.id}`}>
                <span>
                  <img className="clist__icon" src={`${data.profileImage}`} />
                </span>
                <span className="clist__firstName">{data.firstName}</span>
                <span className="clist__lastName">{data.lastName}</span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
