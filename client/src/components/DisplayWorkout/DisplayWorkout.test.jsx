import React from "react";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import DisplayWorkout from "./DisplayWorkout";

test.skip("DisplayWorkout", () => {
  const props = {
    exercises: [
      { title: "planks", description: "planks desc" },
      { title: "planks", description: "planks desc" },
    ],
    details: {
      workTime: 10,
      type: "core",
      warmup: "3",
      cooldown: "3",
    },
  };

  render(<DisplayWorkout props={props} />);

  expect(screen.getByText(/your workout/i)).toBeInTheDocument();
  expect(screen.getAllByRole("button")).toHaveLength(1);
});
