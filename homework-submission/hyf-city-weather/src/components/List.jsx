import React from 'react'

function ListItem({ label, value }) {
  return <li><span>{label}</span><span>{value}</span></li>
}

const List = ({ fetchResults, errResults }) => {
  if (errResults) { return <h1>ERROR</h1> }
  else if (!fetchResults) { return null }
  else if (fetchResults.cod !== 200) { return <p>{`Error: ${fetchResults.message}`}</p> }
  else {
    const {
      main: { humidity,
        temp: temperature,
        temp_max: max_temperature,
        temp_min: min_temperature },
      name,
      weather: [{ description }] } = fetchResults

    return (
      <ul>
        <ListItem label='name' value={name} />
        <ListItem label='description' value={description} />
        <ListItem label='humidity' value={humidity} />
        <ListItem label='temperature' value={temperature} />
        <ListItem label='Max temperature' value={max_temperature} />
        <ListItem label='Min temperature' value={min_temperature} />
      </ul>
    )
  }
}

export default List
