import React from 'react'

import './services.css';
import Ellipse2 from "../../assets/Ellipse 2.png";
import MiddleEllipse from "../../assets/Ellipse 3.png";
import BottomEllipse from "../../assets/Ellipse 4.png";
import HeaderIMG from '../../assets/GroupService.png';
import CRYPTO from '../../assets/Crypto Trading.png';
import Wallet from '../../assets/Wallet.png';
import Support from '../../assets/Support.png';
import Invest from '../../assets/Invest.png';
import World from '../../assets/Content.png';
import Navbar from '../../components/common/Nav/Navbar';
import Footer from '../../components/common/Footer/Footer';

const Service = () => {
  return (
    <>
      <Navbar />
    <div className='service section__padding'>
      <div className="top-ellipse-service">
				<img src={Ellipse2} alt="" />
			</div>
      <div className='service-landing'>
        <img src={HeaderIMG} alt="people" />
        <h1>OUR <span className="span">SERVICES</span></h1>
      </div>
      <div className="service-detail">
        <div className="detail-box">
          <div className="box-content">
            <h2>Finance and Investment</h2>
            <p>Experience seamless finance and investment trading on our advanced trading platform. </p>
          </div>
          <div className="box-img">
            <img src={CRYPTO} alt="crypto" />
          </div>
        </div>
        <div className="detail-box">
          <div className="box-content">
            <h2>Personalized Support</h2>
            <p>Receive personalized support from our dedicated team of Finance experts.</p>
          </div>
          <div className="box-img">
            <img src={Support} alt="support" />
          </div>
        </div>
        <div className="detail-box">
          <div className="box-content">
            <h2>Investment Opportunities</h2>
            <p>Explore diverse investment opportunities with Crest Holding Ltd.</p>
          </div>
          <div className="box-img">
            <img src={Invest} alt="invest" />
          </div>
        </div>
        <div className="detail-box">
          <div className="box-content">
            <h2>Secure Portfolio Management</h2>
            <p>Protect your financial assets with our secure portfolio management system.</p>
          </div>
          <div className="box-img">
            <img src={Wallet} alt="wallet" />
          </div>
        </div>
      </div>
			<div className="middle-ellipse-service">
				<img src={MiddleEllipse} alt="" />
			</div>
      <div className="service-location">
        <h1>We’re a distributed team</h1>
        <p>We have offices and teams all around the world.</p>
        <img src={World} alt="map" />
      </div>
			<div className="bottom-ellipse-service">
				<img src={BottomEllipse} alt="" />
			</div>
    </div>
    <Footer />
    </>
  )
}

export default Service;