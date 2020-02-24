import React, { useState, useEffect } from 'react';
import Search from './Search';

const Result = ({ search }) => {
  const [
    fetchResult = [
      {
        Location: undefined,
        Description: undefined,
        Temperature: undefined,
        Humidity: undefined,
        Max_Temperature: undefined,
        Min_Temperature: undefined,
      },
    ],
    setFetchResult,
  ] = useState('');

  useEffect(() => {
    if (search) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=9ae5bc7abbf74093cf71d04f0bdfe9c7&units=metric`,
      )
        .then(res => res.json())
        .then(result => {
          setFetchResult({
            Location: result.name,
            Description: result.weather[0].description,
            Temperature: result.main.temp,
            Humidity: result.main.humidity,
            Max_Temperature: result.main.temp_max,
            Min_Temperature: result.main.temp_min,
          });
        })

        .catch(function() {});
    }
  }, [search]);

  return (
    <ul>
      <li>
        <span>Location: </span> <span>{fetchResult.Location}</span>
      </li>
      <li>
        <span> Description:</span> <span>{fetchResult.Description}</span>
      </li>
      <li>
        <span> Humidity:</span> <span>{fetchResult.Humidity}</span>
      </li>
      <li>
        <span> Temperature:</span> <span>{fetchResult.Temperature}</span>
      </li>
      <li>
        <span> Max Temperature: </span> <span>{fetchResult.Max_Temperature}</span>
      </li>
      <li>
        <span> Min Temperature: </span> <span>{fetchResult.Min_Temperature}</span>
      </li>
    </ul>
  );
};

export default Result;
