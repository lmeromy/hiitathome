import { useState } from "react";

export const useFormFields = (initialState) => {
  const [fields, setValues] = useState(initialState);

  const reset = () => {
    setValues({ ...fields, initialState });
  };

  return [
    fields,

    function (event) {
      setValues({
        ...fields,
        [event.target.name]: event.target.value,
      });
      console.log(
        "field: " + event.target.name,
        "value: " + event.target.value
      );
    },
    reset,
  ];
};
