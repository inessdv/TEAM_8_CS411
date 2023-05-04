
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

  const apiKey = '15aeee8ccbc94a419df212006230405';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=New%20York`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {const temperature = data.current.temp_f;
      const temperatureDisplay = document.getElementById("temperature-display");
      temperatureDisplay.innerText = `${temperature}°F`;})
    .catch(error => console.error(error));
    
  


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/IntroForm" element={<IntroForm />} />
        <Route exact path="/Map" element={<Map />} />
        <Route exact path="/Profile" element={<Profile />} />
        {/* other routes go here */}
      </Routes>
    </Router>
  );
}

export default App;
