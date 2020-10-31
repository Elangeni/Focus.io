import React from 'react'
import PomodoroTimer from './PomodoroTimer'
import styles from './Pomodoro.module.css'

export const Pomodoro = () => {
  return (
    <div className="">
      <PomodoroTimer/>
    </div>
  )
}

export default Pomodoro;


// import React from "react";
// import { Card, CardContent, Typography, Grid } from "@material-ui/core";
// import styles from "./Pomodoro.module.css";

// // Icons
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";

// const Pomodoro = () => {
//   var minutes = 25;
//   var seconds = 0;
//   var breakMinutes = 5;
//   return (
//     <div className={styles.container}>
//       <div>
//         <h1 className={styles.heading}>It's time to focus.</h1>
//       </div>

//       <div className={styles.gridContainer}>
//         <div className={styles.gridItemHeading}>
//           <p>Break length:</p>
//         </div>
//         <div className={styles.gridItemHeading}>
//           <p>Session length:</p>
//         </div>

//         <div className={styles.gridItemLeft}>
//           <button className={styles.icon}>
//             <RemoveIcon />
//           </button>
//         </div>
//         <div className={styles.gridItemMiddle}>
//           <div class="col-sm timer-row" id="break-text">
//             <p>{breakMinutes}:00</p>
//           </div>
//         </div>
//         <div className={styles.gridItemRight}>
//           <button className={styles.icon}>
//             <AddIcon />
//           </button>
//         </div>

//         <div className={styles.gridItemBlank}></div>
//         <div className={styles.gridItemBlank}></div>

//         <div className={styles.gridItemLeft}>
//           <button className={styles.icon}>
//             <RemoveIcon />
//           </button>
//         </div>
//         <div className={styles.gridItemMiddle}>
//           <div class="col-sm timer-row" id="session-text">
//             <p>{minutes}:00</p>
//           </div>
//         </div>
//         <div className={styles.gridItemRight}>
//           <button className={styles.icon}>
//             <AddIcon />
//           </button>
//         </div>
//       </div>
//       <div className={styles.timerContainer}>
//         <h3>{minutes}:00</h3>
//       </div>
//       <div className={styles.btn}>
//           <button className={styles.myButton}>Start</button>
//           <button className={styles.myButton}>Reset</button>
//       </div>
//     </div>
//   );
// };

// export default Pomodoro;
