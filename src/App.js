import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css';
import Navbar from "./components/common/Nav/Navbar"
import Footer from "./components/common/Footer/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/signup" exact element={<Register/>}/>
          <Route path="/signin" exact element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
