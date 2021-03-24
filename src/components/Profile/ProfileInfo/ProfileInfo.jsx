import React from "react";
import logo2 from "../../../assets/images/hostgator.svg";
import styles from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src={logo2} alt="1"/>
      </div>
      <div className={styles.blok}>
        ava
      </div>
    </div>
  )
}

export default ProfileInfo;