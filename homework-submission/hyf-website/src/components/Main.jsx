import React from 'react';
import data from './Data';

const bodyHeader = [
  'Refugees often experience challenges in finding a suitable job to apply and further develop their skills. Yet, the number of unfilled vacancies in the IT sector is increasing at a fast pace.',
  'HackYourFuture was founded in 2015 in Amsterdam, with the aim to enable refugees to build digital skills for a career in web development, facilitate the integration of newcomers, and address the shortage of qualified workforce in the IT sector.',
  'Since 2015, HackYourFuture coding schools have also opened in Copenhagen and Malmö. On 20 May 2018, HackYourFuture Belgium launched its first class in Belgium with 13 highly motivated students at BeCentral, the digital campus in Brussels. Applications are now closed and will open again in December.',
];
const MainItem = prop => (
  <div className="block">
    <h2 className="block__title">{prop.block_title}</h2>
    <div className="block__body">{prop.body}</div>
  </div>
);

const Main = () => (
  <main>
    <h1 className="page__title">What is Hack Your Future?</h1>
    <div className="page__body">
      {bodyHeader.map(prop => (
        <p>{prop}</p>
      ))}
      <p></p>
    </div>
    <div className="page__blocks">
      {data.map((dataObject, key) => (
        <MainItem key={key} block_title={dataObject.block_title} body={dataObject.body} />
      ))}
    </div>
  </main>
);

export default Main;
