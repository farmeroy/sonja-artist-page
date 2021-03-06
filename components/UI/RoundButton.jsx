import React from 'react';
import * as styles from './RoundButton.module.css';

const RoundButton = (props) => {

  return (
    <button className={`${styles.button} `} onClick={props.onClick}>{props.children}
    </button>
  )
};

export default RoundButton;


