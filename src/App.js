import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service/Services";
import { AuthProvider } from "./context/AuthContext";
import ConfirmationMail from "./pages/ConfirmationMail";
import PrivateRoutes from "./utils/PrivateRoutes";
import Dashboard from "./pages/Dashboard";
import Kyc from "./pages/Kyc";

function App() {
  return (
    <div className="page__gradient">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Service />} />

            {/* Auth */}
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/confirmation-mail" element={<ConfirmationMail />} />

            {/* Protected Routes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/kyc-verification" element={<Kyc />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
