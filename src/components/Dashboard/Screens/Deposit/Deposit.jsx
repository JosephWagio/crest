import React, { useContext, useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCopy } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { LuCheckSquare } from "react-icons/lu";
import { CiMenuFries } from 'react-icons/ci'
import Alert from '@mui/material/Alert';

import "./Deposit.css"
import AuthContext from '../../../../context/AuthContext'

const Deposit = ({ handleCloseSidebar }) => {
  const [wallet, setWallet] = useState(1);
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [copied, setCopied] = useState(false);

  const { userProfile, authTokens, setAlertSeverity, setAlertMessage, setShowAlert, showAlert, alertSeverity, alertMessage } = useContext(AuthContext)

  const handleDeposit = async (e) => {
    try {
      e.preventDefault()

      const response = await fetch("https://crest-backend.onrender.com/api/transaction/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`
          },
          body: JSON.stringify({
            transaction_type: "deposit",
            wallet: wallet,
            amount: amount,
            status: "pending"
          })
        }
      )
      if (response.status === 201) {
        setShowAlert(true)
        setAlertMessage("Waiting For Confirmation");
        setAlertSeverity("success");
      }
      else {
        const errorData = await response.json();
        const errorMessage = errorData.error || "Deposit failed";
        console.log(errorMessage)
        setShowAlert(true);
        setAlertMessage(errorMessage)
        setAlertSeverity("error");
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    let timeoutId;

    if (copied) {
      timeoutId = setTimeout(() => {
        setCopied(!copied);
      }, 3000);
    }


    if (wallet) {
      if (userProfile) {
        const selectedWallet = userProfile.wallets.find(item => item.id === parseInt(wallet));
        if (selectedWallet) {
          setWalletAddress(selectedWallet.wallet_address);
        }
      }
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [wallet, userProfile, copied]);

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
        <div className="deposit__container">
          <div className='deposit__container-head'>
            <h3>DEPOSIT</h3>
          </div>

          <div className='deposit__container-deposit'>
            <div className="deposit__container-deposit-inner">
              <label>Wallets:</label>
              <select value={wallet} onChange={(e) => setWallet(e.target.value)}>
                {userProfile && userProfile.wallets.map((wallet) => (
                  <option value={wallet.id} key={wallet.id}>{wallet.title}</option>
                ))}
              </select>
            </div>
            <div className="deposit__container-deposit-inner">
              <label>Wallet Address:</label>
              <div id='wallet__address'>
                <p>
                  {walletAddress}
                </p>
                <CopyToClipboard text={walletAddress} onCopy={() => setCopied(!copied)}>
                  {copied ? <LuCheckSquare /> : <FiCopy />}
                </CopyToClipboard>
              </div>
            </div>
            <div className="deposit__container-deposit-inner">
              <label>Deposit Amount:</label>
              <input type="text" placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>

            <div className="deposit__container-deposit-inner-btn">
              <button onClick={handleDeposit}>Deposit</button>
            </div>

            <div className='deposit__container-deposit-tips'>
              <h3>Tips</h3>
              <ul>
                <li><FaCircle /> Coin will be deposited after 1 network confirmations.</li>
                <li><FaCircle /> After you deposit has been comformed then you wallet balance will be updated.</li>
                <li><FaCircle /> If wallet balance does not update after 30mins refresh the page or logout and login.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deposit