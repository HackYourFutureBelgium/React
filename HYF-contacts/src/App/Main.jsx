import React, { useState } from 'react';
import ContactListNav from './Main/ContactListNav';
import Details from './Main/Details';

const Main = props => {
  let [contact, setContact] = useState({});
  return (
    <div className="main">
      <ContactListNav data={props.data} setContact={setContact} />
      <Details contact={contact} />
    </div>
  );
};

export default Main;
