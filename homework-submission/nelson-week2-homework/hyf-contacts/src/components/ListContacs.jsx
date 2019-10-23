import React, { useState } from 'react';

let ListContacs = () => {
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
      })
      .catch(error => {
        setList({
          loading: 1,
          result: error,
        });
      })
    return null
  }
  console.log(list);

  return (
    <div className='clist__contacts'>
      {
        list.result.map(contact => (
          <div className='clist__contact active' key={contact.id}>
            < div className='clist__icon'>
              "        <img src={contact.profileImage} alt='' />"
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