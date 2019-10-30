import React,{ useState, useEffect } from 'react';


const Result = ({search}) =>  {
const [ fetchResult = [
    {
        Location: undefined,
        Description: undefined,
        Temperature: undefined,
        Humidity: undefined,
        Max_Temperature: undefined,
        Min_Temperature: undefined
    },
    ], 
    setFetchResult,
]= useState('');

useEffect(() =>{
    if (search)
    {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=9ae5bc7abbf74093cf71d04f0bdfe9c7&units=metric`,)

.then(res => res.json())
.then(result => {
    setFetchResult({
        Location: result.name,
        Description: result.weather[0].description,
        Temperature: result.main.temperature,
        Humidity: result.main.humidity,
        Max_Temperature: result.main.temp_max,
        Min_Temperature: result.main.temp_min
    });
   })
.catch(function() {} );
}
},
[search]);

return (
    <ul>
      <List fetchResults={fetchResults} />
    </ul>
  )
    }


export default Result;