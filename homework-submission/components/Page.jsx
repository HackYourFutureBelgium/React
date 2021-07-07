import React from 'react';
import Block from './components/Block';

const Page = (props) => (
     <main>
        <h1 className="page_title">{props.data.title}</h1>
        <div className="page_body">Refugees often experience challenges in finding a suitable job to apply and further develop their skills. Yet, the number of unfilled vacancies in the IT sector is increasing at a fast pace.</div>
        <div className="page_blocks">
            {
                props.data.blocks.map((blockObject, key) = (
                    <Block title={blockObject.title} description={blockObject.description} key={key}/>
                ))
            }
        </div>
    </main>
)

export default Page;
   
