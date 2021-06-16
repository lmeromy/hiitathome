import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import { WorkBlock } from "./WorkBlock";

const DisplayWorkout = ({ exercises, details }) => {
  // write a function which takes in an array of items and a number
  // the function should randomly return that number of items (with no repeat items)

  const chooseExercises = (exercisesArray, number) => {
    const chosenExercises = [];
    for (let i = 0; i < number; i++) {
      let randomExercise =
        exercisesArray[Math.floor(Math.random() * exercisesArray.length)];
      chosenExercises.push(randomExercise);
      //remove chosen exercise from initial array
      exercisesArray.splice(exercisesArray.indexOf(randomExercise), 1);
    }

    return chosenExercises;
  };

  let blocks, blockLength;

  const createWorkBlock = () => {
    switch (details.workTime) {
      case 10:
        blocks = 2;
        blockLength = 5;
        break;
      case 12:
        blocks = 3;
        blockLength = 4;
        break;
      case 15:
        blocks = 3;
        blockLength = 5;
        break;
      case 18:
        blocks = 3;
        blockLength = 6;
        break;
      case 20:
        blocks = 4;
        blockLength = 5;
        break;
      default:
        blocks = 2;
        blockLength = 5;
    }
    const specifiedExercisesByCategory = exercises.filter((exercise) => {
      return exercise.category == details.type;
    });

    const myExercises = chooseExercises(
      specifiedExercisesByCategory,
      blockLength
    );
    return <WorkBlock exercises={myExercises} blocks={blocks} />;
  };

  return (
    <div>
      {!exercises && !details && null}
      {details && (
        <>
          <Typography variant="h3" align="center">
            Here's your workout:
          </Typography>
          <Typography variant="h4" align="center">
            Warmup: {details.warmup} minutes
          </Typography>

          <Typography variant="h4" align="center">
            Work Block: {createWorkBlock()}
          </Typography>
          <Typography variant="h4" align="center">
            Cooldown: {details.cooldown} minutes
          </Typography>
        </>
      )}
    </div>
  );
};

export default DisplayWorkout;
