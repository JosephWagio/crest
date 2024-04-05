import React, { useContext, useEffect } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import AuthContext from '../../context/AuthContext'
import { FaUsers } from 'react-icons/fa'

import "./Admin.css"
import { Alert } from '@mui/material'

const AdminUsers = ({ handleCloseSidebar }) => {
    const { userProfile, allUsers, allUsersDetails, showAlert, alertSeverity, setShowAlert, alertMessage, } = useContext(AuthContext)

    useEffect(() => {
        allUsersDetails()
    }, [allUsersDetails])
    return (
        <div className='main-container'>
            {showAlert && (
                <Alert
                    severity={alertSeverity}
                    onClose={() => setShowAlert(false)}
                    style={{ position: 'fixed', top: "2%", right: "5%", zIndex: 9999, width: "40%" }}
                >
                    {alertMessage}
                </Alert>
            )}
            <header className='main-container-nav'>
                <div className='close-sider-button' onClick={handleCloseSidebar} >
                    <CiMenuFries />
                </div>
                <div className="heading">
                    <h2>Hello,</h2>
                    <div>
                        <h2>{userProfile && userProfile.user.first_name}</h2>
                        <h2>{userProfile && userProfile.user.last_name}</h2>
                    </div>
                    👋
                </div>
            </header>

            <div className='main__content'>
                <div className="users__container">
                    <div className='users__container-head'>
                        <h2>Users <FaUsers /></h2>
                    </div>
                </div>
                <div className="users__container-users">
                    {allUsers && allUsers.map((users) => (
                        <div key={users.user.id} className='users__container-users-user'>
                            <h3>{users.user.first_name} {users.user.first_name}</h3>

                            <div className='user-inner'>
                                <p>{users.user.first_name} {users.user.first_name}</p>
                                <p>Reg-Date: {users.user.date_joined}</p>
                                <p>{users.user.email}</p>
                            </div>

                            <div className='user-inner-cash'>
                                <p>Balance: <span>${users.total_wallet_balance}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminUsers