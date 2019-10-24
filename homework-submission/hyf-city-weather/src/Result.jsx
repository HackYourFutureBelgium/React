import React, { useState, useEffect } from 'react';

// we will fetch the value and that depends on what has been searched in Search
//we need App component(parent)to pass values as both Search and Result is there together(=intermediate communicator?)
const Result = ({ search }) => {
  const [fetchResult, setFetchResult] = useState(null);
  useEffect(() => {
    if (search) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric`,
      )
        .then(res => res.json())
        .then(result => {
          setFetchResult(result);
        })
        .catch(function(error) {
          console.error('Error:', error);
        });
    }
  }, [search]);

  return (
    <ul>
      <li>
        <span>Key </span>
        <span>Value </span>
      </li>
    </ul>
  );
};

export default Result;
