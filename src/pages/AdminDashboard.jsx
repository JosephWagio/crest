import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import AdminUsers from "../components/Admin/AdminUsers"
import AdminUserTransactions from "../components/Admin/AdminUserTransactions"
import AdminSidebar from "../components/Admin/AdminSidebar"

const AdminDashboard = () => {
    const [closebar, setClosebar] = useState(true)
    const handleCloseSidebar = () => {
        setClosebar((prev) => !prev)
    }
    return (
        <div className='dashboard'>
            <AdminSidebar closebar={closebar} handleCloseSidebar={handleCloseSidebar} />
            <Routes>
                <Route path='users' element={<AdminUsers handleCloseSidebar={handleCloseSidebar} />} />
                <Route path='transactions' element={<AdminUserTransactions handleCloseSidebar={handleCloseSidebar} />} />
            </Routes>
        </div>
    )
}

export default AdminDashboard