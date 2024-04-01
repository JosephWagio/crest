import React from 'react'
import { FiCopy } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaXTwitter,  } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

import './Referral.css';

const Referral = () => {
  return (
    <div className='main-container'>
      <div className="referral-main">
        <div className="referral-header">
          <h3>Referral</h3>
        </div>
        <div className="referral-body">
          <div className="referral-invite">
            <p>Invite your friends through email</p>
            <input type="text" placeholder='Enter Email Address' />
            <button className='button'>Invite</button>
          </div>
          <div className='referral-link'>
            <p>Share link through Social Media</p>
            <input type="text" value={"https:/crestholdings/REFERRALCODE=yourlink"} />
            <FiCopy />
            <div className='referral-link-socials'>
              <a href=""><FaFacebookF size={30} /></a>
              <a href=""><FaInstagram size={30} /></a>
              <a href=""><FaXTwitter size={30} /></a>
              <a href=""><TfiEmail size={30} /></a>
              <a href=""><FaTelegramPlane size={30} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Referral;