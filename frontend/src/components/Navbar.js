import React from 'react'
// import { Link } from 'react-router-dom'
import"./Navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className='main'>
      <div className='container'>
          <div>
            <Link to='/'>
            <h1 >
            Workout Buddy 
          </h1></Link>
          </div>

          <div className='nav-headings'>
            <h3>About</h3>
            <h3>contact me </h3>
          </div>

      </div>

    </header>)
}

export default Navbar