import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png'; // Import the close icon


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (

    <nav className='navbar'>
      <a href="https://maseelshah.com" className='logo'>
        <div className='logoDiv' >
          MaseelShah
        </div>
      </a>

      

      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
          Home
        </Link>
        <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-130} duration={500} className='desktopMenuListItem'>
          About
        </Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-130} duration={500} className='desktopMenuListItem'>
          Portfolio
        </Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={500} duration={500} className='desktopMenuListItem'>
          Contact
        </Link>
      </div>

      <img src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
        <img src={close} alt='Close' className='closeMenu' onClick={() => setShowMenu(false)} />
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>
          Home
        </Link>
        <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-130} duration={500} className='listItem' onClick={() => setShowMenu(false)}>
          About
        </Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>
          Portfolio
        </Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>
          Contact
        </Link>
      </div>
    </nav>
    
  );
};

export default Navbar;
