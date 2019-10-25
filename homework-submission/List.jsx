import React from 'react'

function listItem(label, value) {
  return <li><span>{label}</span>:&nbsp;&nbsp;<span>{value}</span></li>
}

const List = ({ fetchResults }) => {
  if (!fetchResults) { return null }
  else if (fetchResults.cod !== 200) { return <p>{`Error: ${fetchResults.message}`}</p> }
  else {
    const {
      main: { humidity, temp, temp_max, temp_min },
      name, weather } = fetchResults
    const { description } = weather[0]

    return (
      <ul>
        {listItem('Location', name)}
        {listItem('Description', description)}
        {listItem('Humidity', `${humidity}%`)}
        {listItem('Temperature', `${temp}°C`)}
        {listItem('Max temperature', `${temp_max}°C`)}
        {listItem('Min temperature', `${temp_min}°C`)}
      </ul>
    )
  }
}

export default List;