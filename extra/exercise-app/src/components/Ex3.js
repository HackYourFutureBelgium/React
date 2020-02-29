import React, {useState} from 'react';

const Ex3 = () => {
  const [count, setCount] = useState(0);
 return (
      <div>
        {count % 3 ? <p>{count} times</p> : <p>Fizz</p>}  
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  

export {Ex3}

