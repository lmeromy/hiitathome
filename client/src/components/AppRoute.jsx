import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const AppRoute = ({
  component: Component,
  layout: Layout = React.Fragment,
  ...rest
}) => (
  <Route
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
    {...rest}
  />
);

AppRoute.propTypes = {
  component: PropTypes.elementType,
  layout: PropTypes.elementType,
};

export default AppRoute;
