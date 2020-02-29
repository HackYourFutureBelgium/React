import React, {useState} from 'react';

const Ex7 = () => {
    
    const [color, setColor] = useState('')
    const handleYellowClick = () => {
        if(color !== 'yellow') {
            setColor('YELLOW')
        } 
    }
    const handleGreeClick = () => {
        if(color !== 'green') {
            setColor('GREEN')
        }
    }
    const handleBlueClick = () => {
        if(color !== 'blue') {
            setColor('BLUE')
        }
    }
    return (
        <div>
            <p>'{color}'</p>
            <button onClick = {handleYellowClick}>yellow</button>
            <button onClick = {handleGreeClick}>green</button>
            <button onClick = {handleBlueClick}>blue</button>
        </div>
    )
};

export default Ex7