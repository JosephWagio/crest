import { Route, Routes } from 'react-router-dom'


import "../components/Dashboard/Dashboard.css"
import Sidebar from '../components/Dashboard/Sidebar'
import ProfileSideBar from '../components/Dashboard/ProfileSideBar'
import DashboardHome from '../components/Dashboard/DashboardHome'
import Wallet from '../components/Dashboard/Wallet'
import Deposit from '../components/Dashboard/Deposit'
import Withdraw from '../components/Dashboard/Withdraw'
import Refferal from '../components/Dashboard/Refferal'
import Setting from '../components/Dashboard/Setting'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Sidebar/>
            <Routes>
                <Route path='/' element={<DashboardHome/>}/>
                <Route path='wallet' element={<Wallet/>}/>
                <Route path='deposit' element={<Deposit/>}/>
                <Route path='withdraw' element={<Withdraw/>}/>
                <Route path='refferal' element={<Refferal/>}/>
                <Route path='setting' element={<Setting/>}/>
            </Routes>
            <ProfileSideBar/>
        </div>
    )
}

export default Dashboard