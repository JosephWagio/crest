import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import './Package.css';

const Package = () => {
  return (
    <div className='package section__padding' id='plans'>
      <div className='package-header'>
        <h1>These are Our Plans</h1>
        <p>To ensure a successful <span className="span">investment</span>, it's crucial to thoroughly understand the place where you're putting your <span className="span">money</span>. Find a strategy that aligns best with your goals and preferences.</p>
      </div>
      <div className="package-plans">
        <div className="plans">
          <p>Basic Plan</p>
          <h2>300 %</h2>
          <p>20 Days / 1 Times</p>
          <h3>Features</h3>
          <ul>
            <li><IoMdCheckmarkCircleOutline/>   Minimum Investment-$1000</li>
            <li><IoMdCheckmarkCircleOutline/>   Maximum Investment-$1000</li>
            <li><IoMdCheckmarkCircleOutline/>   Capital Will Store</li>
            <li><IoMdCheckmarkCircleOutline/>   24/7 Support</li>
          </ul>
          <button>Invest Now</button>
        </div>
        <div className="plans">
          <p>Basic Plan</p>
          <h2>300 %</h2>
          <p>20 Days / 1 Times</p>
          <h3>Features</h3>
          <ul>
            <li><IoMdCheckmarkCircleOutline/>   Minimum Investment-$1000</li>
            <li><IoMdCheckmarkCircleOutline/>   Maximum Investment-$1000</li>
            <li><IoMdCheckmarkCircleOutline/>   Capital Will Store</li>
            <li><IoMdCheckmarkCircleOutline/>   24/7 Support</li>
          </ul>
          <button>Invest Now</button>
        </div>
        <div className="plans">
          <p>Basic Plan</p>
          <h2>300 %</h2>
          <p>20 Days / 1 Times</p>
          <h3>Features</h3>
          <ul>
            <li><IoMdCheckmarkCircleOutline/>   Minimum Investment-$1000</li>
            <li><IoMdCheckmarkCircleOutline/>   Maximum Investment-$1000</li>
            <li><IoMdCheckmarkCircleOutline/>   Capital Will Store</li>
            <li><IoMdCheckmarkCircleOutline/>   24/7 Support</li>
          </ul>
          <button>Invest Now</button>
        </div>
        <div className="plans">
          <p>Basic Plan</p>
          <h2>300 %</h2>
          <p>20 Days / 1 Times</p>
          <h3>Features</h3>
          <ul>
            <li><IoMdCheckmarkCircleOutline/>   Minimum Investment-$1000</li>
            <li><IoMdCheckmarkCircleOutline/>   Maximum Investment-$1000</li>
            <li><IoMdCheckmarkCircleOutline/>   Capital Will Store</li>
            <li><IoMdCheckmarkCircleOutline/>   24/7 Support</li>
          </ul>
          <button>Invest Now</button>
        </div>
      </div>
    </div>
  )
}

export default Package;