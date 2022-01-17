import React from 'react'
import Search from './Search'
import Breweries from './Breweries'
import { useState, useEffect } from "react"
import axios from 'axios'

const Body = () => {

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
      <Search props={brewery}/>
      <br />
      <br />
      {brewery.map((item) => (
        <Breweries name={item.name} brewery_type={item.brewery_type} city={item.city} id={item.id}/>
       ) )
      }
    </div>
  )
}

export default Body
