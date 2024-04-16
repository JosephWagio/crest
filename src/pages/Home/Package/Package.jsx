<<<<<<< HEAD
import React from 'react'
import { Link } from "react-router-dom";
=======
import React, { useContext } from 'react'
>>>>>>> 5182dafd9a7f7974c3fa9823c9025d52f9a65bf1
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import './Package.css';
import AuthContext from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

const Package = () => {
  const { user } = useContext(AuthContext)
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
          <p>30 Days / 1 Times</p>
          <h3>Features</h3>
          <ul>
            <li><IoMdCheckmarkCircleOutline />   Minimum Investment-$500</li>
            <li><IoMdCheckmarkCircleOutline />   Maximum Investment-$999</li>
            <li><IoMdCheckmarkCircleOutline />   Minimum Earning-$1500</li>
            <li><IoMdCheckmarkCircleOutline />   Capital Will Store</li>
            <li><IoMdCheckmarkCircleOutline />   24/7 Support</li>
          </ul>
<<<<<<< HEAD
          <button><Link to="/signin">Invest Now</Link></button>
=======
          {user ? user.is_superuser ? (
            <Link to={"/admin/users"}>
              <button>Invest Now</button>
            </Link>
          ) : (
            <Link to={"/dashboard/investment"}>
              <button>Invest Now</button>
            </Link>
          ) : (
            <Link to={"/signin"}>
              <button>Invest Now</button>
            </Link>
          )}
>>>>>>> 5182dafd9a7f7974c3fa9823c9025d52f9a65bf1
        </div>
        <div className="plans">
          <p>Standard Plan</p>
          <h2>400 %</h2>
          <p>30 Days / 1 Times</p>
          <h3>Features</h3>
          <ul>
            <li><IoMdCheckmarkCircleOutline />   Minimum Investment-$1000</li>
            <li><IoMdCheckmarkCircleOutline />   Maximum Investment-$4999</li>
            <li><IoMdCheckmarkCircleOutline />   Minimum Earning-$4000</li>
            <li><IoMdCheckmarkCircleOutline />   Capital Will Store</li>
            <li><IoMdCheckmarkCircleOutline />   24/7 Support</li>
          </ul>
<<<<<<< HEAD
          <button><Link to="/signin">Invest Now</Link></button>
=======
          {user ? user.is_superuser ? (
            <Link to={"/admin/users"}>
              <button>Invest Now</button>
            </Link>
          ) : (
            <Link to={"/dashboard/investment"}>
              <button>Invest Now</button>
            </Link>
          ) : (
            <Link to={"/signin"}>
              <button>Invest Now</button>
            </Link>
          )}
>>>>>>> 5182dafd9a7f7974c3fa9823c9025d52f9a65bf1
        </div>
        <div className="plans">
          <p>Regular Plan</p>
          <h2>500 %</h2>
          <p>30 Days / 1 Times</p>
          <h3>Features</h3>
          <ul>
            <li><IoMdCheckmarkCircleOutline />   Minimum Investment-$5000</li>
            <li><IoMdCheckmarkCircleOutline />   Maximum Investment-$99999</li>
            <li><IoMdCheckmarkCircleOutline />   Minimum Earning-$25000</li>
            <li><IoMdCheckmarkCircleOutline />   Capital Will Store</li>
            <li><IoMdCheckmarkCircleOutline />   24/7 Support</li>
          </ul>
<<<<<<< HEAD
          <button><Link to="/signin">Invest Now</Link></button>
=======
          {user ? user.is_superuser ? (
            <Link to={"/admin/users"}>
              <button>Invest Now</button>
            </Link>
          ) : (
            <Link to={"/dashboard/investment"}>
              <button>Invest Now</button>
            </Link>
          ) : (
            <Link to={"/signin"}>
              <button>Invest Now</button>
            </Link>
          )}
>>>>>>> 5182dafd9a7f7974c3fa9823c9025d52f9a65bf1
        </div>
        <div className="plans">
          <p>Premium Plan</p>
          <h2>500 %</h2>
          <p>30 Days / 1 Times</p>
          <h3>Features</h3>
          <ul>
            <li><IoMdCheckmarkCircleOutline />   Minimum Investment-$100000</li>
            <li><IoMdCheckmarkCircleOutline />   Maximum Investment-$500000</li>
            <li><IoMdCheckmarkCircleOutline />   Minimum Earning-$500000</li>
            <li><IoMdCheckmarkCircleOutline />   Capital Will Store</li>
            <li><IoMdCheckmarkCircleOutline />   24/7 Support</li>
          </ul>
<<<<<<< HEAD
          <button><Link to="/signin">Invest Now</Link></button>
=======
          {user ? user.is_superuser ? (
            <Link to={"/admin/users"}>
              <button>Invest Now</button>
            </Link>
          ) : (
            <Link to={"/dashboard/investment"}>
              <button>Invest Now</button>
            </Link>
          ) : (
            <Link to={"/signin"}>
              <button>Invest Now</button>
            </Link>
          )}
>>>>>>> 5182dafd9a7f7974c3fa9823c9025d52f9a65bf1
        </div>
      </div>
    </div>
  )
}

export default Package;