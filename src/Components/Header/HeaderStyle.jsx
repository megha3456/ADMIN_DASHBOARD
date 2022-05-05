import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  logo: {
    color: "white",
  },

  //wrapper of main container
  wrapper: {
    marginTop: "60px",

    background: "#ebedf5",
    padding: theme.spacing(2, 2, 0, 32),

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: theme.spacing(2, 2),
    },
  },

  //SideNav
  drawerPaper: {
    width: "250px",
    marginTop: "65px",
  },

  //Navlink Style
  navlinks: {
    color: "#424242",
    "& :hover, &:hover div": {
      color: "#066eaf",
    },
    " & div": {
      color: "#424242",
    },
  },
  activeNavlinks: {
    color: "#066eaf",
    " & div": {
      color: "#066eaf",
    },
  },
}));
