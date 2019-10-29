import React, {useState, useEffect} from 'react';
import UnOrderedList from './UnOrderedList';

const Result = ({ searchValue }) => {
  const [fetchResult, setFetchResult] = useState(null);

// use effect
  useEffect(() => {
    console.log('use effect called')
    fetch(`https://api.myjson.com/bins/ofhd0`)
      .then(response => response.json())
      .then((result) => {
        setFetchResult(result);
      })
      .catch(err => console.log(err));
  }, []);

  if (!fetchResult) return null;
  return ( 
    <UnOrderedList fetchResult={fetchResult} searchValue={searchValue}/>
  ); 
}

export default Result;