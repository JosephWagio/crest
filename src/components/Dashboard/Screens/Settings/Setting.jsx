import React, { useContext, useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';

import './Setting.css';
import AuthContext from '../../../../context/AuthContext';

const Setting = ({handleCloseSidebar}) => {
  const {  userProfile, } = useContext(AuthContext)

  const [image, setImage] = useState(userProfile.user.profile_picture);
  const [imageCrop, setImageCrop] = useState(false);
  const [firstName, setFirstName] = useState(userProfile ? userProfile.first_name : '');
  const [lastName, setLastName] = useState(userProfile ? userProfile.last_name : '');
  const [email, setEmail] = useState(userProfile ? userProfile.email : '');
  const [password, setPassword] = useState('');

  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      const reader = new FileReader();
      reader.onload = function(e) {
        setImage(e.target.result);
        setImageCrop(true);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(userProfile.user.profile_picture);
    }
  };

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

      <div className='settings'>
        <div className='settings-header'>
          <h3>Settings</h3>
        </div>
        <div className="settings-body">
          <div className='settings-profile-picture' onClick={handleImageClick}>
            <img src={image} alt="profile img" className="profile-img" />
            <div className='user__name'>
              <p>{userProfile && userProfile.first_name}</p>
              <p>{userProfile && userProfile.last_name}</p>
            </div>
          </div>
          <input 
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
        <div className="settings-user-info">
          <form action="">
            <p>Edit Profile</p>
            <div className="user-info-field-wrapper">
              <div className="user-info-field">
                <label htmlFor="firstName">First Name</label>
                <input 
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="user-info-field">
                <label htmlFor="lastName">Last Name</label>
                <input 
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="user-info-field">
              <label htmlFor="email">Email</label>
              <input 
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="user-info-field">
              <label htmlFor="password">Password</label>
              <input 
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button button className="button">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
