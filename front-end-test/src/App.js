
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
import GoogleLogin from 'react-google-login';

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

const responseSuccessGoogle = (response) => {
  console.log(response);
}

const responseErrorGoogle = (response) => {

}


  return (
    <>
    <div className="App">
      <h1>{message}</h1>
      <h1>Log in with GOOGLE </h1>
      <GoogleLogin
        clientId="44906587167-mq3o0850m82thd3k1l7p89h56sca7rv0.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={'single_host_origin'}
      />,
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
