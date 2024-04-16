import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaUsers } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";

import Logo from "../../assets/CREST HOLDINGS LTD TRANSPARENT BRAND LOGO 2.png"
import Logo2 from "../../assets/crest logo 2.png"
import './AdminSidebar.css';
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
                        <Link to={"/admin/users"}>
                            {theme === "light" ? (
                                <img src={Logo} alt="Logo" className={closebar ? 'sidebar-logo-img-close' : 'sidebar-logo-img'} />
                            ) : (
                                <img src={Logo2} alt="Logo" className={closebar ? 'sidebar-logo-img-close' : 'sidebar-logo-img-light'} />
                            )}
                        </Link>
                    </div>

                    <div className="sidebar-link-list">
                        <NavLink
                            to="users"
                            className={({ isActive }) =>
                                isActive ? "sidebar-link active" : "sidebar-link"
                            }
                        >
                            <FaUsers />
                            <span className={closebar ? 'sidebar-link-close' : 'sidebar-link-span'}>Users</span>
                        </NavLink>
                        <NavLink
                            to="transactions"
                            className={({ isActive }) =>
                                isActive ? "sidebar-link active" : "sidebar-link"
                            }
                        >
                            <AiOutlineTransaction />
                            <span className={closebar ? 'sidebar-link-close' : 'sidebar-link-span'}>Transactions</span>
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