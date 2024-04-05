import { Route, Routes } from 'react-router-dom'


import "../components/Dashboard/Dashboard.css"
import SidebarMenu from '../components/Dashboard/Sidebar'
import DashboardHome from '../components/Dashboard/DashboardHome'
import { Investment, Deposit, Withdraw, Referral, Settings } from '../components/Dashboard/Screens'
import ProfileSideBar from '../components/Dashboard/ProfileSideBar'
import { useState } from 'react'

const Dashboard = () => {
    const [closebar, setClosebar] = useState(true)
    const handleCloseSidebar = () => {
        setClosebar((prev) => !prev)
    }
    return (
        <div className='dashboard'>
            <SidebarMenu closebar={closebar} handleCloseSidebar={handleCloseSidebar} />
            <Routes>
                <Route path='home' element={<DashboardHome handleCloseSidebar={handleCloseSidebar} />} />
                <Route path='investment' element={<Investment handleCloseSidebar={handleCloseSidebar} />} />
                <Route path='deposit' element={<Deposit handleCloseSidebar={handleCloseSidebar} />} />
                <Route path='withdraw' element={<Withdraw handleCloseSidebar={handleCloseSidebar} />} />
                <Route path='refferal' element={<Referral handleCloseSidebar={handleCloseSidebar} />} />
                <Route path='setting' element={<Settings handleCloseSidebar={handleCloseSidebar} />} />
            </Routes>
            <ProfileSideBar />
        </div>
    )
}

export default Dashboard;