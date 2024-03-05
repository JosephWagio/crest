import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseOutline } from 'react-icons/io5';

import Logo from '../../../assets/Logo.png'
import "./Navbar.css"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClose = () => {
    setToggleMenu((prev) => !prev)
  }

  return (
    <div className='navbar'>
      <div className="navbar-links_logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-links_container">
        <ul className='navbar-links'>
          <li className='p__opensans'><Link to="/">Home</Link></li>
          <li className='p__opensans'><Link to="/services">Services</Link></li>
          <li className='p__opensans'><a href="#features">Features</a></li>
          <li className='p__opensans'><a href="#aboutus">About Us</a></li>
        </ul>
      </div>
      <div className="navbar-signup">
        <p><Link to="/signin">Login</Link></p>
        <button className='button'><Link to="/signup">Signup</Link></button>
      </div>

      <div className="navbar-menu">
        <MdOutlineMenu color='#FFD700' fontSize={35} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <IoCloseOutline fontSize={45} className='container__close' onClick={() => setToggleMenu(false)} />
            <div className="navbar-menu_container-links">
              <ul className='navbar-menu-links'>
                <li className='p__opensans'><Link to="/" onClick={handleClose}>Home</Link></li>
                <li className='p__opensans'><Link to="/services" onClick={handleClose}>Services</Link></li>
                <li className='p__opensans'><a href="#features" onClick={handleClose}>Features</a></li>
                <li className='p__opensans'><a href="#testimonials" onClick={handleClose}>About Us</a></li>
              </ul>
              <div className="navbar-menu_container-links-signup">
                <p><Link to="/signin">Login</Link></p>
                <button className='button'><Link to="/signup">Signup</Link></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;