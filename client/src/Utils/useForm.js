import { useState } from "react";

const useForm = () => {
  const [fields, setFields] = useState();
  const handleChange = (e) => {
    const { target } = e;
    setFields({
      ...fields,
      [target.name]: target.value,
    });
  };
  return [fields, handleChange];
};
export default useForm;
