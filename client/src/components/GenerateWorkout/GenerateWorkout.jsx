import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import GenerateExerciseForm from "./GenerateExerciseForm";
import DisplayWorkout from "../DisplayWorkout/DisplayWorkout";

const GenerateWorkout = () => {
  const [exercises, setExercises] = useState([]);

  const [newWorkout, setNewWorkout] = useState({});

  useEffect(() => {
    fetch("/api/exercises")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const exerciseList = res.map((ex) => [
          ex.title,
          ex.category,
          ex.description,
        ]);
        console.log(exerciseList);
        setExercises(exerciseList);
      });
  }, []);

  const generateWorkout = (workoutInfo) => {
    setNewWorkout(workoutInfo);
    console.log(newWorkout);
  };

  return (
    <div>
      <Typography variant="h5" align="center">
        Customize your workout!
      </Typography>
      {/* <GenerateExerciseForm handleGenerateWorkout={handleGenerateWorkout} /> */}
      <GenerateExerciseForm handleGenerateWorkout={generateWorkout} />
      <DisplayWorkout exercises={exercises} details={newWorkout} />
    </div>
  );
};

export default GenerateWorkout;
