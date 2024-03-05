import { createContext, useState, useEffect } from "react";
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
    const data = await response.json();
    console.log(data);

    if (response.status === 201) {
      setShowAlert(true);
      setAlertMessage("Account created successfully!");
      setAlertSeverity("success");
      navigate("/confirmation-mail");
    } else {
      setShowAlert(true);
      setAlertMessage("Failed to register user.");
      setAlertSeverity("error");
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    console.log("User Login");
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

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      setShowAlert(true);
      setAlertMessage("Login Successful");
      setAlertSeverity("success");
      navigate("/dashboard");
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

  useEffect(() => {
    if (loading) {
      updateToken();
    }
    const mins = 1000 * 60 * 4;
    const interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, mins);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider
      value={{
        authTokens,
        user,
        registerUser,
        loginUser,
        logoutUser,
        showAlert,
        alertMessage,
        alertSeverity,
        setShowAlert,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
