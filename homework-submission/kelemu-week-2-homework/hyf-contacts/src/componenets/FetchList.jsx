import React, { useState } from 'react';

const FetchList = () => {
  const [
    fetchUser = [
      {
        FirstName: undefined,
        LastName: undefined,
      },
    ],
    setFetchUser,
  ] = useState('');
  const url = `https://api.myjson.com/bins/ofhd0`;

  const result = fetch(url)
    .then(res => res.json())
    .then(result => {
      setFetchUser({
        FirstName: result[0].firstName,
        LastName: result[0].lastName,
      });
    });

  return (
    <div>
      <h2 LastName={fetchUser.LastName}>Name: {fetchUser.LastName}</h2>
      <h2 FirstName={fetchUser.FirstName}>{fetchUser.FirstName}</h2>
    </div>
  );
};

export default FetchList;
