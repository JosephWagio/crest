import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service/Services";
import { AuthProvider } from "./context/AuthContext";
import ConfirmationMail from "./pages/ConfirmationMail";
import Footer from "./components/common/Footer/Footer";
import Navbar from "./components/common/Nav/Navbar";

function App() {
  return (
    <div className="page__gradient">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/services" exact element={<Service />} />

            {/* Auth */}
            <Route path="/signup" exact element={<Register />} />
            <Route path="/signin" exact element={<Login />} />
            <Route path="/confirmation-mail" element={<ConfirmationMail />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
