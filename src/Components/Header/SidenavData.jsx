import { Button, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import StreetviewIcon from "@material-ui/icons/Streetview";
import PostAddIcon from "@material-ui/icons/PostAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import PaymentIcon from "@material-ui/icons/Payment";
import TimeToLeaveIcon from "@material-ui/icons/TimeToLeave";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyle";

export default function SidenavData({handleDrawerClose}) {
  const classes = useStyles()
  const listItemData = [
    { label: "DashBoard", link:"/", icon: <DashboardIcon /> },
    { label: "Add Employee", link:"/addEmployee",  icon: <PostAddIcon /> },
    { label: "View/update Employee", link:"/employees", icon: <StreetviewIcon /> },
    // { label: "update Employee", link:"/updateEmployee/", icon: <StreetviewIcon /> },
    { label: "Delete Employee", link:"/deleteEmployee",  icon: <DeleteIcon /> },
    { label: "View Salary", link:"/ViewSalary",  icon: <PaymentIcon /> },
    { label: "Leave Report", link:"/leaveReport",  icon: <TimeToLeaveIcon /> },
    { label: "Logout", link:"/logout",  icon: <ExitToAppIcon /> },
    
  ];
  return (
    <List>
      {listItemData.map((item, i) => (
        <Button  style={{width:"100%", textTransform:"capitalize"}} onClick={()=> handleDrawerClose()}>
        <ListItem 
        exact
        component={NavLink} to={item.link}
        className={classes.navlinks} 
        activeClassName={classes.activeNavlinks} key={i}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>{item.label}</ListItemText>
        </ListItem>
        </Button>
      ))}
    </List>
  );
}
