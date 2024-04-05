import React, { useContext } from 'react'
import { CiMenuFries } from 'react-icons/ci';
import AuthContext from '../../../../context/AuthContext';

const Setting = ({ handleCloseSidebar }) => {
  const { userProfile } = useContext(AuthContext)

  return (
    <div className='main-container'>
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
    </div>
  )
}

export default Setting;