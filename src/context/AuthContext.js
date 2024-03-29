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
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  // KYC
  const [step, setStep] = useState(0);
  const [identificationType, setIdentificationType] = useState("");
  const [identificationDocument, setIdentificationDocument] = useState(null);
  const [addressDocumentType, setAddressDocumentType] = useState("");
  const [addressDocument, setAddressDocument] = useState(null);

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

        // setFormData({
        //   ...formData,
        //   addressDocument: file,
        // });
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
    e.preventDefault();
    console.log("Student Created");
    let response = await fetch(
      "https://crest-backend.onrender.com/api/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: e.target.name.value,
          lastname: e.target.name.value,
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
  };

  const loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch(
      "https://crest-backend.onrender.com/api/signin/",
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

      if (data.kyc_verified) {
        setShowAlert(true);
        setAlertMessage("Login Successful");
        setAlertSeverity("success");
        navigate("/dashboard");
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
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  const updateToken = async () => {
    let response = await fetch(
      "https://crest-backend.onrender.com/api/token/refresh/",
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

    try {
      const response = await fetch(
        `https://crest-backend.onrender.com/api/users/${user.user_id}/`,
        {
          method: "PATCH",
          body: formData,
        }
      );
      if (response.ok) {
        setShowAlert(true);
        setAlertMessage("Login Successful");
        setAlertSeverity("success");
        navigate("/dashboard");
      } else {
        const data = await response.json();
        setShowAlert(true);
        setAlertMessage("KYC Verification Failed");
        setAlertSeverity("error");
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }
    const mins = 1000 * 60 * 9;
    const interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, mins);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  const contextData = {
    authTokens,
    user,
    registerUser,
    loginUser,
    logoutUser,
    showAlert,
    alertMessage,
    alertSeverity,
    setShowAlert,

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
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
