import React from 'react';

const Block = props => (
  <div className="block">
    <h2 className="block__title">{props.title}</h2>
    <div className="block__body">{props.description}</div>
  </div>
);

export default Block;
