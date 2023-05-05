const express = require("express");
const PORT = process.env.PORT||27107;

const cors = require('cors'); 
const app = express();
app.use(cors());
app.use(express.json());

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
  
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
})

app.get('/weather', (req, res) => {
    res.json({weather: "Its rainy today"})
})

app.get('/place', (req, res) => {
  res.json({place: "You are in boston"})
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });