import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

import Logo from "../assets/logo2.png";
import Logo2 from "../assets/crest logo 2.png"
import Crest from "../assets/crest.png";
import { IoIosArrowForward } from 'react-icons/io';
import { Alert, CircularProgress } from '@mui/material';
import AuthContext from '../context/AuthContext';

const ForgetPassword = () => {
    const { theme } = useTheme()
    const { forgetPassword, setShowAlert,
        showAlert,
        alertMessage,
        alertSeverity, isLoading } = useContext(AuthContext)

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
                            <h2>Forgot your password?</h2>
                            <p>Please enter the email address associated with your account and We will email you an otp to reset your password.</p>
                        </div>
                        <form onSubmit={forgetPassword}>
                            <div id="input__field">
                                <label>Email</label>
                                <input type="text" name="email" placeholder="admin@gmail.com" />
                            </div>
                            <button type="submit">
                                {isLoading ? (
                                    <CircularProgress color="inherit" size="20px" />
                                ) : "Send"}
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

export default ForgetPassword