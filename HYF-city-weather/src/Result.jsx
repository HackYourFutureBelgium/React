import React, { useState, useEffect } from 'react';

const Result = ({ search }) => {
  let [location, setLocation] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [maxTemperature, setMaxTemperature] = useState(null);
  let [minTemperature, setMinTemperature] = useState(null);

  useEffect(() => {
    if (search) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric`,
      )
        .then(res => res.json())
        .then(result => {
          setLocation(result.name);
          setDescription(result.weather[0].description);
          setHumidity(result.main.humidity + '%');
          setTemperature(result.main.temp + '°C');
          setMaxTemperature(result.main.temp_max + '°C');
          setMinTemperature(result.main.temp_min + '°C');
        })
        .catch(err => console.log(err));
    }
  }, [search]);
  return (
    <ul>
      <li>
        <span>Key</span>
        <span>
          <b>Value</b>
        </span>
      </li>
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
        <span>{humidity}</span>
      </li>
      <li>
        <span>Temperature</span>
        <span>{temperature}</span>
      </li>
      <li>
        <span>Max Temperature</span>
        <span>{maxTemperature}</span>
      </li>
      <li>
        <span>Min Temperature</span>
        <span>{minTemperature}</span>
      </li>
    </ul>
  );
};

export default Result;
