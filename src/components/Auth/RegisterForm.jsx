import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';

import Logo from "../../assets/logo2.png";
import Logo2 from "../../assets/crest logo 2.png"
import Crest from "../../assets/crest.png";
import AuthContext from "../../context/AuthContext.js"
import { useTheme } from '../../context/ThemeContext.js';
import { CircularProgress } from '@mui/material';

const RegisterForm = () => {

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

    const { registerUser, setShowAlert,
        showAlert,
        alertMessage,
        alertSeverity, isLoading, } = useContext(AuthContext)

    const { theme } = useTheme()

    const [hover, setHover] = useState(false);

    const linkStyle = {
        fontSize: '12px',
        color: hover ? '#ffd700' : 'initial',
        textDecoration: 'none'  // optional: to remove underline
    };


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

            <div className="registerform__container">
                <div className="registerform__img">
                    <div>
                        <img src={Crest} alt="" />
                    </div>
                </div>
                <div className="registerform__wrap">
                    {showAlert && (
                        <Alert
                            severity={alertSeverity}
                            onClose={() => setShowAlert(false)}
                            style={{ position: 'fixed', top: "2%", right: "5%", zIndex: 9999, width: "40%" }}
                        >
                            {alertMessage}
                        </Alert>
                    )}
                    <div className="registerform__contents">
                        <h2>Create a secured account</h2>
                        <form onSubmit={registerUser}>
                            <div className="input__field-wrapper">
                                <div id="input__field">
                                    <label>First Name</label>
                                    <input type="text" name="firstname" placeholder="Your First Name" />
                                </div>
                                <div id="input__field">
                                    <label>Last Name</label>
                                    <input type="text" name="lastname" placeholder="Your Last Name" />
                                </div>
                            </div>
                            <div id="input__field">
                                <label>Email</label>
                                <input type="text" name="email" placeholder="admin@gmail.com" />
                            </div>
                            <div id="input__field">
                                <label>Password</label>
                                <input type="password" name="password" placeholder="12345!$%" />
                            </div>
                            <Link
                            to="/tncs"
                            style={linkStyle}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            >
                            <em>Terms and Conditions</em>
                            </Link>                            
                            <button type="submit">
                                {isLoading ? (
                                    <CircularProgress color="inherit" size="20px" />
                                ) : "Sign Up"}
                            </button>
                        </form>
                        <div className="switch-auth">
                            <p>Already have an account? <Link to='/signin'>Sign in</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm