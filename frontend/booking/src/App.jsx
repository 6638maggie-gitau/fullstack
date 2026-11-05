import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatsApp  from  "./components/WhatsApp";
import "./App.css";
import GoogleMap from "./components/GoogleMap";
import AIBookingAssistant from "./Pages/AiBookingAssistant";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WhatsApp/>} />
            <Route path="/map" element={<GoogleMap />} />
            <Route path="/assistant" element={<AIBookingAssistant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;