import React from "react";
import styles from './Header.module.css'
import logo from "../../assets/images/datadog.svg";
import {NavLink} from "react-router-dom";

const Header = (props) => {

  return (
    <header className={styles.header}>
      <img src={logo} alt="1"/>
      <div className={styles.login}>
        {props.isAuth ? props.login
          : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header;