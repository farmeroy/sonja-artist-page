import React from "react";
import styles from "./BigRoundBtn.module.css";

const BigRoundBtn = (props) => {

  const horizontalDisplay = props.left ? styles.left : styles.right;

  return (
    <button onClick={props.onClick} id={props.btnId} className={`${styles.bigBtn} ${horizontalDisplay}`}>
      {props.children}
    </button>
  );
};

export default BigRoundBtn;
