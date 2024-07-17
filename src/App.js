import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service/Services";
import TnCs from "./pages/TermsAndCondition/TnCs";
import { AuthProvider } from "./context/AuthContext";
import ConfirmationMail from "./pages/ConfirmationMail";
import PrivateRoutes from "./utils/PrivateRoutes";
import Dashboard from "./pages/Dashboard";
import Kyc from "./pages/Kyc";
import AdminDashboard from "./pages/AdminDashboard";
import { ThemeProvider } from "./context/ThemeContext";
import FloatingButton from "./components/common/FloatingButton";
import ForgetPassword from "./pages/ForgetPassword";
import ForgetPasswordOtp from "./pages/ForgetPasswordOtp";

function App() {
  return (
    <div className="page__gradient">
      <Router>
        <AuthProvider>
          <ThemeProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Service />} />
              <Route path="/tncs" element={<TnCs />} />

              {/* Auth */}
              <Route path="/signup" element={<Register />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/confirmation-mail" element={<ConfirmationMail />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route
                path="/forget-password-reset"
                element={<ForgetPasswordOtp />}
              />

              {/* Protected Routes */}
              <Route element={<PrivateRoutes />}>
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/kyc-verification" element={<Kyc />} />
                <Route path="/admin/*" element={<AdminDashboard />} />
              </Route>
            </Routes>
            <FloatingButton />
          </ThemeProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
