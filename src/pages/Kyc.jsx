import React, { useContext, } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert';

import "../components/Kyc/Kyc.css"
import AuthContext from '../context/AuthContext';
import Crest from "../assets/crest.png"
import { Step1, Step2, Step3, Step4, Step5 } from '../components/Kyc/Step';
import { Link } from 'react-router-dom';

const Kyc = () => {
    const { step, setStep, showAlert, alertSeverity, setShowAlert, alertMessage, nextStep, KycVerification, } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleBack = () => {
        if (step > 0) {
            setStep(step - 1)
        } else {
            navigate('/signin');
        }
    };

    const renderStep = () => {
        switch (step) {
            case 0:
                return <Step1 />;
            case 1:
                return <Step2 />;
            case 2:
                return <Step3 />;
            case 3:
                return <Step4 />;
            case 4:
                return <Step5 />;
            default:
                return null;
        }
    };

    const handleSubmit = (e) => {
        if (step === 4) {
            KycVerification(e)
        } else {
            nextStep()
        }
    }
    return (
        <div className='page__gradient kyc'>
            {showAlert && (
                <Alert
                    severity={alertSeverity}
                    onClose={() => setShowAlert(false)}
                    style={{ position: 'fixed', top: "2%", right: "5%", zIndex: 9999, width: "40%" }}
                >
                    {alertMessage}
                </Alert>
            )}
            <div className='kyc__card'>
                <div className='kyc__card-head'>
                    <img src={Crest} alt="" width={250} />
                    <h2>KYC VERIFICATION</h2>
                    <div className="steps">
                        {[0, 1, 2, 3, 4].map((index) => (
                            <span
                                key={index}
                                className={step >= index ? "active" : ""}
                            ></span>
                        ))}
                    </div>
                </div>
                {renderStep()}
                <div className='kyc__card-btns'>
                    <Link to="/dashboard">Skip To Dashboard</Link>
                    <div className='kyc__card-btn'>
                        {step > 0 && <button onClick={handleBack}>Back Page</button>}
                        <button onClick={handleSubmit}>
                            {step === 4 ? 'Submit KYC' : 'Proceed'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kyc