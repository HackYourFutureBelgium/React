import React, { useState, useEffect } from 'react';

function listWeather(description, val) {
  return (
    <li>
      <span>{description + ': '}</span>
      <span>{val}</span>
    </li>
  );
}

const Result = ({ search }) => {
  const [response, setResponse] = useState('');
  useEffect(() => {
    if (search) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric`,
      )
        .then(data => data.json())
        .then(res => {
          setResponse(res);
          return res;
        })
        .then(response => {
          console.log(response);
        })
        .catch(err => console.warn('Error: ', err));
    }
  }, [search]);

  if (response.cod === 200 && response) {
    return (
      <ul>
        {listWeather('City', response.name)}
        {listWeather('Description', response.weather[0].main)}
        {listWeather('Humidity', `${response.main.humidity}%`)}
        {listWeather('Temperature', `${response.main.temp}°C`)}
        {listWeather('Max. temperature', `${response.main.temp_max}°C`)}
        {listWeather('Min. temperature', `${response.main.temp_max}°C`)}
      </ul>
    );
  } else if (response.cod !== 200 && response) {
    return <p>{`Error: ${response.message}`}</p>;
  } else if (!response) {
    return null;
  }
};

export default Result;
