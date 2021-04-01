import React from "react";
import styles from './MyPost.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postElement = props.posts.map((post) =>
    <Post message={post.message} like={post.likeCount} id={post.id}/>)

  let newPostElement = React.createRef();

  let onAddPost = () => {
  props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
 /*   props.dispatch(updateNewPostTextActionCreator(text));*/
  }


  return (
    <div><h2>My posts</h2>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div className={styles.post}>
        {postElement}
      </div>
    </div>
  )
}

export default MyPosts;