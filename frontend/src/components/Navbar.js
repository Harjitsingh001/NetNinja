import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
      <div className='container'>
        <Link to="/">
          <h1>
            Workout Buddy <i class='fas fa-dumbbell' style={{fontsize:"36px"}}></i>

          </h1>
        </Link>
      </div>

    </header>)
}

export default Navbar