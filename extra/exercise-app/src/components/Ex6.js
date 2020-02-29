import React, {useState} from 'react';

const Ex6 = () => {
    
    const [hover, setHover] = useState(0)
    
    return (
        <div>
            <h1>{hover} times hovered!</h1>
            <button onMouseOver = {() => {setHover(hover + 1)}}>Hover Over Me</button>
        </div>
    )
}
export default Ex6