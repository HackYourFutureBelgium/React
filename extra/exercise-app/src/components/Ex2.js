import React, {useState} from 'react';

const Ex2 = () => {
const [count, setCount] = useState(0);
return(
    <section>
     <h1> {count} </h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
     </section>
 
)
}

export {Ex2}