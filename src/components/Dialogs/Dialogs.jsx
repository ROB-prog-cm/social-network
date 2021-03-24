import styles from './Dialogs.module.css'
import React from "react";
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";


const Dialogs = (props) => {

  let dialogsElement = props.state.dialogs.map((dialog) => <DialogsItem name={dialog.name} id={dialog.id}/>)
  let messageElement = props.state.messages.map((item) => <Message message={item.message}/>)

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>
        {dialogsElement}
      </div>
      <div className={styles.messages}>
        {messageElement}
      </div>
    </div>
  );
}

export default Dialogs;
