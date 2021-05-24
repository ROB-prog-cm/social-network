import React from "react";
import styles from './MyPost.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../validation/validator";
import {Textarea} from "../../formControl/FormControl";


let maxLengh10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText" placeholder="Add text..."
          validate={[required, maxLengh10]}/>
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

const MyPosts = (props) => {

  let postElement = props.posts.map((post) =>
    <Post message={post.message} like={post.likeCount} id={post.id}/>)

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div>
      <h2>My posts</h2>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={styles.post}>
        {postElement}
      </div>
    </div>
  )
}

export default MyPosts;