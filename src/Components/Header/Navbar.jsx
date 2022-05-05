import {
  AppBar,
  Typography,
  
  Box,
  Toolbar,
  Hidden,
  IconButton,
} from "@material-ui/core";
import React from "react";
import Profile from "./Navtabs/profile";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./HeaderStyle";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

export default function Navbar({handleDrawerOpen }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      
      <Toolbar className={classes.toolbar}>
      
      <Typography variant="h6" className={classes.logo}>
      <SupervisorAccountIcon style={{fontSize:"35px",}} />
      Admin Panel
    </Typography>
     
        <Hidden smDown>
          <Box>
            <Profile />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
