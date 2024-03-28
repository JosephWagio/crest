import React, { useContext } from 'react'

import "./ProfileBar.css"
import AuthContext from '../../context/AuthContext'
import { Link } from 'react-router-dom'

const ProfileSideBar = () => {
  const { authTokens, userProfile, } = useContext(AuthContext)
  // console.log(userProfile)

  return (
    <div className='sidebar right-sidebar'>
      <div className="profile-bar__container">
        <div className='profile-bar__head'>
          <img src={authTokens.profile_picture} alt="Profile__Picture" width={100} />
          <div className='user__name'>
            <p>{userProfile && userProfile.first_name}</p>
            <p>{userProfile && userProfile.last_name}</p>
          </div>
          <Link to={"setting"}>
            Edit Profile
          </Link>
        </div>
        <div className='profile-bar__account'>
          <h3>Account</h3>
          <div>
            <p>Joined</p>
            <span>{userProfile && userProfile.date_joined_formatted}</span>
          </div>
          <div>
            <p>Assets Value</p>
            <span>$1,328,240.00</span>
          </div>
        </div>
        <div className='profile-bar__design' />
        <div className='profile-bar__assets'>
          <h3>Assets</h3>
          <div>
            <p>Bitcoin</p>
            <span>23.5 <p>BTC</p></span>
          </div>
          <div>
            <p>Ethereum</p>
            <span>190.45 <p>ETH</p></span>
          </div>
          <div>
            <p>Litecoin</p>
            <span>239,500 <p>DOGE</p></span>
          </div>
          <div>
            <p>Usdt</p>
            <span>1000,000<p>USDT</p></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSideBar