import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const[showMenu,setShowMenu]= useState(false);
  return (
    
    <nav className='navbar'>
      {/* <a href="#intro" duration={500}>
      
      </a> */}
      {/* scrolling  */}
      
      {/* <Link activeClass='active'to='intro'spy={true} smooth={true} offset={-100} duration={500} className='logoLink'> */}
      <a href="https://maseelshah22.github.io/portfolio/">
        <div className='logo'>
          <img src={logo} alt='Logo' className='logo' />
          </div>
          </a>
        {/* </Link> */}

      <div className='desktopMenu'>
        <Link activeClass='active'to='intro'spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
          Home
        </Link>
        <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>
          About
        </Link>
        <Link activeClass='active' to='works' spy={true}  smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>
          Portfolio
        </Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={500} duration={500} className='desktopMenuListItem'>
          Contact Me
        </Link>

      </div>

      {/* <button
        className='desktopMenuButton'
        onClick={() => {
          document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth' });
        }}>
        <img src={contactImg} alt='' className='desktopMenuImg' />
        Contact Me
      </button> */}

      <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
      <div className='navMenu' style={{display: showMenu ? 'flex': 'none'}}>
        <Link activeClass='active'to='intro'spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>
          Home
        </Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>
          About
        </Link>
        <Link activeClass='active' to='works' spy={true}  smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>
          Portfolio
        </Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>
          Contact Me
        </Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;

