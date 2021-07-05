import React from 'react';

let ContactNamePhoto = ({ contactActive }) => (
  <div className='details__large'>
    <div className='details__icon'><img src={contactActive.profileImage} alt={contactActive.firstName} /> </div>
    <div className='details__name'>
      <span className='details__firstName'>{contactActive.firstName}</span>
      <span className='details__lastName'>{contactActive.lastName}</span>
    </div>
  </div>
);

export default ContactNamePhoto;