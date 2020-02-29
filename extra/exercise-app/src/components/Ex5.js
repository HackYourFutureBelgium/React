import React, {useState} from 'react';

const Ex5 = () => {
    
    const [out, setOut] = useState('Out')
    const handleMouse = () =>{
        if(out === 'Out') {
            setOut('In')
        } else if (out === 'In') {
            setOut('Out')
        }
    }
    return (
        <div>
            <h1>{out}</h1>
            <button onMouseOver = {handleMouse}>Hover Over Me</button>
        </div>
    )
}
export default Ex5