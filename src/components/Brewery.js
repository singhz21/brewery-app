// This component contains elements to populate a simple brewery information card

import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

const Brewery = ( props ) => {
  
  const { id } = useParams()

  const [brewery, setBrewery] = useState([])

  const fetchBrewery = async () => {
    const getBrew = await axios.get(`https://api.openbrewerydb.org/breweries/${id}`)
    setBrewery(getBrew.data)

  }

  useEffect(() => {
   fetchBrewery()
  }, [])
  
  return (
    <div className="brewery-big-container">
      <div className="brewery-card-big brewery">
        <h3>Brewery details:</h3><br/>
        {brewery.name !== null && <p><strong>name:</strong> {brewery.name},</p>}
        {brewery.brewery_type !== null && <p><strong>brewery_type:</strong> {brewery.brewery_type},</p>}
        {brewery.street !== null && <p><strong>street:</strong> {brewery.street},</p>}
        {brewery.address_2 !== null && <p><strong>address_2:</strong> {brewery.address_2},</p>}
        {brewery.address_3 !== null && <p><strong>address_3:</strong> {brewery.address_3},</p>}
        {brewery.city !== null && <p><strong>city:</strong> {brewery.city},</p>}
        {brewery.state !== null && <p><strong>state:</strong> {brewery.state},</p>}
        {brewery.county_province !== null && <p><strong>county_province:</strong> {brewery.county_province},</p>}
        {brewery.postal_code !== null && <p><strong>postal_code:</strong> {brewery.postal_code}</p>}
      </div>
      <Link to="/">
      <button className="btn" id="back-btn">Go Back</button>
      </Link>
    </div>
  )
}

export default Brewery
