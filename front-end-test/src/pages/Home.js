import { useEffect } from "react";
import styles from "./Home.module.css";
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
      <input
        className={styles.searchBarTotal}
        type="text"
        placeholder="Rome, Italy"
      />
    </div>
  );
};

export default Home;
