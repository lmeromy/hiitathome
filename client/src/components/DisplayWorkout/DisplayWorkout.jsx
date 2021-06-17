import React from "react";
import Typography from "@material-ui/core/Typography";
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
      return exercise.category === details.type;
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
        <div>
          <div className="your-workout-title">
            <Typography variant="h5" align="center">
              YOUR WORKOUT
            </Typography>
          </div>
          <Typography variant="h6" align="center" color="primary">
            Warmup: {details.warmup} minutes
          </Typography>
          <Typography variant="h6" align="center" color="primary">
            Work Block: {createWorkBlock()}
          </Typography>
          <Typography variant="h6" align="center" color="primary">
            Cooldown: {details.cooldown} minutes
          </Typography>
        </div>
      )}
    </div>
  );
};

export default DisplayWorkout;
