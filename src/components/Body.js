import React from 'react'
import Breweries from './Breweries'
import { useState, useEffect } from "react"
import axios from 'axios'

const Body = () => {

  const [query, setQuery] = useState("")
  const [brewery, setBrewery] = useState([])

  const fetchBrewery = async () => {
    const getBrew = await axios.get("https://api.openbrewerydb.org/breweries")
    setBrewery(getBrew.data)
  }
  
  useEffect(() => {
   fetchBrewery()
  }, [])

  return (
    <div>
      <form className="search-header">
        <h1>Brewery App</h1>
        <br/>
        <input className="search-bar" placeholder="Search by entering brewery name here..." onChange={e => setQuery(e.target.value)} />
      </form>
        <br/>
        <br/>

        {
          brewery.filter(item => {
            if (query === "") {
              return item
            } else if (item.name.toLowerCase().includes(query.toLowerCase())){
              return item
            }
        }).map((item) => (
          <Breweries name={item.name} brewery_type={item.brewery_type} city={item.city} id={item.id} />
        ))
}


    </div>
  )
}

export default Body
