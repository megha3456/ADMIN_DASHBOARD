import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import AddEmployee from "../BodyComponent/Dashboard/AddEmployee";
import DeleteEmployee from "../BodyComponent/Dashboard/DeleteEmployee";
import ViewEmployee from "../BodyComponent/Dashboard/ViewEmployee";
import UpdateEmployee from "../BodyComponent/Dashboard/UpdateEmployee";
import LeaveReport from "../BodyComponent/Dashboard/LeaveReport";
import LogOut from "../BodyComponent/Dashboard/LogOut";
import ViewSalary from "../BodyComponent/Dashboard/ViewSalary";
import { Box } from "@material-ui/core";
import { useStyles } from "./HeaderStyle";
import ViewEmployeeComponent from "../BodyComponent/Dashboard/ViewEmployeeComponent";

export default function HeaderComponent() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <div>
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      {/* register our routes */}
      <Box className={classes.wrapper}>
        <Switch>
          {/* <Route path="/" component = {<Dashboard/>}></Route> */}

          <Route exact path="/" component={Dashboard}/>
          <Route  path="/addEmployee" component={AddEmployee} />
          <Route  path="/deleteEmployee" component={DeleteEmployee} />
          <Route  path="/employees" component={ViewEmployee} />
          <Route  path="/updateEmployee/:id" component={UpdateEmployee}></Route>
          <Route  path="/viewEmployee/:id" component={ViewEmployeeComponent}></Route>
          <Route  path="/leaveReport" component={LeaveReport} />
          <Route  path="/ViewSalary" component={ViewSalary} />
          <Route  path="/logout" component={LogOut} />
        </Switch>
      </Box>
    </div>
  );
}
