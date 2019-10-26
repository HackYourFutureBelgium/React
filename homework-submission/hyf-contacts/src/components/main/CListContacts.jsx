import React, { useState, useEffect } from 'react';

const ListFunction = res => {
  return (
    <div className="clist__contact">
      <div className="clist__icon">
        <img src={res.profileImage} alt="" />
      </div>
      <div className="clist__name">
        <span className="clist__firstName">{res.firstName}</span>
        <span className="clist__lastName">{res.lastName}</span>
      </div>
    </div>
  );
};

function CListContacts() {
  const [response, setResponse] = useState('');
  useEffect(() => {
    fetch(`https://api.myjson.com/bins/ofhd0`)
      .then(res => res.json())
      .then(jsonData => setResponse(jsonData))
      .catch(err => console.warn('Error: ', err));
  }, []);

  console.log('response: ', response);

  if (response) {
    return (
      <div className="clist__contacts">
        {response.map((contactObject, key) => (
          <ListFunction
            key={key}
            profileImage={contactObject.profileImage}
            firstName={contactObject.firstName}
            lastName={contactObject.lastName}
          />
        ))}
      </div>
    );
  } else if (!response) {
    return null;
  }
}

export default CListContacts;
