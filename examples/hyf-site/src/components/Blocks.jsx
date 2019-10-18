import React from 'react'

const BlockContent = ({ title, body }) => (
  <div className="block">
    <h2 className="block__title">{title} </h2>
    <div className="block__body">{body}</div>
  </div>
);

const Blocks = ({ blocks }) => (
  <div className="page__blocks">
    {
      blocks === undefined ? null :
        blocks.map((block, index) => <BlockContent key={index} title={block.title} body={block.body} />)
    }
  </div>
);

export default Blocks;
