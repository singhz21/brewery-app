// This component contains brewery details

import { Link } from 'react-router-dom'

const Breweries = (props) => {

  return (
    <div className="breweries-card-container">
      <div className="brewery brewery-card-small">
        <p><strong>Name:</strong> {props.name}</p>
        <p><strong>Brewery Type:</strong> {props.brewery_type}</p>
        <p><strong>City:</strong> {props.city}</p>
      </div>
      <Link to={`/${props.id}`}>
        <button className="btn" id="view-btn">View Details</button>
      </Link>
    </div>
  )
}

export default Breweries
