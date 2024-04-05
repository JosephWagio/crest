import React, { useContext } from 'react'
import { CiMenuFries } from 'react-icons/ci';
import AuthContext from '../../../../context/AuthContext';
import { FaCircle } from 'react-icons/fa';
import { useState } from 'react';
import Alert from '@mui/material/Alert';

const Withdraw = ({ handleCloseSidebar }) => {
  const [wallet, setWallet] = useState(1);
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [tvn, setTvn] = useState("");

  const { userProfile, authTokens, setShowAlert, setAlertMessage, setAlertSeverity, showAlert, alertSeverity, alertMessage } = useContext(AuthContext)

  const handleDeposit = async (e) => {
    if (tvn) {
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
              transaction_type: "withdrawal",
              wallet: wallet,
              wallet_address: walletAddress,
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
    else {
      setShowAlert(true);
      setAlertMessage("TVN CAN NOT BE EMPTY!!")
      setAlertSeverity("error");
    }

  }
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
            <h3>Withdraw</h3>
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
              <input type="text" placeholder='Enter Your Wallet Address' value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} />
            </div>
            <div className="deposit__container-deposit-inner">
              <label>Withdrawal Amount:</label>
              <input type="text" placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className="deposit__container-deposit-inner">
              <label>TVN Number:</label>
              <input type="text" placeholder='Enter Tvn Number' value={tvn} onChange={(e) => setTvn(e.target.value)} />
            </div>

            <div className="deposit__container-deposit-inner-btn">
              <button onClick={handleDeposit}>Withdraw</button>
            </div>

            <div className='deposit__container-deposit-tips'>
              <h3>Tips</h3>
              <ul>
                <li><FaCircle /> Coin will be Withdraw after 1 network confirmations.</li>
                <li><FaCircle /> After you withdrawal has been comformed then you wallet balance will be updated.</li>
                <li><FaCircle /> If wallet balance does not update after 30mins refresh the page or logout and login.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Withdraw;