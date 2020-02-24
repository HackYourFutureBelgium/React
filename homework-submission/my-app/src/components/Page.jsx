import React from 'react';
import Block from './Block';

const Page = props => (
  <main>
    <h1 className="page__title">{props.data.title}</h1>
    <div className="page__body">{props.data.description}</div>
    <div className="page_blocks">
      {props.data.blocks.map((blockobject, key) => (
        <Block title={blockobject.title} description={blockobject.description} key={key} />
      ))}
    </div>
  </main>
);
export default Page;
