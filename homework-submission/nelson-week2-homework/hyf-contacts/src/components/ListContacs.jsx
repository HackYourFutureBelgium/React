import React, { useState } from 'react';

let ListContacs = ({ contactsFilter, setContactActive, contactActive }) => {
  const [list, setList] = useState({ loading: 0, result: null });

  if (list.loading === 0) {
    let url = `https://api.myjson.com/bins/ofhd0`;
    fetch(url)
      .then(res => res.json())
      .then(response => {
        setList({
          loading: 1,
          result: response,
        });
        setContactActive(response[0])
      })
      .catch(error => {
        setContactActive({ id: -1, error })
      })
    return null
  }

  let listFilter = list.result.filter(contact => {
    let nameToFind = contactsFilter.toUpperCase();
    let contacName = contact.firstName.toUpperCase();
    let contacLastName = contact.lastName.toUpperCase();
    return (contacName.indexOf(nameToFind) >= 0 || contacLastName.indexOf(nameToFind) >= 0)
  })
  if (contactsFilter === '') listFilter = list.result;

  return (
    <div className='clist__contacts'>
      {
        listFilter.map(contact => (
          < div className={contact.id === contactActive.id ? 'clist__contact active' : 'clist__contact'}
            key={contact.id} onClick={(event) => {
              event.preventDefault();
              setContactActive(contact)
            }} >
            < div className='clist__icon'>
              <img src={contact.profileImage} alt='' />
            </div>
            <div className='clist__name'>
              <span className='clist__firstName'>{contact.firstName}</span>
              <span className='clist__lastName'>{contact.lastName}</span>
            </div>
          </div>
        ))
      }
    </div >
  )
};

export default ListContacs;