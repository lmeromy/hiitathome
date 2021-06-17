import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="main-landing-page">
      <Typography variant="h6" align="center">
        No gym access? Stuck at home? No equipment? No problem!
      </Typography>

      <div className="main-text">
        <Typography variant="h4" align="center" color="primary">
          Create your custom workout now!
        </Typography>
      </div>

      <Typography variant="h6" align="center">
        Options include:
        <div className="landing-pg-list">
          <List align="center">
            <ListItem key="1">
              <ListItemText primary="Low-impact HIIT (high intensity interval training)" />
            </ListItem>
            <Divider />
            <ListItem key="2">
              <ListItemText primary="Core" />
            </ListItem>
            <Divider />
            <ListItem key="3">
              <ListItemText primary="Lower body" />
            </ListItem>
            <Divider />
            <ListItem key="4">
              <ListItemText primary="Upper body" />
            </ListItem>
            <Divider />
          </List>
        </div>
      </Typography>
      <div className="main-button">
        <Link to={"/generate-workout"}>
          <Button variant="contained" color="secondary" size="large">
            Generate Workout Now <FitnessCenterIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
