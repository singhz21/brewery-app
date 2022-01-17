// This component will contain the search bar and button

import React, { useState } from 'react'

const Search = () => {

  const [search, setSearch] = useState("")

  function handleSearch(e) {
    e.preventDefault()
    console.log(search)
    
    //Add and run actual search function
    //...here...
  }

  return (
    <form className="search-header" onSubmit={handleSearch}>
      <h1>Brewery App</h1>
      <br/>
      <input className="search-bar" type="Search" placeholder="Enter brewery name here..." value={search} onInput={(e) => setSearch(e.target.value)} />
      <button className="btn search-btn" type="submit">Search Brewery</button>
    </form>
  )
}

export default Search
