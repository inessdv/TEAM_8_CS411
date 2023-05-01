import { useEffect } from "react";
import React, { useState } from "react";
import styles from "./Home.module.css";
import '../global.css';
// line 49 is the input field where the api call should be made

const mockData = [
  {
    id: 1,
    city: "Rome",
    country: "Italy",
    lat: 41.9028,
    lng: 12.4964,
  },
  {
    id: 2,
    city: "Madrid",
    country: "Spain",
    lat: 40.4168,
    lng: -3.7038,
  },
  {
    id: 3,
    city: "Paris",
    country: "France",
    lat: 48.8566,
    lng: 2.3522,
  },
];


const Home = () => {
  useEffect(() => {
    
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    
  }, []);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 2) {
      const searchResults = mockData.filter(
        (data) =>
          data.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className={styles.home}>
      <div className={styles.homeChild} />
      <div className={styles.websitetitle}>
        <div className={styles.travelbuddy}>
          <span>Travel</span>
          <span className={styles.buddy}>Buddy</span>
        </div>
        <img className={styles.locationIcon} alt="" src="/location-icon.svg" />
      </div>
      <button className={styles.signInButton} >
        <div className={styles.signInButtonChild} />
        <div className={styles.signUp}>Sign up</div>
      </button>
      <div className={styles.anAutomaticTravel}>
        An automatic travel itinerary generator
      </div>
      <button className={styles.helpButton} >
        <div className={styles.ellipseParent}>
          <img className={styles.ellipseParent} alt="" src="/ellipse-4.svg" />
          <div className={styles.div}>?</div>
        </div>
      </button>
      <div>
        <input
          className={styles.searchBarTotal}
          type="text"
          placeholder="Rome, Italy"
          onChange={handleSearch} 
          value={query}
        />
        {results.length > 0 && (
          <ul>
            {results.map((result) => (
              <li key={result.id}>
                {result.city}, {result.country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
