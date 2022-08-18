import * as React from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = React.useState(initialValues);
  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
