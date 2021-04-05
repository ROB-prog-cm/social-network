import React from "react";
import styles from "./styles.module.css";
import gif from "../../assets/images/1484.gif";


export const Preloader = ()=>{
  return(
      <div>
        <img src={gif}/>
      </div>
    )
}