import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { BiBarChartAlt2 } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

import Logo from "../../assets/logo2.png"
import './Sidebar.css';

const SidebarMenu = () => {
  return (
    <>
      <div className='sidebar'>
        <div className="sidebar-container">
          <div className="sidebar-logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="sidebar-link-list">
            <NavLink
              to="home"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
            }
            >
              <GoHome/>
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              to="/investment"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
            }
            >
              <BiBarChartAlt2/>
              <span>Investment</span>
            </NavLink>
            <NavLink
              to="/deposit"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
            }
            >
              <IoWalletOutline/>
              <span>Deposit</span>
            </NavLink>
            <NavLink
              to="/withdraw"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
            }
            >
              <BiMoneyWithdraw/>
              <span>Withdraw</span>
            </NavLink>
            <NavLink
              to="/referral"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
            }
            >
              <MdOutlinePeopleAlt/>
              <span>Referral</span>
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
            }
            >
              <IoSettingsOutline/>
              <span>Settings</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default SidebarMenu;