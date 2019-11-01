import React, { useState, useEffect } from 'react';

const people = ['Siri', 'Alexa', 'Google', 'Facebook', 'Twitter', 'Linkedin', 'Sinkedin'];


function ContactList() {

  // const [contacts, setContacts] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults] = useState([])

  const handleChange = event => {
    setSearchTerm(event.target.value);

  useEffect(() => {
      const results = people.filter(person =>
        person.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
    }, [searchTerm]);

  // useEffect(() => {
  //   fetch('https://api.myjson.com/bins/ofhd0')
  //     .then(res => res.json())
  //     .then(result => {
  //       setContacts(result);
  //     })
  //     .catch(function(error) {
  //       console.error('Error:', error);
  //     });
  // }, [setContacts]);

  return (
    <div>
      <input type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange} />
      <ul>
      {searchResults.map(item => (
        <li>{item}</li>
      ))}
      </ul>
    

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