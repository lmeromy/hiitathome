import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import AppRoute from "./components/AppRoute";
import LandingPage from "./components/LandingPage/LandingPage";
import GenerateWorkout from "./components/GenerateWorkout/GenerateWorkout";
import CustomWorkout from "./components/CustomWorkout";

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <AppRoute path="/" exact component={LandingPage} layout={AppLayout} />
          <AppRoute
            path="/generate-workout"
            component={GenerateWorkout}
            layout={AppLayout}
          />
          <AppRoute
            path="/my-custom-workout"
            component={CustomWorkout}
            layout={AppLayout}
          />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
