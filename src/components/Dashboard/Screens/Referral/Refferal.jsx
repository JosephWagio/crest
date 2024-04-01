import React from 'react'

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
        </div>
      </div>
    </div>
  )
}

export default Referral;