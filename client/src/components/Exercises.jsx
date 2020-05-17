import React from "react";

export const Exercises = (props) => {
  const { data } = props;

  if (!data) {
    return <div>No data yet </div>;
  }

  return <div> {data}</div>;
};
