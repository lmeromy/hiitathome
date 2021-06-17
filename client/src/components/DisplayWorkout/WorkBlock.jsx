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
        <List>
          {exercises.map((exercise) => (
            <div key={exercise.title}>
              <ListItem>
                <ListItemText
                  primary={exercise.title + ":"}
                  disableTypography
                  secondary={
                    <Typography type="body1" style={{ color: "#000" }}>
                      {exercise.description}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
        <Typography variant="h6" align="center">
          Repeat this block {blocks} times
        </Typography>
      </div>
    )
  );
};
