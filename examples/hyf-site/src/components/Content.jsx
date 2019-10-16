import React from 'react'
import ContentBody from './ContentBody'
import Blocks from './Blocks'

const Title = ({ title }) => (
  <h1 className="page__title">{title}</h1>
);

const Content = ({ info, title }) => (
  <main>
    <Title title={title} />
    <ContentBody paragraphs={info.paragraphs} list={info.list} />
    <Blocks blocks={info.blocks} />
  </main>
);

export default Content;