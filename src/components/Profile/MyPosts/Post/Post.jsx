import React from "react";
import styles from './Post.module.css'
import ava from "../../../../assets/images/kong-icon.svg"

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src={ava} alt="1"/>
      {props.message}
      <div>
        <span>Like</span> {props.like}
      </div>
    </div>
  )
}

export default Post;