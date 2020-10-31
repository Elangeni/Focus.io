import React from "react";
import styles from "./Pomodoro.module.css";
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

function PomodoroTimer() {
  var minutes = 25;
  var seconds = 0;

  var sessionMinutes = 25;
  var breakMinutes = 5;

  var flag = false;
  var temp = true;

  var minutes_interval = "";
  var seconds_interval = "";

  // Initialize sounds
  var click = new Audio("click.mp3");
  var bell = new Audio("bell.mp3");

  const template = () => {
      console.log("ok");
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = "00";

    document.getElementById("session-text").innerHTML = minutes + ":00";
    document.getElementById("break-text").innerHTML = breakMinutes + ":00";
  };

  const preStart = () => {
    minutes -= 1;
    seconds = 59;
  };

  const start = () => {
    console.log("lets begin");
    flag = true;
    click.play();

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    minutes_interval = setInterval(minutesTimer, 1000);
    seconds_interval = setInterval(secondsTimer, 1000);

    const minutesTimer = () => {
      if (seconds === 60) {
        minutes -= 1;
      }
      console.log(minutes);
      document.getElementById("minutes").innerHTML = minutes;

      if (minutes === 0 && seconds === 0) {
        bell.play();
      }
    };

    const secondsTimer = () => {
      seconds -= 1;
      document.getElementById("seconds").innerHTML = seconds;

      if (seconds < 10) {
        document.getElementById("seconds").innerHTML = "0" + seconds.toString();
      }

      //Fix me
      if (seconds <= 0) {
        if (minutes === 0) {
          clearInterval(minutes_interval);
          clearInterval(seconds_interval);

          bell.play();

          document.getElementById("done").innerHTML =
            "Session completed! Take a break.";
          document.getElementById("done").classList.add("show_message");
        }
        seconds = 60;
      }
    };
  };
  return (
    <div className={styles.container} onLoad={template}>
      <h1>It's time to focus</h1>
      <h4 id="minutes">{minutes}:00</h4>
      <div>
        <button className={styles.myButton} onClick={start}>
          Start
        </button>
        <button className={styles.myButton}>Reset</button>
      </div>
      <div className={styles.makeChanges}>
      <div className={styles.item}>
          <p>Set session length</p>
          <AiOutlineMinus /> {sessionMinutes} <AiOutlinePlus/>
      </div>
      <div className={styles.item}>
          <p>Set break length</p>
          <AiOutlineMinus /> {breakMinutes} <AiOutlinePlus/>
      </div>
      </div>
      
    </div>
  );
}

export default PomodoroTimer;

const Timer = () =>{
    
}