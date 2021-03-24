import React from "react";
import styles from './Profile.module.css'
import MyPosts from '../Profile/MyPosts/MyPosts';
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";


const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               newPostText={props.profilePage.newPostText}
               updateNewPostText={props.updateNewPostText}
               addPost={props.addPost}/>
    </div>
  )
}

export default Profile;