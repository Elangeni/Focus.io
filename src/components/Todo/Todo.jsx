import React from "react";
import RefreshIcon from "@material-ui/icons/Refresh";
import AddTaskIcon from "@material-ui/icons/AddCircleOutline";
import { StylesProvider } from "@material-ui/core";

import styles from "./Todo.module.css";

const Todo = () => {
    // Returning the date
    const options = {
        weekday: "long",
        month: "short",
        day: "numeric"
      };
      

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div id="date" >{new Date().toLocaleDateString("en-US", options)}</div>
        
      </div>

      <div className={styles.content}>
      <RefreshIcon />
        <ul id="list"></ul>
      </div>

      <div className={styles.addTodo}>
        <AddTaskIcon />
        <input type="text" id="input" placeholder="Add a task" />
      </div>
    </div>
  );
};

export default Todo;
