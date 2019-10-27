import React from 'react';
import Blocks from './Blocks'
import Lists from './Lists'

function Content({info}) {
  return (

    <main>
        <div className="page__title"> 
            {info.title}
        </div>

        <div className = "page__body">
            {info.description}
            <Lists items={info.items} />
        </div>

        <div>
            <Blocks blocks={info.blocks}/>

        </div>

    </main>
   
  );
}

export default Content;