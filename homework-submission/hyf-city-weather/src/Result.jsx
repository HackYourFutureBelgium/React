import React, { useState, useEffect } from 'react';
import List from './List';
const Result = ({ search }) => {
  const [fetchResult, setFetchResult] = useState('');
  useEffect(() => {
    if (search) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric`,
      )
        .then(res => res.json())
        .then(result => {
          setFetchResult({
            Location: result.name,
            Description: result.weather[0].description,
            Temperature: result.main.temperature,
            Humidity: result.main.humidity,
            Max_Temperature: result.main.temp_max,
            Min_Temperature: result.main.temp_min,
            cod: result.cod,
          });
        })
        .catch(function() {});
    }
  }, [search]);
  if (fetchResult.cod === 200) {
    return (
      <React.Fragment>
        <span>Weather details</span>
        <List data={`Location: ${fetchResult.Location}`} />
        <List data={`Humidity: ${fetchResult.Humidity}`} />
        <List data={`Temperature: ${fetchResult.Temperature} °C`} />
        <List data={`Max temperature: ${fetchResult.Max_Temperature} °C`} />
        <List data={`Max temperature: ${fetchResult.Min_Temperature} °C`} />
      </React.Fragment>
    );
  } else {
    return 'Enter your city';
  }
};

export default Result;
