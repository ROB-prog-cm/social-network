import React from "react";
import styles from './Header.module.css'
import logo from "../../assets/images/datadog.svg";

const Header = () => {

  return (
    <header className={styles.header}>
      <img src={logo} alt="1"/>
    </header>
  )
}

export default Header;