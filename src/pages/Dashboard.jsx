import { Route, Routes } from 'react-router-dom'


import "../components/Dashboard/Dashboard.css"
import SidebarMenu from '../components/Dashboard/Sidebar'
import DashboardHome from '../components/Dashboard/DashboardHome'
import { Investment, Deposit, Withdraw, Referral, Settings } from '../components/Dashboard/Screens'
import ProfileSideBar from '../components/Dashboard/ProfileSideBar'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <SidebarMenu />
            <Routes>
                <Route path='home' element={<DashboardHome />} />
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