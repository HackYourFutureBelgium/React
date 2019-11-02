import React, { useState, useEffect } from 'react';

const ListWeather = ({ description, val }) => (
  <li>
    <span>{description + ': '}</span>
    <span>{val}</span>
  </li>
);

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
  
  if (response) {
    if (response.cod === 200) {
      const {
        main: { humidity, temp, temp_max, temp_min },
        name,
        weather: [{ main: description }],
      } = response;
      return (
        <ul>
          <ListWeather description="City" val={name} />
          <ListWeather description="Description" val={description} />{' '}
          <ListWeather description="Humidity" val={humidity + '%'} />
          <ListWeather description="Temperature" val={temp + ' °C'} />
          <ListWeather description="Max. temperature" val={temp_max + '°C'} />
          <ListWeather description="Min. temperature" val={temp_min + '°C'} />
        </ul>
      );
    } else {
      return <p>{`Error: ${response.message}`}</p>;
    }
  }
  return null;
};

export default Result;