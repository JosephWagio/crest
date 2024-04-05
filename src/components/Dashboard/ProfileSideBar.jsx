import React, { useContext } from 'react'

import "./ProfileBar.css"
import AuthContext from '../../context/AuthContext'
import { Link } from 'react-router-dom'

const ProfileSideBar = () => {
  const { userProfile, } = useContext(AuthContext)

  return (
    <div className='profile__sidebar right-sidebar'>
      <div className="profile-bar__container">
        <div className='profile-bar__head'>
          <img src={userProfile && userProfile.user.profile_picture} alt="Profile__Picture" width={100} />
          <div className='user__name'>
            <p>{userProfile && userProfile.user.first_name}</p>
            <p>{userProfile && userProfile.user.last_name}</p>
          </div>
          <Link to={"setting"}>
            Edit Profile
          </Link>
        </div>
        <div className='profile-bar__account'>
          <h3>Account</h3>
          <div>
            <p>Joined</p>
            <span>{userProfile && userProfile.user.date_joined}</span>
          </div>
          <div>
            <p>Assets Value</p>
            <span>${userProfile && userProfile.total_wallet_balance}</span>
          </div>
        </div>
        <div className='profile-bar__design' />
        <div className='profile-bar__assets'>
          <h3>Assets</h3>
          {userProfile && userProfile.wallets.map((wallet) => (
            <div key={wallet.id}>
              <p>{wallet.title}</p>
              <span>${wallet.balance}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileSideBar