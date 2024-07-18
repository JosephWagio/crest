import { createContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  const [userProfile, setUserProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [email, setEmail] = useState(() =>
    localStorage.getItem("forget-password-email")
      ? JSON.parse(localStorage.getItem("forget-password-email"))
      : ""
  );
  console.log("This is the Forget Email", email)

  // KYC
  const [step, setStep] = useState(0);
  const [identificationType, setIdentificationType] = useState("");
  const [identificationDocument, setIdentificationDocument] = useState(null);
  const [addressDocumentType, setAddressDocumentType] = useState("");
  const [addressDocument, setAddressDocument] = useState(null);

  // Admin
  const [allUsers, setAllUsers] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef(null);
  const addressFileInputRef = useRef(null);

  const handleFileUpload = () => {
    setIdentificationDocument(null);
    fileInputRef.current.click();
  };
  const handleAddressDocumentUpload = () => {
    setAddressDocument(null);
    addressFileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size <= 10 * 1024 * 1024) {
        setIdentificationDocument(file);
        setShowAlert(false);
      } else {
        setShowAlert(true);
        setAlertMessage("File size should be less than 10MB.");
        setAlertSeverity("error");
      }
    }
  };
  const handleAddressDocumentChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size <= 10 * 1024 * 1024) {
        setAddressDocument(file);

        setShowAlert(false);
      } else {
        setShowAlert(true);
        setAlertMessage("File size should be less than 10MB.");
        setAlertSeverity("error");
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (file && file.size <= 10 * 1024 * 1024) {
      setIdentificationDocument(file);
    } else {
      alert("File size should be less than 10MB.");
    }
  };

  const handleDropAddressDocument = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (file && file.size <= 10 * 1024 * 1024) {
      setAddressDocument(file);
    } else {
      alert("File size should be less than 10MB.");
    }
  };
  const navigate = useNavigate();

  const registerUser = async (e) => {
    setIsLoading(true);
    try {
      e.preventDefault();
      console.log("Student Created");
      let response = await fetch(
        "https://crestbackend.up.railway.app/api/signup/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: e.target.firstname.value,
            last_name: e.target.lastname.value,
            email: e.target.email.value,
            password: e.target.password.value,
          }),
        }
      );
      // const data = await response.json();

      if (response.status === 201) {
        setShowAlert(true);
        setAlertMessage("Account created successfully!");
        setAlertSeverity("success");
        navigate("/confirmation-mail");
      } else {
        setShowAlert(true);
        setAlertMessage("Request Failed something happened");
        setAlertSeverity("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginUser = async (e) => {
    setIsLoading(true);

    try {
      e.preventDefault();
      let response = await fetch(
        "https://crestbackend.up.railway.app/api/signin/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: e.target.email.value,
            password: e.target.password.value,
          }),
        }
      );
      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        userDetails();

        if (data.kyc_verified) {
          setShowAlert(true);
          setAlertMessage("Login Successful");
          setAlertSeverity("success");
          if (data.is_superuser) {
            navigate("/admin/users");
          } else {
            navigate("/dashboard/home");
          }
        } else {
          setShowAlert(true);
          setAlertMessage("KYC Verification Pending");
          setAlertSeverity("info");
          navigate("/kyc-verification");
        }
      } else {
        setShowAlert(true);
        setAlertMessage("Failed to login user");
        setAlertSeverity("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const forgetPassword = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      let response = await fetch(
        "https://crestbackend.up.railway.app/api/password-reset/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: e.target.email.value,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setShowAlert(true);
        setAlertMessage(data.message);
        setAlertSeverity("success");
        localStorage.setItem(
          "forget-password-email",
          JSON.stringify(e.target.email.value)
        );
        navigate("/forget-password-reset");
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const forgetPasswordReset = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      let response = await fetch(
        "https://crestbackend.up.railway.app/api/password-reset-confirm/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: e.target.email.value,
            otp: e.target.otp.value,
            new_password: e.target.password.value,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setShowAlert(true);
        setAlertMessage(data.message);
        setAlertSeverity("success");
        navigate("/signin");
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  const updateToken = async () => {
    let response = await fetch(
      "https://crestbackend.up.railway.app/api/token/refresh/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: authTokens?.refresh }),
      }
    );
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  // ============================================== User ======================================
  const userDetails = async () => {
    try {
      const response = await fetch(
        `https://crestbackend.up.railway.app/api/user_profile/${user.user_id}/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (response.status === 200) {
        setUserProfile(data);
      } else {
        console.error("Failed to fetch user details:", response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const allUsersDetails = async () => {
    try {
      const response = await fetch(
        "https://crestbackend.up.railway.app/api/user_profile/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        setAllUsers(data);
      } else {
        console.error("Failed to fetch user details:", response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const allUsersTransactions = async () => {
    try {
      const response = await fetch(
        "https://crest-backend.onrender.com/api/transaction/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`,
          },
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        setAllTransactions(data);
      } else {
        console.error("Failed to fetch user details:", response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // =============================================== KYC ======================================
  const nextStep = () => setStep(step + 1);

  const KycVerification = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("identification_type", identificationType);
    formData.append("identification_document", identificationDocument);
    formData.append("address_document_type", addressDocumentType);
    formData.append("address_document", addressDocument);
    formData.append("kyc_verified", true);

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://crestbackend.up.railway.app/api/users/${user.user_id}/`,
        {
          method: "PATCH",
          body: formData,
        }
      );
      if (response.ok) {
        setShowAlert(true);
        setAlertMessage("Login Successful");
        setAlertSeverity("success");
        navigate("/dashboard/home");
      } else {
        const data = await response.json();
        setShowAlert(true);
        setAlertMessage("KYC Verification Failed");
        setAlertSeverity("error");
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getEmail = async () => {
    try {
      const jsonValue = JSON.parse(
        localStorage.getItem("forget-password-email")
      );
      setEmail(jsonValue);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  useEffect(() => {
    getEmail();
  }, [email]);

  useEffect(() => {
    const mins = 1000 * 60 * 9;
    const interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, mins);
    if (user) {
      userDetails();
    }
    return () => clearInterval(interval);
  }, [authTokens, loading, user, userDetails]);

  const contextData = {
    authTokens,
    user,
    userProfile,
    userDetails,
    registerUser,
    loginUser,
    logoutUser,
    showAlert,
    alertMessage,
    alertSeverity,
    setShowAlert,
    setAlertMessage,
    setAlertSeverity,
    isLoading,
    setIsLoading,
    forgetPassword,
    forgetPasswordReset,

    // KYC
    step,
    setStep,
    nextStep,
    KycVerification,
    identificationType,
    setIdentificationType,
    identificationDocument,
    setIdentificationDocument,
    addressDocumentType,
    setAddressDocumentType,
    addressDocument,
    setAddressDocument,
    handleFileUpload,
    handleFileChange,
    fileInputRef,
    addressFileInputRef,
    handleDrop,
    handleDragOver,
    handleDropAddressDocument,
    handleAddressDocumentChange,
    handleAddressDocumentUpload,

    // Admin
    allUsersDetails,
    allUsers,
    allUsersTransactions,
    allTransactions,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
