import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service/Services";
import { AuthProvider } from "./context/AuthContext";
import ConfirmationMail from "./pages/ConfirmationMail";

function App() {
  return (
    <div className="page__gradient">
      <Router>
<<<<<<< HEAD
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/services" exact element={<Service/>}/>
          <Route path="/signup" exact element={<Register/>}/>
          <Route path="/signin" exact element={<Login/>}/>
        </Routes>
        <Footer/>
=======
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
>>>>>>> 24824c525a5ae79949b7dd8f97136901c9723707
      </Router>
    </div>
  );
}

export default App;
