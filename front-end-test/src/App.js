
import { useState, useEffect } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import IntroForm from "./pages/IntroForm";
import Map from "./pages/Map1";
import Profile from "./pages/Profile";

function App() {
  /*
connecting to back end
*/
const [message, setMessage] = useState("");

useEffect(() => {
  fetch("http://localhost:27017/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
}, []);

  return (
    <>
    <div className="App">
      <h1>{message}</h1>
    </div>

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/IntroForm" element={<IntroForm />} />
        <Route exact path="/Map" element={<Map />} />
        <Route exact path="/Profile" element={<Profile />} />
        {/* other routes go here */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
