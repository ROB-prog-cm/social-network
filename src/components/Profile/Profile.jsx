import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import * as Redirect from "react-router-dom";


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer/></div>
  )
}

export default Profile;