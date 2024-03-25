import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseOutline } from 'react-icons/io5';

import Logo from '../../../assets/Logo.png'
import "./Navbar.css"
import AuthContext from "../../../context/AuthContext"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const {user, logoutUser} = useContext(AuthContext)
  console.log(user)

  const handleClose = () => {
    setToggleMenu((prev) => !prev)
  }

  const handleActiveLink = (link)=> {
    setActiveLink(link)
  }

  return (
    <>
    <div className='navbar'>
      <div className="navbar-links_logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-links_container">
        <ul className='navbar-links'>
          <li className={activeLink === "Home" ? "p__opensans active" : "p__opensans"}><Link to="/" onClick={() => handleActiveLink("Home")}>Home</Link></li>
          <li className={activeLink === "Services" ? "p__opensans active" : "p__opensans"}><Link to="/services" onClick={() => handleActiveLink("Services")}>Services</Link></li>
          <li className='p__opensans'><a href="#features">Features</a></li>
          <li className='p__opensans'><a href="#aboutus">About Us</a></li>
          <li className='p__opensans'><a href="#plans">Packages</a></li>
        </ul>
      </div>
      {user ? (
        <div className="navbar-menu_container-links-signup">
          <p><Link to="/dashboard">Dashboard</Link></p>
          <button className='button' onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <div className="navbar-menu_container-links-signup">
          <p><Link to="/signin">Login</Link></p>
          <button className='button'><Link to="/signup">Signup</Link></button>
        </div>
      )}

      <div className="navbar-menu">
        <MdOutlineMenu color='#FFD700' fontSize={35} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <IoCloseOutline fontSize={45} className='container__close' onClick={() => setToggleMenu(false)} />
            <div className="navbar-menu_container-links">
              <ul className='navbar-menu-links'>
                <li className={activeLink === "Home" ? "p__opensans active" : "p__opensans"}><Link to="/" onClick={handleClose}>Home</Link></li>
                <li className={activeLink === "Services" ? "p__opensans active" : "p__opensans"}><Link to="/services" onClick={handleClose}>Services</Link></li>
                <li className='p__opensans'><a href="#features" onClick={handleClose}>Features</a></li>
                <li className='p__opensans'><a href="#aboutus" onClick={handleClose}>About Us</a></li>
                <li className='p__opensans'><a href="#plans" onClick={handleClose}>Packages</a></li>
              </ul>
              {user ? (
                <div className="navbar-menu_container-links-signup">
                  <p><Link to="/dashboard">Dashboard</Link></p>
                  <button className='button' onClick={logoutUser}>Logout</button>
                </div>
              ) : (
                <div className="navbar-menu_container-links-signup">
                  <p><Link to="/signin">Login</Link></p>
                  <button className='button'><Link to="/signup">Signup</Link></button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default Navbar;