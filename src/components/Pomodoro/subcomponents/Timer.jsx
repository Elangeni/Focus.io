import React from "react";



import styles from "./Timer.module.css";

const Timer = ({ minutes }) => {

  return (
    <div className={styles.timerContainer}>
      <h3>{minutes}:00</h3>
    </div>
  );
};

export default Timer;
