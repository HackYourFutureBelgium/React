import React, { useState } from 'react';
import ListSearch from './ListSearch';
import ListContacs from './ListContacs';
import ContactNamePhoto from './ContactNamePhoto';
import ContactInfoGeneral from './ContactInfoGeneral';


let Main = () => {
  const [contactsFilter, setContactsFilter] = useState('');
  //const [contactActive, setcontactActive] = useState(0);

  return (
    <div className='main'>
      <div className='clist'>
        <ListSearch setContactsFilter={setContactsFilter} />
        <ListContacs contactsFilter={contactsFilter} />
      </div>
      <div className='details'>
        <ContactNamePhoto />
        <ContactInfoGeneral />
      </div>
    </div >
  )
};

export default Main;