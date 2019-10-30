import React,{ useState, useEffect } from 'react';
import List from './List.jsx'


// if(result){ let {name , main: {temp, humidity, temp_max, temp_min}, weather:[{description}]} = result;}

const List = () => 


const Result = ({search}) =>  {
let [result, setResult] =useState('');


useEffect(() =>{
    if (search)
    {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=9ae5bc7abbf74093cf71d04f0bdfe9c7&units=metric`,)

.then(res => res.json())
.then(response => {
    setResult(response);



   })
.catch(function(err) {console.log(err)} );
}
},
[search]);

return (
    <ul>
      <li>
        <span>Location</span>
        <span>{name}</span>
      </li>
    </ul>
  )
    }


export default Result;