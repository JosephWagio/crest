import React from 'react'
import { FiCopy } from "react-icons/fi";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaXTwitter,  } from "react-icons/fa6";
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
            <div className="referral-link-input">
              <input type="text" value={"https:/crestholdings/REFERRALCODE=yourlink"} />
              <FiCopy />
            </div>
            <div className='referral-link-socials'>
              <a href=""><RiFacebookFill size={30} /></a>
              <a href=""><FaInstagram size={30} /></a>
              <a href=""><FaXTwitter size={30} /></a>
              <a href=""><TfiEmail size={30} /></a>
              <a href=""><FaTelegramPlane size={30} /></a>
            </div>
          </div>
          <div className="referral-rewards">
            <div className="referral-rewards-header">
              <h1>Referral Rewards</h1>
            </div>
            <div className="referral-rewards-body">
              <h3>Check Your Rewards</h3>
              <h1>$0</h1>
              <p>Your Pending Rewards</p>
              <h1>$0</h1>
              <p>Your Total Amount you have earned for referring people to CREST HOLDINGS</p>
              <input type="text" placeholder='Please Add Amount To Claim Reward' />
              <button className='button'>Collect Rewards</button>
            </div>
          </div>
          <div className="referral-rules">
            <div className="referral-rules-header">
              <h1>Criteria For New Referrals</h1>
            </div>
            <div className="referral-rules-body">
              <h3>Crest Holdings LTD Referral Program Rules:</h3>
              <p>1. Eligibility:</p>
              <ul>
                <li><LuDot />  The referral program is open to all existing clients of Crest Holdings LTD who have an active investment package.</li>
                <li><LuDot />  New clients must sign up for an investment package with Crest Holdings LTD to become eligible to participate in the referral program.</li>
              </ul>
              <p>2. Referral Link:</p>
              <ul>
                <li><LuDot />  Each client will be provided with a unique referral link upon signing up for an investment package.</li>
                <li><LuDot />  Clients can share this referral link with friends, family, and acquaintances to invite them to join Crest Holdings LTD.</li>
              </ul>
              <p>3. Referral Rewards:</p>
              <ul>
                <li><LuDot />  Clients will earn referral rewards for each successful referral.</li>
                <li><LuDot />  A successful referral is defined as a new client signing up for an investment package with Crest Holdings LTD using the referral link provided by an existing client.</li>
                <li><LuDot />  The referral rewards will be specified in the referral program terms and may include cash bonuses, discounts on fees, or additional investment benefits.</li>
              </ul>
              <p>4. Reward Redemption:</p>
              <ul>
                <li><LuDot />  Referral rewards will be credited to the referring client's account after the referred client's investment package is successfully activated and funded.</li>
                <li><LuDot />  The referral rewards may be subject to certain conditions, such as a minimum investment amount or a minimum holding period.</li>
              </ul>
              <p>5. Limits and Restrictions:</p>
              <ul>
                <li><LuDot />  There may be limits on the number of referrals a client can make within a specific period.</li>
                <li><LuDot />  Crest Holdings LTD reserves the right to modify or terminate the referral program at any time without prior notice.</li>
                <li><LuDot />  Referral rewards may not be transferable and are subject to change based on Crest Holdings LTD's discretion.</li>
              </ul>
              <p>6. Compliance:</p>
              <ul>
                <li><LuDot />  Clients participating in the referral program must comply with all applicable laws and regulations.</li>
                <li><LuDot />  Any fraudulent or abusive behavior related to the referral program may result in the disqualification of the referring client and the forfeiture of referral rewards.</li>
              </ul>
              <p>7. Disputes:</p>
              <ul>
                <li><LuDot />  Any disputes or discrepancies regarding referral rewards will be resolved by Crest Holdings LTD at its sole discretion.</li>
                <li><LuDot />  Crest Holdings LTD's decision regarding referral rewards and program eligibility will be final.</li>
              </ul>
              <p>8. Terms and Conditions:</p>
              <ul>
                <li><LuDot />  By participating in the referral program, clients agree to abide by these rules and any additional terms and conditions specified by Crest Holdings LTD.</li>
                <li><LuDot />  Crest Holdings LTD reserves the right to update or amend these rules at any time.</li>
              </ul>
              <h4>For further details and inquiries about the referral program, clients are encouraged to contact Crest Holdings LTD's customer support team.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Referral;