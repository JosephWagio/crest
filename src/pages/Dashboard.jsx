import { Route, Routes } from 'react-router-dom'


import "../components/Dashboard/Dashboard.css"
import SidebarMenu from '../components/Dashboard/Sidebar'
import DashboardHome from '../components/Dashboard/DashboardHome'
import { Investment, Deposit, Withdraw, Referral, Settings } from '../components/Dashboard/Screens'
import ProfileSideBar from '../components/Dashboard/ProfileSideBar'
import { useState } from 'react'

const Dashboard = () => {
    const [closebar, setClosebar] = useState(false)
    const handleCloseSidebar = () => {
        setClosebar((prev) => !prev)
    }
    return (
        <div className='dashboard'>
            <SidebarMenu closebar={closebar} handleCloseSidebar={handleCloseSidebar} />
            <Routes>
                <Route path='home' element={<DashboardHome handleCloseSidebar={handleCloseSidebar} />} />
                <Route path='investment' element={<Investment />} />
                <Route path='deposit' element={<Deposit />} />
                <Route path='withdraw' element={<Withdraw />} />
                <Route path='refferal' element={<Referral />} />
                <Route path='setting' element={<Settings />} />
            </Routes>
            <ProfileSideBar />
        </div>
    )
}

export default Dashboard;