import React, { useContext } from 'react';
import { CiMenuFries } from "react-icons/ci";
import Alert from '@mui/material/Alert';

import Chart from "../../assets/chart.png"
import AuthContext from '../../context/AuthContext';

const DashboardHome = ({ handleCloseSidebar }) => {
  const { userProfile, showAlert, alertSeverity, setShowAlert, alertMessage, } = useContext(AuthContext)
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
        <div className='main__content-assets-container'>
          <div className='main__content-assets-head'>
            <h2>ASSETS</h2>
          </div>
          <div className='main__content-assets'>
            {userProfile && userProfile.wallets.map((wallet) => (
              <div className='main__content-asset' key={wallet.id}>
                <h3>{wallet.title}</h3>
                <div id='asset'>
                  <div className='asset__top'>
                    <div className='asset__balance'>
                      $
                      <p>{wallet.balance}</p>
                    </div>
                    <div className='chart'>
                      <img src={Chart} alt="" />
                    </div>
                  </div>
                  <div className='asset__bottom'>
                    <div>
                      <p>Profit</p>
                      <span id='asset__bottom-profit'>+ 2,87%</span>
                    </div>
                    <div>
                      <p>Loss</p>
                      <span id='asset__bottom-loss'>- 0,17%</span>
                    </div>
                    <div>
                      <p>Netral</p>
                      <span id='asset__bottom-netral'>2,70%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='main__content-activity-container'>
          <div className='main__content-assets-head'>
            <h2>ACTIVITY</h2>
          </div>
          <div className='main__content-activity-table'>
            <div className='main__content-activity-table__head'>
              <p id='trans'>Transactions</p>
              <p id='amount'>Type</p>
              <p id='total'>Amount</p>
              <p id='status'>Status</p>
              <p id='date'>Date</p>
            </div>
            {/* <div className='profile-bar__design' /> */}
            {userProfile && userProfile.transactions.map((transaction) => (
              <div className='main__content-activity-table__content' key={transaction.id}>
                <div id='transcoin'>
                  <p>{transaction.wallet_title}</p>
                </div>
                <p id='amount'>{transaction.transaction_type}</p>
                <span id='total' className='das__span'>${transaction.amount}</span>
                <span id='status' className={transaction.status === "pending" ? "span" : "status"}>{transaction.status}</span>
                <span id='date' className='das__span'>{transaction.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default DashboardHome;