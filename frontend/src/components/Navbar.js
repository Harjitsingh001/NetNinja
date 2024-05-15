import React from 'react'
import { BrowserRouter,Route,Router,Link } from 'react-router-dom';
import"./Navbar.css";

const Navbar = () => {
  return (
    <header className='main'>
      <div className='container'>
          <div>
            <Link to='/'>
            <h1>
            Workout Buddy 
          </h1></Link>
          </div>

          <div className='nav-headings'>
            <Link to="/about"><h3>About</h3></Link>
            <Link to="/team"><h3>Our Team</h3></Link>
            <Link to="/contact"><h3>Contact</h3></Link>


          </div>

      </div>

    </header>)
}

export default Navbar