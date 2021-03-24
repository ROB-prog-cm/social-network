import styles from './../Dialogs.module.css'
import React from "react";

const Message = (props) => {

  let messageAdd = () => {
    let add = newElement.current.value;
    alert(add)
  }

  let newElement = React.createRef();
  return (
    <div>
      <div className={styles.dialogs}>{props.message}</div>
      <textarea ref={newElement}></textarea>
      <button onClick={messageAdd}>add</button>
    </div>
  )
}

export default Message;
