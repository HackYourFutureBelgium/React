import React from 'react';

const Body = ({ fetchResult }) => {
  let location, description, humidity, temperature, maxTemperature, minTemperature;

  if (!fetchResult) {
    return null;
  } else if (fetchResult) {
    location = fetchResult.name;
    description = fetchResult.weather[0].description;
    humidity = fetchResult.main.humidity;
    temperature = fetchResult.main.temp;
    maxTemperature = fetchResult.main.temp_max;
    minTemperature = fetchResult.main.temp_min;
  }
  return (
    <ul>
      <li>
        <span>Location</span>
        <span>{location}</span>
      </li>
      <li>
        <span>Description</span>
        <span>{description}</span>
      </li>
      <li>
        <span>Humidity</span>
        <span>{humidity + '%'}</span>
      </li>
      <li>
        <span>temperature</span>
        <span>{temperature + '°C'}</span>
      </li>
      <li>
        <span>Max temperature</span>
        <span>{maxTemperature + '°C'}</span>
      </li>
      <li>
        <span>Min temperature</span>
        <span>{minTemperature + '°C'}</span>
      </li>
    </ul>
  );
};

export default Body;
