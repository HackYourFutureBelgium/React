import React, { useState } from 'react';
import ListSearch from './ListSearch';
import ListContacs from './ListContacs';
import ContactNamePhoto from './ContactNamePhoto';
import ContactInfoGeneral from './ContactInfoGeneral';

let Main = () => {
  const [contactsFilter, setContactsFilter] = useState('');
  const [contactActive, setContactActive] = useState({ id: 1 });

  return (
    <div className='main'>
      <div className='clist'>
        <ListSearch setContactsFilter={setContactsFilter} />
        <ListContacs contactsFilter={contactsFilter} setContactActive={setContactActive} contactActive={contactActive} />
      </div>
      <div className='details'>
        <ContactNamePhoto contactActive={contactActive} />
        <ContactInfoGeneral contactActive={contactActive} />
      </div>
    </div >
  )
};

export default Main;