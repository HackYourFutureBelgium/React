import React from 'react';
import UnOrderedList from './UnOrderedList';
import {useFetchWeatherData} from './hooks/fetch'

const Result = ({ search }) => {
  const fetchResults= useFetchWeatherData(search);
  return fetchResults && fetchResults.error ? (<h3>Error in fetching or City Not Found</h3>) :
    <UnOrderedList fetchResults={fetchResults} />
};

export default Result;
