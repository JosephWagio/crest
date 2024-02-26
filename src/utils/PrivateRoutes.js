import { useState } from 'react'
import {Outlet, Navigate} from "react-router-dom"

const PrivateRoutes = () => {

    const [user, setUser] = useState(false)
    return user ? <Outlet /> : <Navigate to="/" />;

}

export default PrivateRoutes