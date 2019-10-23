import React, { useState ,  useEffect}from 'react';
import UnOrderList from './UnOrderList';

const Result = ({ search }) => {
  const [fetchResults, setFetchResults] = useState(null);

  useEffect(() => {
    if (search) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=36254bd57bf0ff2d00f95dcf2f4fed3e&units=metric`)
        .then(response => response.json())
        .then((result) => {
          setFetchResults(result);
        })
        .catch(err=> console.log(err));
    }
  }, [search])

  return (
    <UnOrderList fetchResults={fetchResults} />
  );
};

export default Result;
