import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import ReCAPTCHA from 'react-google-recaptcha';

import Logo from "../../assets/logo2.png";
import Logo2 from "../../assets/crest logo 2.png"
import Crest from "../../assets/crest.png";
import AuthContext from "../../context/AuthContext.js"
import { useTheme } from '../../context/ThemeContext.js';

const LoginForm = () => {
    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 38,
        height: 20,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: '#FFD700',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 15,
            height: 15,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: '#FFD700',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));

    const { loginUser, setShowAlert,
        showAlert,
        alertMessage,
        alertSeverity, } = useContext(AuthContext)
    const { theme } = useTheme()

    const [ capVal, setCapVal ] = useState(null);

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
                            <h2>Welcome Back</h2>
                            <p>Enter your email and password to sign in</p>
                        </div>
                        <form onSubmit={loginUser}>
                            <div id="input__field">
                                <label>Email</label>
                                <input type="text" name="email" placeholder="admin@gmail.com" />
                            </div>
                            <div id="input__field">
                                <label>Password</label>
                                <input type="password" name="password" placeholder="12345!$%" />
                            </div>
                            <ReCAPTCHA
                                sitekey="6LebCucpAAAAALItlvI8QZAHBEllmT87W-uXdqGv"
                                onChange={(val) => setCapVal(val)}
                            />
                            <button disabled={!capVal} type="submit">Sign In</button>
                        </form>
                        <div className="switch-auth">
                            <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
                        </div>
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

export default LoginForm