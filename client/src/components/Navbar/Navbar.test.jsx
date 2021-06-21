import React from "react";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Navbar from "./Navbar";

test("Navbar", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Navbar />
    </Router>
  );

  expect(screen.getByText(/HIIT at HOME/i)).toBeInTheDocument();
  expect(screen.getAllByRole("button")).toHaveLength(2);
});
