import styles from './Dialogs.module.css'
import React from "react";
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../formControl/FormControl";
import {maxLengthCreator, required} from "../../validation/validator";

let maxLengh10 = maxLengthCreator(100)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               validate={[required, maxLengh10]}
               name="newMessageBody"
               placeholder="Enter"/>
      </div>
      <div>
        <button>add</button>
      </div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm)


const Dialogs = (props) => {

  let state = props.dialogsPage;
  let dialogsElement = state.dialogs.map((dialog) => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
  let messageElement = state.messages.map((item) => <Message key={item.id} message={item.message}/>)
  let newMessageBody = state.newMessageBody;


  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>
        {dialogsElement}
      </div>
      <div className={styles.messages}>
        <div>{messageElement}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  );
}


export default Dialogs;
