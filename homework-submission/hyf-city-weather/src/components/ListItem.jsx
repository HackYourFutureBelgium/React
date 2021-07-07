import React from 'react';

const ListItem = ({ header, value }) => {
  return (
    <li>
      <span>{header}</span>
      <span>{value}</span>
    </li>
  );
};

export default ListItem;
