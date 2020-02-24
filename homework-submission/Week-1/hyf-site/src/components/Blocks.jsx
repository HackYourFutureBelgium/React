import React from 'react'

const Blocks = ({blocks})=> {

    if (blocks === undefined)
    return null; 

return (
<div className = "page__blocks">
    {
        blocks.map( block =>  (
         
            <div className = "block">
            <h2 className = "block__title"> {block.title}</h2> 
            <div className = "block__body"> {block.description} </div>
            </div>
    )
        )}

</div>

)};

export default Blocks;