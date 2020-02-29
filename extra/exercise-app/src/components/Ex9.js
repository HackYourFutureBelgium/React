import React, {useState} from 'react';

const Ex9 = () => {
    let text = 'Me'
    const [count, setCount] = useState('This is')
    console.log(count)
    let i
    for (i = 0; i < text.length; i++) {
        
      }
    return (
        <div>
            <p>{count}</p>
            <button onClick = {() => setCount(text)}>Previous</button>
            <button onClick = {() => setCount(text)}>Next</button>
        </div>
    )
};

export default Ex9;