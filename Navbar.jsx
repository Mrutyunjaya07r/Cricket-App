import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className="cointainer" style={{height:"80px",display:"flex"}}>
            <div className="photo" style={{margin:"7px"}}></div>
            <Link to="/" style={{margin:"20px"}}>Cricket</Link>
            <Link to="/Favoritematch" style={{margin:"20px"}}>Favorite Match</Link>
            <Link to="/About" style={{margin:"20px"}}>About us</Link>
        </div>
    </div>
  )
}

export default Navbar