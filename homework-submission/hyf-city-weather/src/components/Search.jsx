import React, { useState } from 'react'

const Search = ({ setSearch }) => {
  const [value, setValue] = useState("")
  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      setSearch(value)
    }}>
      <label
        htmlFor="search">Search The Weather of Any City
      </label>
      <input
        value={value}
        onChange={(event) =>
          setValue(event.target.value)}
        name="Search"
        type="Search"
      />
      <input
        type="Submit"
        value="Search"
      />
    </form >
  )
}

export default Search
