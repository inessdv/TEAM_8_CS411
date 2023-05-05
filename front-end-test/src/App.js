
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

  const apiKey = '15aeee8ccbc94a419df212006230405';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=New%20York`;
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    mode: 'no-cors'
  };
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {const temperature = data.current.temp_f;
      const temperatureDisplay = document.getElementById("temperature-display");
      temperatureDisplay.innerText = `${temperature}°F`;
      fetch("https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name%2Crating%2Cformatted_phone_number&key=AIzaSyCeAOHvjScLJ497zKk3GYLwOMmX_a0uQOY", requestOptions)
  .then(response => response.text())
  .then(result => console.log("api call success " + result))
  .catch(error => console.log('error', error));
    
    })
    .catch(error => console.error(error));
    
  


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
