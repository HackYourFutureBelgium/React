import React from 'react'
/*
function listItem(label, value) {
  return <li><span>{label}</span>:&nbsp;&nbsp;<span>{value}</span></li>
}
*/
const ListItem = ({keyValue, value})=> {
return (<div><li><span>{keyValue}</span>:&nbsp;&nbsp;<span>{value}</span></li></div>)
}

const List = ({ fetchResults }) => {
  if (!fetchResults) { return null }
  else if (fetchResults.cod !== 200) { return <p>{`Error: ${fetchResults.message}`}</p> }
  else {
    const {
      main: { humidity, temp, temp_max, temp_min },
      name, weather } = fetchResults
    const { description } = weather[0]
/*
    return (
      <ul>
      
        {ListItem('Location', name)}
        {listItem('Description', description)}
        {listItem('Humidity', `${humidity}%`)}
        {listItem('Temperature', `${temp}°C`)}
        {listItem('Max temperature', `${temp_max}°C`)}
        {listItem('Min temperature', `${temp_min}°C`)}
      
      </ul>
    )
*/
      return (
      <ul>
         <ListItem keyValue="Location" value ={name}/>
         <ListItem keyValue="Description" value ={description}/>
         <ListItem keyValue="Humidity" value ={humidity}/>
         <ListItem keyValue="Temperature" value ={temp}/>
         <ListItem keyValue="Max temperature" value ={temp_max}/>
         <ListItem keyValue="Min temperature" value ={temp_min}/>
      </ul>
       
      )  
  }
}

export default List
