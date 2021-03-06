import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GenerateExerciseForm from "./GenerateExerciseForm";
import DisplayWorkout from "../DisplayWorkout/DisplayWorkout";

const GenerateWorkout = () => {
  const [exercises, setExercises] = useState([]);

  const [newWorkout, setNewWorkout] = useState(null);

  useEffect(() => {
    fetch("/api/exercises")
      .then((res) => res.json())
      .then((res) => {
        setExercises(res);
      });
  }, []);

  const generateWorkout = (workoutInfo) => {
    setNewWorkout(workoutInfo);
  };

  return (
    <div className="main-generate-workout">
      {!newWorkout && (
        <>
          <Typography variant="h5" align="center">
            Customize your workout!
          </Typography>
          <GenerateExerciseForm handleGenerateWorkout={generateWorkout} />{" "}
        </>
      )}
      {newWorkout && (
        <>
          <div className="workout-container">
            <DisplayWorkout exercises={exercises} details={newWorkout} />
          </div>
          <div className="re-do-btn">
            <Button
              variant="contained"
              size="large"
              color="secondary"
              onClick={() => setNewWorkout(null)}
            >
              Whip up a different workout!
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default GenerateWorkout;
