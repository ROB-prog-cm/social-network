import React from "react";
import logo2 from "../../../assets/images/hostgator.svg";
import styles from './ProfileInfo.module.css'
import {Preloader} from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";




const ProfileInfo = (props) => {

/*

  if (!props.profile) {
    return <Preloader/>
  }
*/


  return (
    <div>
      {/*<div>
        <img src={logo2} alt="1"/>
      </div>*/}
      <div className={styles.element}>
        <img className={styles.ava} src={logo2}/>
        <ProfileStatus/>
      </div>
    </div>
  )
}

export default ProfileInfo;