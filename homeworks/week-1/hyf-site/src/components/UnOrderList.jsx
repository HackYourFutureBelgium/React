import React from 'react';

const UnOrderList = (props) =>(
  <ul>
      {
        props.items.map((item, key) => (
          <li key={key}> {item}  </li>
        ))
      }
  </ul>
);

export default UnOrderList;