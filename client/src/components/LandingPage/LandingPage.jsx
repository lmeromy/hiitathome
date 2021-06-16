import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import "./LandingPage.scss";

const LandingPage = () => {
  // const [exercises, setExercises] = useState([]);

  // const [newExercise, setNewExercise] = useState({
  //   title: "",
  //   category: "",
  //   description: "",
  // });
  // const handleChange = (event) => {
  //   event.preventDefault();
  //   setNewExercise({ [event.target.name]: event.target.value });
  //
  // };

  return (
    <div className="main-landing-page">
      <Typography variant="h6" align="center">
        No gym access? Stuck at home? Short on time? Have bad knees?
      </Typography>
      <Typography variant="h5" align="center">
        Create your custom workout now!
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
