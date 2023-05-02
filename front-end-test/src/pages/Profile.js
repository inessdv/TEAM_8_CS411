import styles from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={styles.profile}>
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
      <div className={styles.profileChild} />
      <a className={styles.iconProfileCircle}>
        <img
          className={styles.groupIcon}
          alt=""
          src="/-icon-profile-circle.svg"
        />
      </a>
      <div className={styles.profile1}>Profile</div>
      <img className={styles.profileItem} alt="" src="/ellipse-6.svg" />
      <div className={styles.johnDoe}>John Doe</div>
      <div className={styles.profileInner} />
      <div className={styles.bio}>Bio</div>
      <div className={styles.savedJourneys}>Saved Journeys</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.profileChild1} />
      <div className={styles.profileChild2} />
      <div className={styles.picOverlay}>PIC overlay</div>
      <div className={styles.romeItaly}>Rome, Italy</div>
      <div className={styles.parisFrance}>Paris, France</div>
      <div className={styles.bostonMa}>Boston, MA</div>
    </div>
  );
};

export default Profile;
