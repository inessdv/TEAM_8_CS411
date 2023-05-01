import styles from "./IntroForm.module.css";
const IntroForm = () => {
  return (
    <div className={styles.introForm}>
      <div className={styles.travelbuddy}>
        <span>Travel</span>
        <span className={styles.buddy}>Buddy</span>
      </div>
      <img className={styles.locationIcon} alt="" src="/location-icon.svg" />
      <img className={styles.introFormChild} alt="" src="/rectangle-6.svg" />
      <div className={styles.introFormItem} />
      <input className={styles.searchBar} type="text" />
      <img className={styles.searchIcon} alt="" src="/search-icon.svg" />
      <div className={styles.searchTopAttractions}>Search top attractions</div>
      <div className={styles.enterTripDetails}>Enter trip details for Rome</div>
      <img
        className={styles.iconProfileCircle}
        alt=""
        src="/-icon-profile-circle.svg"
      />
      <div className={styles.whatDoYou}>What do you want to see?</div>
      <div className={styles.startLocation}>Start Location</div>
      <input className={styles.searchBar1} type="text" />
      <div className={styles.enterAnAddress}>Enter an address</div>
      <div className={styles.endLocation}>End Location</div>
      <input className={styles.searchBar2} type="text" />
      <div className={styles.enterAnAddress1}>Enter an address</div>
      <div className={styles.introFormInner} />
      <div className={styles.startAndEnd}>
        Start and end locations are the same
      </div>
      <div className={styles.destinationBlock}>
        <div className={styles.destinationBlockChild} />
        <img className={styles.destinationBlockItem} alt="" src="/line-3.svg" />
        <div className={styles.treviFountain}>Trevi Fountain</div>
        <img
          className={styles.destinationBlockInner}
          alt=""
          src="/line-4.svg"
        />
        <img className={styles.lineIcon} alt="" src="/line-5.svg" />
        <div className={styles.pictureCoverFromContainer}>
          <p className={styles.pictureCoverFrom}>{`picture cover from `}</p>
          <p className={styles.pictureCoverFrom}>google maps</p>
        </div>
      </div>
      <div className={styles.destinationBlock1}>
        <div className={styles.destinationBlockChild} />
        <img
          className={styles.destinationBlockItem}
          alt=""
          src="/line-31.svg"
        />
        <div className={styles.treviFountain}>The Colosseum</div>
        <img
          className={styles.destinationBlockInner}
          alt=""
          src="/line-41.svg"
        />
        <img className={styles.lineIcon} alt="" src="/line-51.svg" />
        <div className={styles.pictureCoverFromContainer}>
          <p className={styles.pictureCoverFrom}>{`picture cover from `}</p>
          <p className={styles.pictureCoverFrom}>google maps</p>
        </div>
        <div className={styles.destinationBlock2}>
          <div className={styles.destinationBlockChild} />
          <img
            className={styles.destinationBlockItem}
            alt=""
            src="/line-32.svg"
          />
          <div className={styles.treviFountain}>Roman Forum</div>
          <img
            className={styles.destinationBlockInner}
            alt=""
            src="/line-42.svg"
          />
          <img className={styles.lineIcon} alt="" src="/line-52.svg" />
          <div className={styles.pictureCoverFromContainer}>
            <p className={styles.pictureCoverFrom}>{`picture cover from `}</p>
            <p className={styles.pictureCoverFrom}>google maps</p>
          </div>
        </div>
      </div>
      <button className={styles.rectangleButton} />
      <div
        className={styles.generateMyItinerary}
      >{`Generate my Itinerary! `}</div>
      <button className={styles.introFormChild1} />
      <div className={styles.clearForm}>Clear Form</div>
    </div>
  );
};

export default IntroForm;
