import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import classes from "./Navbar.module.css";

export default function DenseAppBar() {
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" className={classes.navHeading}>
            Focus.io
          </Typography>
          <div className={classes.navLinkContainer}>
            <a href="#" className={classes.navLink}>
              <Typography variant="h6" color="inherit">
                Login
              </Typography>
            </a>
            <a href="#" className={classes.navLink}>
              <Typography variant="h6" color="inherit">
                Reports
              </Typography>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
