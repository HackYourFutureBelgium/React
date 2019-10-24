import React, { useState, useEffect } from 'react';
import Body from './Body';

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
        .catch(err => console.log(err));
    }
  }, [search]);

  return <Body fetchResult={fetchResult} />;
};

export default Result;
