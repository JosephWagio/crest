import React, { useContext } from 'react';
import { CiMenuFries } from "react-icons/ci";

import Chart from "../../assets/chart.png"
import Transactions from '../../dummy/Transactions';
import AuthContext from '../../context/AuthContext';

const DashboardHome = ({ handleCloseSidebar }) => {
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
            <h2>{userProfile && userProfile.first_name}</h2>
            <h2>{userProfile && userProfile.last_name}</h2>
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
            <div className='main__content-asset'>
              <h3>Bitcoin</h3>
              <div id='asset'>
                <div className='asset__top'>
                  <div className='asset__balance'>
                    $
                    <p>1,820</p>
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
            <div className='main__content-asset'>
              <h3>Ethereum</h3>
              <div id='asset'>
                <div className='asset__top'>
                  <div className='asset__balance'>
                    $
                    <p>1,100</p>
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
            <div className='main__content-asset'>
              <h3>Litecoin</h3>
              <div id='asset'>
                <div className='asset__top'>
                  <div className='asset__balance'>
                    $
                    <p>3,100</p>
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
            <div className='main__content-asset'>
              <h3>Usdt</h3>
              <div id='asset'>
                <div className='asset__top'>
                  <div className='asset__balance'>
                    $
                    <p>5,100</p>
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
          </div>
        </div>
        <div className='main__content-activity-container'>
          <div className='main__content-assets-head'>
            <h2>ACTIVITY</h2>
          </div>
          <div className='main__content-activity-table'>
            <div className='main__content-activity-table__head'>
              <p id='trans'>Transactions</p>
              <p id='amount'>Amount</p>
              <p id='total'>Total</p>
              <p id='status'>Status</p>
              <p id='date'>Date</p>
            </div>
            <div className='profile-bar__design' />
            {Transactions.map((Transaction) => (
              <div className='main__content-activity-table__content' key={Transaction.id}>
                <div id='transcoin'>
                  <p>{Transaction.coin}</p>
                </div>
                <p id='amount'>{Transaction.amount}</p>
                <span id='total' className='das__span'>${Transaction.total}</span>
                <span id='status' className={Transaction.status === "Pending" ? "span" : "status"}>{Transaction.status}</span>
                <span id='date' className='das__span'>{Transaction.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default DashboardHome;