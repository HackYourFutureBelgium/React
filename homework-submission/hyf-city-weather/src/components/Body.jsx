import React from 'react';
import ListItem from './ListItem';

const Body = ({ fetchResult }) => {
  console.log(fetchResult);
  if (fetchResult) {
    const {
      name,
      main: { humidity, temp: temperature, temp_max: maxTemperature, temp_min: minTemperature },
      weather: [{ description }],
    } = fetchResult;

    return (
      <ul>
        <ListItem header="location" value={name} />
        <ListItem header="description" value={description} />
        <ListItem header="humidity" value={humidity} />
        <ListItem header="temperature" value={temperature} />
        <ListItem header="max-temperature" value={maxTemperature} />
        <ListItem header="min-temperature" value={minTemperature} />
      </ul>
    );
  }
  return null;
};

export default Body;
