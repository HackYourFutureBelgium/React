import React from 'react';

const ListItems = props => {
  return <li>{props.listItem}</li>;
};

const Apply = props => (
  <main>
    <h1 className="page__title">{props.data.title}</h1>
    <div className="page__body">{props.data.body}</div>
    <ul>
      {props.data.list.map((listItem, key) => (
        <ListItems key={key} listItem={listItem} />
      ))}
    </ul>
  </main>
);

export default Apply;
