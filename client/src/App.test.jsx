import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import App from "./App";

test("App routing", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(
    screen.getByText(/Create your custom workout now!/i)
  ).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/Generate Workout Now/i), leftClick);

  // check that the content changed to the new page
  expect(screen.getByText(/Customize your workout!/i)).toBeInTheDocument();
});
