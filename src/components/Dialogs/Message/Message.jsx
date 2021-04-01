import styles from './Message.module.css'
import React from "react";

const Message = (props) => {

  let messageAdd = () => {
    let add = newElement.current.value;
    alert(add)
  }

  let newElement = React.createRef();
  return (
    <div>
      <div>{props.message}</div>
    </div>
  )
}

export default Message;
