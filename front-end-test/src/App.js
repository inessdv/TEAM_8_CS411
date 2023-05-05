
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
const [weather, SetWeather] = useState("");
const [place, SetPlace] = useState("");

useEffect(() => {
  fetch("http://localhost:27107/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
}, []);

useEffect(() => {
  fetch('http://localhost:27107/weather')
  .then((res) => res.json())
  .then((data) => SetWeather(data.weather));
}), [];

useEffect(() => {
  fetch("http://localhost:27107/place")
  .then((res) => res.json())
  .then((data) => SetPlace(data.place));
}), [];

  return (
    <>
    <div className="App">
      <h1>{message}</h1>
      <h1>{weather}</h1>
      <h1>{place}</h1>
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
