import React from 'react'

const List = ({ list }) => (
  <ul>
    {list.map((info, index) => (<li key={index}> {info}</li>))}
  </ul>
);

const Paragraph = ({ paragraphs }) => (
  paragraphs.map((paragraph, index) => (<p key={index}> {paragraph}</p>))
);

const ContentBody = ({ paragraphs, list }) => (
  <div className="page__body">
    <Paragraph paragraphs={paragraphs} />
    {list !== undefined ? <List list={list} /> : null}
  </div>
);

export default ContentBody;
