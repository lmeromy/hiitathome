import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import "./DisplayWorkout.scss";

export const WorkBlock = ({ exercises, blocks }) => {
  return (
    exercises.length > 0 && (
      <div className="workout-block">
        <List align="center">
          {exercises.map((exercise) => (
            <>
              <ListItem key={exercise.title}>
                <ListItemText
                  primary={exercise.title + ": " + exercise.description}
                />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
        <Typography variant="h4" align="center">
          Repeat this block {blocks} times
        </Typography>
      </div>
    )
  );
};
