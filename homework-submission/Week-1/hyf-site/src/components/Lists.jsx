import React from 'react'

const Lists = ({items})=> {

    if (items === undefined)
    return null; 

return (

    <ul>

    {
        items.map( item  =>  (
         
            
            <li> {item} </li> 
            
    )
        )}

</ul>

)};

export default Lists;