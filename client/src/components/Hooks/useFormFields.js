import { useState } from "react";

export const useFormFields = (initialState) => {
  const [fields, setValues] = useState(initialState);

  // const reset = setValues({});

  return [
    fields,
    // reset,
    function (event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
  ];
};
