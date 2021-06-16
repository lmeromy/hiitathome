import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const GenerateExerciseForm = ({ handleGenerateWorkout }) => {
  const classes = useStyles();
  const [fields, handleFieldChange] = useFormFields({
    type: "Low Impact HIIT",
    warmup: "3",
    cooldown: "3",
    workTime: 10,
    workInterval: 20,
    restInterval: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    handleGenerateWorkout(fields);
  };

  return (
    <div className="form-container">
      <form noValidate className={classes.root} onSubmit={handleSubmit}>
        <div>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel id="type">Type of Workout</InputLabel>
            <Select
              id="type"
              name="type"
              onChange={handleFieldChange}
              defaultValue="Low Impact HIIT"
            >
              <MenuItem value={"Low Impact HIIT"}>Low Impact HIIT</MenuItem>
              <MenuItem value={"Core"}>Core</MenuItem>
            </Select>
            <FormHelperText>Choose a type of workout</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel id="workTime">Workout Time (minutes)</InputLabel>
            <Select
              id="workTime"
              name="workTime"
              onChange={handleFieldChange}
              defaultValue="10"
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
            <FormHelperText>
              Length of main workout (excluding warmup/cooldown)
            </FormHelperText>
          </FormControl>
        </div>
        <div>
          <TextField
            id="warmup"
            name="warmup"
            label="Warm-up time (minutes)"
            variant="outlined"
            onChange={handleFieldChange}
            defaultValue="3"
          />
          <TextField
            id="cooldown"
            name="cooldown"
            label="Cooldown time (minutes)"
            variant="outlined"
            onChange={handleFieldChange}
            defaultValue="3"
          />
        </div>
        <div>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel id="workInterval">Work/Rest Intervals</InputLabel>
            <Select
              id="workInterval"
              name="workInterval"
              onChange={handleFieldChange}
              defaultValue="20"
            >
              <MenuItem value={20}>20 seconds work, 10 seconds rest</MenuItem>
              <MenuItem value={30}>30 seconds work, 30 seconds rest</MenuItem>
              <MenuItem value={40}>40 seconds work, 20 seconds rest</MenuItem>
              <MenuItem value={45}>45 seconds work, 15 seconds rest</MenuItem>
            </Select>
            <FormHelperText>Work hard, then take a breather</FormHelperText>
          </FormControl>
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
        </div>
      </form>
    </div>
  );
};

export default GenerateExerciseForm;
