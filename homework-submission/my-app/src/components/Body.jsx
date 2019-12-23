import React from 'react';
import Block from './Block';
import List from './List';

const Body = (props) => (
  <main>
    <h1 className="page__title">{props.data.title}</h1>
    <div className="page__body">{props.data.description}</div>
    <div className="page__blocks">
      {
        (props.data.blocks !== undefined) &&
        props.data.blocks.map((blocksObject, key) => (
          <Block
            title={blocksObject.title}
            key={key}
            description={blocksObject.description}
          />
        ))
      }
    </div>
    {
      (props.data.items !== undefined) &&
      <List
        items={props.data.items}
      />
    }
  </main>
);

export default Body;
