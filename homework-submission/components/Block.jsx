import React from 'react';

const Block = (props) => (

<div className="block">
    <h2 className="block_title">{props.title}</h2>
    <div className="block_body">{props.description}</div>
</div>

)
    
export default Block;