import React from "react";
import Navbar from "./Navbar";

import PropTypes from "prop-types";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
