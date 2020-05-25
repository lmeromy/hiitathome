import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useFormFields } from "../Hooks/useFormFields";
import "./GenerateWorkout.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const GenerateExerciseForm = ({ handleGenerateWorkout }) => {
  const classes = useStyles();
  const [fields, handleFieldChange, reset] = useFormFields({
    type: "",
    warmup: "",
    cooldown: "",
    workTime: "",
    workInterval: "",
    restInterval: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
    handleGenerateWorkout(fields);
    reset();
  };

  return (
    <div className="form-container">
      <form noValidate className={classes.root} onSubmit={handleSubmit}>
        <div>
          <TextField
            id="type"
            name="type"
            label="Type of Workout"
            variant="outlined"
            onChange={handleFieldChange}
          />
          <TextField
            id="warmup"
            name="warmup"
            label="Warm-up time (minutes)"
            variant="outlined"
            onChange={handleFieldChange}
          />
          <TextField
            id="cooldown"
            name="cooldown"
            label="Cooldown time (minutes)"
            variant="outlined"
            onChange={handleFieldChange}
          />
        </div>
        <div>
          <TextField
            id="workTime"
            name="workTime"
            label="Workout Time (minutes)"
            variant="outlined"
            onChange={handleFieldChange}
          />
          <TextField
            id="workInterval"
            name="workInterval"
            label="Work Interval (seconds)"
            variant="outlined"
            onChange={handleFieldChange}
          />
          <TextField
            id="restInterval"
            name="restInterval"
            label="Rest Interval (seconds)"
            variant="outlined"
            onChange={handleFieldChange}
          />
        </div>
        <div className="form-buttons">
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="secondary"
          >
            Create My Workout!
          </Button>

          <Button type="reset" variant="contained" size="large" onClick={reset}>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GenerateExerciseForm;
