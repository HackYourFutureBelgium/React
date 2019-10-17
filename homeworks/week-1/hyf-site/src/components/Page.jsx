import React from 'react';
import Block from './Block';
import UnOrderList from './UnOrderList';

const  Page = (props)=>( 
  <main>
    <h1 className="page__title">{props.data.title}</h1>
    <div className="page__body">{props.data.description}</div>
    <div className="page__blocks">
      {
        (props.data.blocks===undefined)? null:
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
      (props.data.items === undefined) ? null :
        <UnOrderList
          items={props.data.items}
        />
    }
  </main>
);

export default Page;