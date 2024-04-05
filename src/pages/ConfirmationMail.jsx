import React from 'react'


import Navbar from '../components/common/Nav/Navbar'
import "../components/Auth/Auth.css"
import Mail from "../assets/mail.png"

const ConfirmationMail = () => {
    return (
        <div className='confirm__mail-body'>
            <Navbar />
            <div className='page__gradient'>
                <div className='confirm__mail-container'>
                    <div className='confirm__mail'>
                        <img src={Mail} alt="" width={150} />
                        <div>
                            <h3>Kindly check your mail</h3>
                            <p>A verification link has been sent to continue your registration.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationMail