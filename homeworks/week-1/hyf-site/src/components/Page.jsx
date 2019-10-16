import React from 'react';
import Block from './Block';
import ListItem from './ListItem';

const  Page = (props)=> {
    return ( 
      <main>
        <h1 className="page__title">{props.data.title}</h1>
        <div className="page__body">{props.data.description}</div>
        <div className="page__blocks">
          {
            props.data.blocks.map((blocksObject, key) => (
              <Block title={blocksObject.title} key={key} description={blocksObject.description}/>
            ))
          }
        </div>
          {
            props.data.items.map((item, key) => (
              <ListItem items={item} key={key}/>
            ))
          }     
    </main>
    );
}

export default Page;