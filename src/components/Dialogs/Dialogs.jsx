import styles from './Dialogs.module.css'
import React from "react";
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";


const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElement = state.dialogs.map((dialog) => <DialogsItem name={dialog.name} id={dialog.id}/>)
  let messageElement = state.messages.map((item) => <Message message={item.message}/>)
  let newMessageBody = state.newMessageBody;

  

  let onSendMessageClick = () => {
    props.sendMessage();
  }
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body)
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>
        {dialogsElement}
      </div>
      <div className={styles.messages}>
        <div>{messageElement}</div>
        <div>
          <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter"></textarea></div>
          <div>
            <button onClick={onSendMessageClick}>add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
