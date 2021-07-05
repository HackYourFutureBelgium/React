import React from 'react';

function ListItem({label, value}) {
  return  <li><span>{label}</span><span>{value}</span></li>;
}

const UnOrderedList = ({ fetchResults }) => {
  if (!fetchResults) return null;
  const {
    main: {
      humidity,
      temp:temperature,
      temp_max,
      temp_min },
    name,
    weather:[{description}]
  } = fetchResults;

  return (
    <ul>
      <ListItem label='location' value={name} />
      <ListItem label='description' value={description}/>
      <ListItem label='humidity' value={`${humidity}%`}/>
      <ListItem label='temperature' value={`${temperature}°C`}/>
      <ListItem label='Max temperature' value={`${temp_max}°C`}/>
      <ListItem label='location' value={`${temp_min}°C`}/>
    </ul>
  )
};

export default UnOrderedList;