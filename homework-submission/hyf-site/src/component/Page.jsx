import React from 'react';
import Block from './Block';
import List from './List';
const Page = props => (
  <main>
    <h1 className="page__title">{props.data.title}</h1>
    <div className="page__body">{props.data.description}</div>
    <div className="page__blocks">
      {props.data.blocks !== undefined
        ? props.data.blocks.map((blockObject, key) => (
            <Block title={blockObject.title} description={blockObject.description} key={key} />
          ))
        : props.data.items.map((itemObject, key) => <List item={itemObject} key={key} />)}
    </div>
  </main>
);

export default Page;
