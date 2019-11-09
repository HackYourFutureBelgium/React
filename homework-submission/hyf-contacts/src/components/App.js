import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar.jsx'
import '../App.css'

const App = () => {
  const [fetchResults, setfetchResults] = useState(null)
  useEffect(() => {
    fetch(`https://api.myjson.com/bins/ofhd0`)
      .then(res => res.json())
      .then(res => setfetchResults(res))
      .catch(function (err) {
        console.log(err)
      })
  }, [])
  return (
    <div className='main'>
      <Sidebar results={fetchResults} />
    </div>
  )
}

export default App
