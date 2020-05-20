import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import GenerateExerciseForm from "./GenerateExerciseForm";

const GenerateWorkout = () => {
  const [exercises, setExercises] = useState();

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

  useEffect(() => {
    fetch("/api/exercises")
      .then((res) => res.json())
      .then((res) => {
        const exerciseList = res.map((ex) => ex.title);
        console.log(exerciseList);
        setExercises(exerciseList);
      });
  }, []);

  // const handleSubmit = () => {
  // };

  return (
    <div>
      <Typography variant="h5" align="center">
        Customize your workout!
      </Typography>

      <GenerateExerciseForm />
      <Typography variant="h5" align="center">
        {exercises}
      </Typography>
    </div>
  );
};

export default GenerateWorkout;
