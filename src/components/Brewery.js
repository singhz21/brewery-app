// This component contains elements to populate a simple brewery information card

import React from 'react'

const Brewery = () => {
  return (
    <div className="brewery-big-container">
      <div className="brewery-card-big brewery">
        <h3>Brewery details:</h3><br/>
        <p>name: "Almanac Beer Company",</p>
        <p>brewery_type: "micro",</p>
        <p>street: "651B W Tower Ave",</p>
        <p>address_2: null,</p>
        <p>address_3: null",</p>
        <p>city: "Alameda",</p>
        <p>state: "California",</p>
        <p>county_province: null,</p>
        <p>postal_code:</p>
      </div>
      <button className="btn" id="back-btn">Go Back</button>
    </div>
  )
}

export default Brewery
