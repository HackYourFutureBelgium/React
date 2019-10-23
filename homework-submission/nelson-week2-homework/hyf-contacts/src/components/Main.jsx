import React from 'react';
import ListSearch from './ListSearch';
import ListContacs from './ListContacs';
import ContactNamePhoto from './ContactNamePhoto';
import ContactInfoGeneral from './ContactInfoGeneral';

let Main = () => (
  <div className='main'>
    <div className='clist'>
      <ListSearch />
      <ListContacs />
    </div>
    <div className='details'>
      <ContactNamePhoto />
      <ContactInfoGeneral />
    </div>
  </div >
);

export default Main;