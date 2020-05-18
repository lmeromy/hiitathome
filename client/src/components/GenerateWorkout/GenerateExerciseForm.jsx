import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./GenerateWorkout.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const GenerateExerciseForm = () => {
  const classes = useStyles();
  const [exercises, setExercises] = useState([]);

  const [newExercise, setNewExercise] = useState({
    title: "",
    category: "",
    description: "",
  });
  const handleChange = (event) => {
    event.preventDefault();
    setNewExercise({ [event.target.name]: event.target.value });
    console.log(newExercise);
  };

  return (
    <div className="form-container">
      <form noValidate className={classes.root}>
        <div>
          <TextField
            id="type"
            name="type"
            label="Type of Workout"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="warmup"
            name="warmup"
            label="Warm-up time (minutes)"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="cooldown"
            name="cooldown"
            label="Cooldown time (minutes)"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="worktime"
            name="worktime"
            label="Workout Time (minutes)"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="workInterval"
            name="workInterval"
            label="Work Interval (seconds)"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="restInterval"
            name="restInterval"
            label="Rest Interval (seconds)"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <div className="form-buttons">
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="secondary"
            // onSubmit={handleSubmit}
          >
            Create My Workout!
          </Button>

          <Button
            type="reset"
            variant="contained"
            size="large"
            // onSubmit={handleSubmit}
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GenerateExerciseForm;
