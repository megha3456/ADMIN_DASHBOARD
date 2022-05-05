import {
  Box,
  ListItem,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React, { useState } from "react";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
export default function Profile() {
  
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const dropDownData = [
    { label: "My profile", icon: <AccountBalanceWalletIcon /> },
    { label: "Logout", icon: <ExitToAppIcon /> },
  
  ];
  return (
    <Box style={{display:"flex"}}>
      <Typography style={{marginRight:"10px",}} >My Account </Typography>
      
      <AccountCircleIcon
        aria-controls="simple-menu"
        aria-haspopup="true"
        
        
        onClick={handleClick}
      >
      
      </AccountCircleIcon>
     
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {dropDownData.map((item, i) => (
          <MenuItem key={i} component={ListItem} onClick={handleClose}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
