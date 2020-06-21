import React from 'react';

const BlockItems = props => {
  return (
    <div className="block">
      <h2 className="block__title">{props.title}</h2>
      <div className="block__body">{props.body}</div>
    </div>
  );
};

const Teach = props => (
  <main>
    <h1 className="page__title">{props.data.title}</h1>
    <div className="page__body">{props.data.body}</div>
    <div className="page__blocks">
      {props.data.blocks.map((block, key) => (
        <BlockItems key={key} title={block.title} body={block.body} />
      ))}
    </div>
  </main>
);

export default Teach;
