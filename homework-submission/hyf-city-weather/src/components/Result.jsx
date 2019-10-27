import React, { useState, useEffect } from 'react'
import List from './List'

const Result = ({ search }) => {
  const [fetchResults, setFetchResults] = useState(null)
  const [error, setError] = useState(false)
  useEffect(() => {
    if (search) {
      setError(false);
      
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=02e9f92dd9f823a05877c24d7f4180cd&units=metric/`)
      .then(result => result.json())
      .then(result => {
       setFetchResults(result);
      })
      .catch(error => setError(true));
  }
}, [search]);

  return (
    <ul>
      <List fetchResults={fetchResults} />
    </ul>
  )
}

export default Result
