import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { BiBarChartAlt2 } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";

import Logo from "../../assets/CREST HOLDINGS LTD TRANSPARENT BRAND LOGO 2.png"
import Logo2 from "../../assets/crest logo 2.png"
import './Sidebar.css';
import { CiMenuFries } from 'react-icons/ci';
import AuthContext from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const SidebarMenu = ({ closebar, handleCloseSidebar }) => {
  const { logoutUser } = useContext(AuthContext)

  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
    navigate("/")
  }

  const { theme } = useTheme()

  return (
    <>
      <div className={closebar ? 'sidebar-close' : 'sidebar'}>
        <div className="sidebar-container">
          <div className='close-sider-button-mobile' onClick={handleCloseSidebar} >
            <CiMenuFries />
          </div>
          <div className="sidebar-logo">
            {theme === "light" ? (
              <img src={Logo} alt="Logo" className={closebar ? 'sidebar-logo-img-close' : 'sidebar-logo-img'} />
            ) : (
              <img src={Logo2} alt="Logo" className={closebar ? 'sidebar-logo-img-close' : 'sidebar-logo-img-light'} />
            )}
          </div>

          <div className="sidebar-link-list">
            <NavLink
              to="home"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <GoHome />
              <span className={closebar ? 'sidebar-link-close' : 'sidebar-link-span'}>Dashboard</span>
            </NavLink>
            <NavLink
              to="investment"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <BiBarChartAlt2 />
              <span className={closebar ? 'sidebar-link-close' : 'sidebar-link-span'}>Investment</span>
            </NavLink>
            <NavLink
              to="deposit"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <IoWalletOutline />
              <span className={closebar ? 'sidebar-link-close' : 'sidebar-link-span'}>Deposit</span>
            </NavLink>
            <NavLink
              to="withdraw"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <BiMoneyWithdraw />
              <span className={closebar ? 'sidebar-link-close' : 'sidebar-link-span'}>Withdraw</span>
            </NavLink>
            <NavLink
              to="refferal"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <MdOutlinePeopleAlt />
              <span className={closebar ? 'sidebar-link-close' : 'sidebar-link-span'}>Referral</span>
            </NavLink>
            <NavLink
              to="setting"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <IoSettingsOutline />
              <span className={closebar ? 'sidebar-link-close' : 'sidebar-link-span'}>Settings</span>
            </NavLink>

            <div className='logout-btn' onClick={handleLogout}>
              <IoLogOut />
              <span className={closebar ? 'sidebar-link-close' : 'sidebar-link-span'}>Logout</span>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default SidebarMenu;