// This component contains brewery details

import React, { useState } from 'react'

const Breweries = () => {

  const [name, brewery_type, city] = useState("")
  return (
    <div className="breweries-card-container">
      <div className="brewery brewery-card-small">
        <p>Name: {name}</p>
        <p>Brewery Type: {brewery_type}</p>
        <p>City: {city}</p>
      </div>
    <button className="btn" id="view-btn">View Details</button>
    </div>
  )
}

export default Breweries
