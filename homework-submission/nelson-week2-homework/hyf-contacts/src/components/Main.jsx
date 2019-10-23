import React, { useState } from 'react';
import ListSearch from './ListSearch';
import ListContacs from './ListContacs';
import ContactNamePhoto from './ContactNamePhoto';
import ContactInfoGeneral from './ContactInfoGeneral';


let Main = () => {
  const [contactsFilter, setContactsFilter] = useState('');
  const [contactActiveId, setContactActiveId] = useState(1);

  return (
    <div className='main'>
      <div className='clist'>
        <ListSearch setContactsFilter={setContactsFilter} />
        <ListContacs contactsFilter={contactsFilter} setContactActiveId={setContactActiveId} contactActiveId={contactActiveId} />
      </div>
      <div className='details'>
        <ContactNamePhoto contactActive={contactActiveId} />
        <ContactInfoGeneral contactActive={contactActiveId} />
      </div>
    </div >
  )
};

export default Main;