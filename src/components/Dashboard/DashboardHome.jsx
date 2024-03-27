import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarMenu from './Sidebar';

const DashboardHome = () => {
  return (
    <>
      <header>
        <div className="heading">
          <h1>Good Morning</h1>
          <p>Welcome back, Admin</p>
        </div>
      </header>

      
      <div className='dashboard'>

      </div>
    </>

  );
};

export default DashboardHome;