import React from 'react'

const Title = ({ title }) => (
  <h1 className="page__title">{title}</h1>
);

const List = ({ list }) => (
  <ul>
    {list.map((info, index) => (<li key={index}> {info}</li>))}
  </ul>
);

const Body = ({ paragraphs }) => (
  paragraphs.map((paragraph, index) => (<p key={index}> {paragraph}</p>))
);

const CheckBody = ({ paragraphs, list }) => (
  <div className="page__body">
    <Body paragraphs={paragraphs} />
    {list !== undefined ? <List list={list} /> : null}
  </div>
);

const BlockContent = ({ title, body }) => (
  <div className="block">
    <h2 className="block__title">{title} </h2>
    <div className="block__body">{body}</div>
  </div>
);

const Blocks = ({ blocks }) => (
  <div className="page__blocks">
    {
      blocks.map((block, index) => (<BlockContent key={index} title={block.title} body={block.body} />))
    }
  </div>
);

const CheckBlocks = ({ blocks }) => (
  blocks !== undefined ? <Blocks blocks={blocks} /> : null
);

const Content = ({ info, title }) => (
  <main>
    <Title title={title} />
    <CheckBody paragraphs={info.paragraphs} list={info.list} />
    <CheckBlocks blocks={info.blocks} />
  </main>
);

export default Content;