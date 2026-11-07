import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WhatsApp  from  "./components/WhatsApp";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AllRooms from "./Pages/AllRooms";
import Booking from "./Pages/Booking";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import AboutUs from "./Pages/AboutUs"
import Mpesa from "./components/Mpesa"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div className="App">
        < Navbar/>
        
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allrooms" element={<AllRooms/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/login" element={<Login/>}/>
           <Route path="/signup" element={<SignUp/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/mpesa" element={<Mpesa/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;