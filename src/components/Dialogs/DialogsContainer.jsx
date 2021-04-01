import styles from './Dialogs.module.css'
import React from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

  return <StoreContext.Consumer>{
      (store) => {
        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator())
        }
        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageCreator(body))
        }
      return  <Dialogs dialogsPage={state} sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange}/>
      }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;
