import React from 'react'

import Logo from "../../assets/logo2.png"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className='sidebar__content'>
        <ul>
          <li>
            <Link>Dashboard</Link>
          </li>
          <li>
            <Link>Wallet</Link>
          </li>
          <li>
            <Link>Deposit</Link>
          </li>
          <li>
            <Link>Withdraw</Link>
          </li>
          <li>
            <Link>Referral</Link>
          </li>
          <li>
            <Link>Settings</Link>
          </li>
        </ul>
        <button>Guide</button>
      </div>
    </div>
  )
}

export default Sidebar