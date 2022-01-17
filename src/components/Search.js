// This component will contain the search bar and button

import React, { useState } from 'react'

const Search = (filterBrew) => {


  const [search, setSearch] = useState("")

  function handleSearch(e) {
    e.preventDefault()
    console.log('event',e)
    let value = e.target.value
    setSearch(value)
  }

  return (
    <form className="search-header" onChange={handleSearch}>
      <h1>Brewery App</h1>
      <br/>
      <input className="search-bar" type="Search" placeholder="Enter brewery name here..." onChange={(e)=>e.tagert.value} />
      <button className="btn search-btn" type="submit">Search Brewery</button>
    </form>
  )
}

export default Search
