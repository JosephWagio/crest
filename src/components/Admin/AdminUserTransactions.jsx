import React, { useContext, useEffect, useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import AuthContext from '../../context/AuthContext'
import { AiOutlineTransaction } from "react-icons/ai";
import { Alert, CircularProgress } from '@mui/material';

const AdminUserTransactions = ({ handleCloseSidebar }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isLoading1, setIsLoading1] = useState(false)
    const { userProfile, allUsersTransactions, allTransactions, showAlert, alertSeverity, alertMessage, setShowAlert, setAlertMessage, setAlertSeverity } = useContext(AuthContext)

    useEffect(() => {
        allUsersTransactions()
    }, [allUsersTransactions])

    const handleApproveTransaction = async (id, e) => {
        setIsLoading(true)
        try {
            e.preventDefault()
            const formData = new FormData();
            formData.append("status", "done");

            const response = await fetch(`https://crest-backend.onrender.com/api/transaction/${id}/`,
                {
                    method: "PATCH",
                    body: formData
                }
            )
            if (response.ok) {
                setShowAlert(true);
                setAlertMessage("Transaction Approved");
                setAlertSeverity("success");
            }
            else {
                const errorData = await response.json();
                const errorMessage = errorData.error || "Approval failed";
                console.log(errorMessage)
                setShowAlert(true);
                setAlertMessage(errorMessage)
                setAlertSeverity("error");
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDeclineTransaction = async (id, e) => {
        setIsLoading1(true)
        try {
            e.preventDefault()
            const formData = new FormData();
            formData.append("status", "declined");

            const response = await fetch(`https://crestbackend.up.railway.app/api/transaction/${id}/`,
                {
                    method: "PATCH",
                    body: formData
                }
            )
            if (response.ok) {
                setShowAlert(true);
                setAlertMessage("Transaction Declined");
                setAlertSeverity("success");
            }
            else {
                const errorData = await response.json();
                const errorMessage = errorData.error || "Declined failed";
                console.log(errorMessage)
                setShowAlert(true);
                setAlertMessage(errorMessage)
                setAlertSeverity("error");
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading1(false)
        }
    }

    return (
        <div className='main-container'>
            {showAlert && (
                <Alert
                    severity={alertSeverity}
                    onClose={() => setShowAlert(false)}
                    style={{ position: 'fixed', top: "2%", right: "5%", zIndex: 9999, width: "40%" }}
                >
                    {alertMessage}
                </Alert>
            )}
            <header className='main-container-nav'>
                <div className='close-sider-button' onClick={handleCloseSidebar} >
                    <CiMenuFries />
                </div>
                <div className="heading">
                    <h2>Hello,</h2>
                    <div>
                        <h2>{userProfile && userProfile.user.first_name}</h2>
                        <h2>{userProfile && userProfile.user.last_name}</h2>
                    </div>
                    👋
                </div>
            </header>

            <div className='main__content'>
                <div className="users__container">
                    <div className='users__container-head'>
                        <h2>User Transactions <AiOutlineTransaction /></h2>
                    </div>
                </div>
                <div className='users__transactions'>
                    {allTransactions && allTransactions.map((transaction) => (
                        <div className='users__transactions-transaction' key={transaction.id}>
                            <h3>{transaction.user_name}</h3>
                            <div className='users__transactions-inner'>
                                <p>Transaction Type: <span>{transaction.transaction_type}</span></p>
                                <p>Wallet: {transaction.wallet_title}</p>
                                {transaction.transaction_type === "withdrawal" && (
                                    <p id='wallet_add'>Wallet Address: <h5>{transaction.wallet_address}</h5></p>
                                )}
                                <p>Amount: <span>{transaction.amount}</span></p>
                                <p>Date: <span>{transaction.date}</span></p>
                            </div>
                            {transaction.status === "pending" && (
                                <div className='users__transactions-btns'>
                                    <button onClick={(e) => handleApproveTransaction(transaction.id, e)}>
                                        {isLoading ? (
                                            <CircularProgress color="inherit" size="20px" />
                                        ) : "approve"}

                                    </button>
                                    <button onClick={(e) => handleDeclineTransaction(transaction.id, e)}>
                                        {isLoading1 ? (
                                            <CircularProgress color="inherit" size="20px" />
                                        ) : "decline"}

                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default AdminUserTransactions