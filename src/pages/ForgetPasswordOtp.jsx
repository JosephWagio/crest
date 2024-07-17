import { Alert, CircularProgress } from '@mui/material'
import React, { useContext } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

import Logo from "../assets/logo2.png";
import Logo2 from "../assets/crest logo 2.png"
import Crest from "../assets/crest.png";
import { useTheme } from '../context/ThemeContext'
import AuthContext from '../context/AuthContext'

const ForgetPasswordOtp = () => {
    const { forgetPasswordReset, setShowAlert,
        showAlert,
        alertMessage,
        alertSeverity, isLoading } = useContext(AuthContext)
    const { theme } = useTheme()

    return (
        <div className="registerform">
            <div className="logo__wrap">
                <Link to='/' className="reg__logo">
                    <img src={theme === "light" ? Logo : Logo2} alt="" />
                </Link>

                <Link to='/' className="go-back">
                    Back Home
                    <IoIosArrowForward />
                </Link>
            </div>

            <div className="loginform__container">
                <div className="loginform__wrap">
                    {showAlert && (
                        <Alert
                            severity={alertSeverity}
                            onClose={() => setShowAlert(false)}
                            style={{ position: 'fixed', top: "2%", right: "5%", zIndex: 9999, width: "40%" }}
                        >
                            {alertMessage}
                        </Alert>
                    )}
                    <div className="loginform__contents">
                        <div className='reg__form-head'>
                            <h2>Create new password?</h2>
                            <p>Enter the otp and the new password you want to your account</p>
                        </div>
                        <form onSubmit={forgetPasswordReset}>
                            <div id="input__field">
                                <label>Otp</label>
                                <input type="text" name="otp" placeholder="1234" />
                            </div>
                            <div id="input__field">
                                <label>New Password</label>
                                <input type="password" name="password" placeholder="12345!$%" />
                            </div>
                            <button type="submit">
                                {isLoading ? (
                                    <CircularProgress color="inherit" size="20px" />
                                ) : "Reset"}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="registerform__img">
                    <div>
                        <img src={Crest} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPasswordOtp