import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import AppRoute from "./components/AppRoute";
import LandingPage from "./components/LandingPage/LandingPage";
import GenerateWorkout from "./components/GenerateWorkout/GenerateWorkout";

const App = () => {
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
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
