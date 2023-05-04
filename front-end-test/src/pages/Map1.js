import { Link } from "react-router-dom";
import styles from "./Map1.module.css";
const Map1 = () => {
  return (
    <div className={styles.map}>
      <a className={styles.travelbuddy}>
        <span>Travel</span>
        <span className={styles.buddy}>Buddy</span>
      </a>
      <a className={styles.locationIcon}>
        <img className={styles.locationIconChild} alt="" src="/ellipse-3.svg" />
        <img className={styles.locationIconItem} alt="" src="/ellipse-1.svg" />
        <img className={styles.locationIconInner} alt="" src="/polygon-1.svg" />
        <img className={styles.ellipseIcon} alt="" src="/ellipse-2.svg" />
      </a>
      <div className={styles.mapChild} />
      <Link className={styles.iconProfileCircle} to="/profile">
        <img
          className={styles.groupIcon}
          alt=""
          src="/-icon-profile-circle.svg"
        />
      </Link>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.yourJourney}>Your Journey</div>
      <div className={styles.mapItem} />
      <button className={styles.start}>Start</button>
      <button className={styles.saveIcon}>
        <div className={styles.saveIconChild} />
        <img className={styles.saveIconItem} alt="" src="/line-6.svg" />
        <img className={styles.saveIconInner} alt="" src="/line-8.svg" />
        <img className={styles.lineIcon} alt="" src="/line-7.svg" />
        <img className={styles.arrowIcon} alt="" src="/arrow-3.svg" />
      </button>
      <div className={styles.travelBox}>
        <div className={styles.travelBoxChild} />
        <input className={styles.travelBoxItem} type="text" />
        <input className={styles.travelBoxInner} type="text" />
        <img className={styles.travelBoxChild1} alt="" src="/ellipse-7.svg" />
        <img className={styles.travelBoxChild2} alt="" src="/ellipse-9.svg" />
        <img className={styles.travelBoxChild3} alt="" src="/ellipse-9.svg" />
        <img className={styles.travelBoxChild4} alt="" src="/ellipse-9.svg" />
        <img className={styles.travelBoxChild5} alt="" src="/ellipse-8.svg" />
      </div>
    </div>
  );
};

export default Map1;
