import styles from "./IntroForm.module.css";
import React, { useState } from 'react';


const IntroForm = () => {

  const [showDiv, setShowDiv] = useState(true);
  const [showDiv1, setShowDiv1] = useState(true);


  const handleCloseDiv = () => {
    console.log("close div")
    setShowDiv(false);
    
  };

  const handleCloseDiv1 = () => {
    console.log("close div")
    setShowDiv1(false);
    
  };
  

  return (
    <div className={styles.introForm}>
      <a href="/">
        <div className={styles.travelbuddy} >
        <span>Travel</span>
        <span className={styles.buddy}>Buddy</span>
      </div> 
      </a>
      <img className={styles.locationIcon} alt="" src="/location-icon.svg" />
      <img className={styles.introFormChild} alt="" src="/rectangle-6.svg" />
      <div className={styles.introFormItem} />
      <input className={styles.searchBar} type="text" placeholder="Search top attractions"/>
      <img className={styles.searchIcon} alt="" src="/search-icon.svg" />
      <div className={styles.enterTripDetails}>Enter trip details for Rome</div>
      <a href= "/profile">
        <img
        className={styles.iconProfileCircle}
        alt="Profile"
        src="/-icon-profile-circle.svg"
        
      /> </a>
      <div className={styles.whatDoYou}>What do you want to see?</div>
      <div className={styles.startLocation}>Start Location</div>
      <input className={styles.searchBar1} type="text" placeholder= "Enter an address"/>
      <div className={styles.endLocation}>End Location</div>
      <input className={styles.searchBar2} type="text" placeholder= "Enter an address"/>
      <div className={styles.introFormInner} />
      <div className={styles.startAndEnd}>
        Start and end locations are the same
      </div>
      {showDiv1 && <div className={styles.destinationBlock}>
        <div className={styles.destinationBlockChild} />
        <img className={styles.destinationBlockItem} alt="" src="/line-3.svg" />
        <div className={styles.treviFountain}>Trevi Fountain</div>
        <img
          className={styles.destinationBlockInner}
          alt=""
          src="/line-4.svg"
        />
        <img className={styles.lineIcon} alt="" src="/line-5.svg" onClick={handleCloseDiv1}/>
        <div className={styles.pictureCoverFromContainer}>
          <p className={styles.pictureCoverFrom}>{`picture cover from `}</p>
          <p className={styles.pictureCoverFrom}>google maps</p>
        </div>
      </div> }
      <div className={styles.destinationBlock1}>
      {showDiv && <div> <div className={styles.destinationBlockChild} />
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
        <img className={styles.lineIcon} alt="" src="/line-51.svg" onClick={handleCloseDiv}/>
        <div className={styles.pictureCoverFromContainer}>
          <p className={styles.pictureCoverFrom}>{`picture cover from `}</p>
          <p className={styles.pictureCoverFrom}>google maps</p>
        </div>
        </div>}
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
