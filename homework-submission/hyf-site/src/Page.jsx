import React from '../node_modules/react';
import Block from './blocks';
import PageData from './Data';
const contentInfo = PageData.blocksData[0];
const navInfo = PageData.navigationData[0];
console.log(navInfo);
const blocksInfo = PageData.blocksData[0].blocks;
const Page = props => (
  <main>
    <h1 className="page__title">{navInfo.title}</h1>
    <div className="page__body">{contentInfo.firstParagraph}</div>
    <div className="page__blocks">
      {blocksInfo.map((blocksObject, key) => (
        <Block title={blocksObject.title} key={key} description={blocksObject.description} />
      ))}
    </div>
  </main>
);

export default Page;
