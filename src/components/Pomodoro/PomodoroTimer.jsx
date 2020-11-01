import React from "react";
import styles from "./Pomodoro.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function PomodoroTimer() {
  var minutes = 25;
  var seconds = 0;

  var sessionMinutes = 25;
  var breakMinutes = 5;

  var flag = false;
  var temp = true;

  let minutes_interval = "";
  let seconds_interval = "";

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

  //Change the session length
  const increaseSession = () => {
    //Check if timer has already started
    if (flag) {
      alert("Please stop and reset the timer to make any changes.");
    }
    if (minutes < 60) {
      minutes += 1;
      console.log(minutes);
      document.getElementById("session-text").innerHTML = minutes;
      document.getElementById("minutes").innerHTML = minutes;
    } else {
      alert("Session cannot be longer than 60 minutes.");
    }
  };

  const decreaseSession = () => {
    //Check if timer has already started
    if (flag) {
      alert("Please stop and reset the timer to make any changes.");
    }
    if (minutes > 5) {
      minutes -= 1;
      console.log(minutes);
      document.getElementById("session-text").innerHTML = minutes;
      document.getElementById("minutes").innerHTML = minutes;
    } else {
      alert("Session must be at least 5 minutes.");
    }
  };

  //Change the break length
  const increaseBreak = () => {
    //Check if timer has already started
    if (flag) {
      alert("Please stop and reset the timer to make any changes.");
    }
    if (breakMinutes < 25) {
      breakMinutes += 1;
      document.getElementById("break-text").innerHTML = breakMinutes;
    } else {
      alert("Break cannot be longer than 25 minutes.");
    }
  };

  const decreaseBreak = () => {
    //Check if timer has already started
    if (flag) {
      alert("Please stop and reset the timer to make any changes.");
    }
    if (breakMinutes > 2) {
      breakMinutes -= 1;
      document.getElementById("break-text").innerHTML = breakMinutes;
    } else {
      alert("Break must be at least 2 minutes.");
    }
  };

  const start = () => {
    flag = true;
    click.play();

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    minutes_interval = setInterval(minutesTimer, 1000);
    seconds_interval = setInterval(secondsTimer, 1000);
  };
  

  return (
    <div className={styles.container} onLoad={template}>
      <h1>It's time to focus</h1>
      <div className={styles.timer}>
        <h4 id="minutes">{minutes}</h4>
        <h4>:</h4>
        <h4 id="seconds">{seconds === 0 ? "00" : seconds}</h4>
      </div>

      <div>
        <div className={styles.buttons}>
        <button
          className={styles.myButton}
          onClick={() => {
            preStart();
            start();
          }}
        >
          Start
        </button>
        <button
          className={styles.myButton}
          onClick={() => window.location.reload(false)}
        >
          Reset
        </button>
        </div>
        
      </div>
      <div className={styles.makeChanges}>
        <div className={styles.item}>
          
          <p>Set session length</p>
          <div className={styles.row}>
          <button className={styles.changeButtons} onClick={decreaseSession}>
            <AiOutlineMinus />
          </button>
          <p id="session-text">{sessionMinutes} </p>
          <button className={styles.changeButtons} onClick={increaseSession}>
            <AiOutlinePlus />
          </button>
          </div>

          
          
        </div>
        <div className={styles.item}>
          <p>Set break length</p>
          <div className={styles.row}>
          <button className={styles.changeButtons} onClick={decreaseBreak}>
            <AiOutlineMinus />
          </button>
          <p id="break-text">{breakMinutes}</p>
          <button className={styles.changeButtons} onClick={increaseBreak}>
            <AiOutlinePlus />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PomodoroTimer;
