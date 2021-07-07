import React from '../node_modules/react';
const Blocks = props => (
  <div className="block">
    <h2 className="block__title">{props.title}</h2>
    <div className="block__body">{props.description}</div>
  </div>
);

export default Blocks;
