import React, { useState, useEffect } from 'react';

// we fetch the value and that depends on what has been searched in Search
//we need App component(parent)to pass values as both Search and Result is there together(=intermediate communicator?)
function listItem(label, value) {
  return (
    <li>
      <span>{label}</span>
      <span>{value}</span>
    </li>
  );
}

const Result = ({ search }) => {
  const [fetchResult, setFetchResult] = useState('');

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

  if (!fetchResult) {
    return null;
  }

  if (fetchResult.cod === 200 && fetchResult) {
    return (
      <div>
        <h4>Weather Details {`of ${fetchResult.name}`}</h4>
        <ul>
          {listItem('Location', fetchResult.name)}
          {listItem('Description', fetchResult.weather[0].main)}
          {listItem('Humidity', `${fetchResult.main.humidity} %`)}
          {listItem('Tempature', `${fetchResult.main.temp} °C`)}
          {listItem('Max tempature', `${fetchResult.main.emp_max} °C`)}
          {listItem('Min tempature', `${fetchResult.main.temp_min} °C`)}
        </ul>
      </div>
    );
  }
};

export default Result;
