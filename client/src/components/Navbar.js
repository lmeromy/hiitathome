import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={RouterLink} to="/">
            <FitnessCenterIcon />
          </Button>
          <Typography variant="h4" className={classes.title}>
            HIIT at HOME
          </Typography>

          <Button color="inherit" component={RouterLink} to="/">
            <HomeIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
