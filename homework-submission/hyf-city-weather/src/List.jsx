import React from 'react';

const List = ({ data }) => {
  const elements = [{ data }];

  const items = [];

  for (const [index] of elements.entries()) {
    items.push(<li key={index}>{data}</li>);
  }
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default List;
