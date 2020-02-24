import React, { useState, useEffect } from 'react';
import JqxListBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

const List = () => {
  const [
    fetchUser = [
      {
        AccessContact: true,
        FirstName: undefined,
        LastName: undefined,
      },
    ],
    setFetchUser,
  ] = useState('');
  const url = `https://api.myjson.com/bins/ofhd0`;
  const getList = fetch(url)
    .then(res => res.json())
    .then(result => {
      setFetchUser({
        FirstName: result[0].firstName,
        LastName: result[0].lastName,
      });
    });

  //const contactsData = getList.json();
  console.log(getList.firstName);
  let source = ['Mark', 'Marianne', 'Loc', 'David'];
  return <JqxListBox width={220} height={220} source={source} />;
  <div>
    {fetchUser.AccessContact || !fetchUser.FirstName ? (
      <dive>searching</dive>
    ) : (
      <div>f{etchUser.FirstName}</div>
    )}
  </div>;
};

export default List;
