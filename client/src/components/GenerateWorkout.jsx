import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

const GenerateWorkout = () => {
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
    <div>
      <Typography variant="h5" align="center">
        Customize your workout!
      </Typography>
    </div>
  );
};

export default GenerateWorkout;
