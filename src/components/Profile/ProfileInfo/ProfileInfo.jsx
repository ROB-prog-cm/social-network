import React from "react";
import logo2 from "../../../assets/images/hostgator.svg";
import styles from './ProfileInfo.module.css'
import {Preloader} from "../../Preloader/Preloader";


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img src={logo2} alt="1"/>
      </div>
      <div className={styles.element}>
        <img className={styles.ava} src={props.profile.photos.large}/>
      </div>
    </div>
  )
}

export default ProfileInfo;