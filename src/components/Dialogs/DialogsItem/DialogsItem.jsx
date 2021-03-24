import styles from './../Dialogs.module.css'
import React from "react";
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={styles.item + ' ' + styles.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogsItem;
