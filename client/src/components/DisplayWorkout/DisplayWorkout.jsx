import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

const DisplayWorkout = ({ exercises }) => {
  return (
    <div>
      {!exercises && null}
      <Typography variant="h5" align="center">
        Here ya go!
      </Typography>
    </div>
  );
};

export default DisplayWorkout;
