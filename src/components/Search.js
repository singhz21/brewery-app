// This component will contain the search bar and button

import React, { useState } from 'react'

const Search = (props) => {

  console.log(props)

  const [search, setSearch] = useState("")

  function handleSearch(e) {
    e.preventDefault()
    console.log('event',e)
    let value = e.target.value
    console.log('value', value)
    let filter = props.filter(items => {
      return items.name.toLowerCase().includes(value.toLowerCase())
    })
    console.log('filter', filter)
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
