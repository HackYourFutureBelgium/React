import React, {useState} from 'react';

const Ex1 = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
          <p>the button was clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }

export {Ex1}

