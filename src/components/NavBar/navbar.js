import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">

      <img src={logo} alt="Logo" className='logo' />

      <div className="desktopMenu"></div>
      <Link className="desktopMenuListItem">Home</Link>
      <Link className="desktopMenuListItem">About</Link>
      <Link className="desktopMenuListItem">Portfolio</Link>
      <Link className="desktopMenuListItem">Client</Link>

      <button className="desktopMenuButton">

        <img src="" alt="" className="desktopMenuImg" /> Contact Me


      </button>

    </nav>
  )
}
export default Navbar;



