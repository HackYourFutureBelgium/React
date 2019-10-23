import React from 'react';

let ContactInfoGeneral = ({ contactActive }) => {
  let infoContact = [
    {
      title: 'MOBILE',
      data: contactActive.mobile
    },
    {
      title: 'TELEPHONE',
      data: contactActive.telephone
    },
    {
      title: 'EMAIL',
      data: contactActive.email
    },
    {
      title: 'HOME ADDRESS',
      data: contactActive.homeAddress
    },
  ];

  return (
    <div className='details__info'>
      {infoContact.map(info => (
        < div className='details__row' key={info.title}>
          <label className='details__label'>{info.title}</label>
          <span className='details__text'>{info.data}</span>
        </div>
      ))
      }
    </div >
  )
};

export default ContactInfoGeneral;