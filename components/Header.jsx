import React from 'react';
import * as styles from './Header.module.css';

const Header = (props) => {
  return (
    <nav className={styles.header}>
      {props.children}
    </nav>
  )
};

export default Header;

