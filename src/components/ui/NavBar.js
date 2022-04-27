import React from 'react';
import './styles.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to="/homepage"><img className='reactaurant-logo' src={logo} alt={logo} /> </Link>
      <ul className='links'>
        <Link to="/homepage"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/products"><li>Products</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </header>
  )
}

export default NavBar;