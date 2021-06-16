import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import TextField from "@material-ui/core/TextField";

const GenerateExerciseForm = () => {
  const [exercises, setExercises] = useState([]);

  const [newExercise, setNewExercise] = useState({
    title: "",
    category: "",
    description: "",
  });
  const handleChange = (event) => {
    event.preventDefault();
    setNewExercise({ [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form noValidate className="test-form">
        <TextField
          id="title"
          name="title"
          label="Name of Exercise"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="category"
          name="category"
          label="category"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="description"
          name="description"
          label="description"
          variant="outlined"
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          size="small"
          // onSubmit={handleSubmit}
        >
          Add exercise
        </Button>
      </form>
    </div>
  );
};

export default GenerateExerciseForm;
