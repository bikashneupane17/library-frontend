import { useState } from "react";

const initialState = {};

const handleOnChange = ({ e, form, setForm }) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
};

const handleOnSubmit = (e) => {
  e.preventDefault();
};

export const useForm = () => {
  const [form, setForm] = useState(initialState);

  return {
    form,
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
    handleOnSubmit: (e) => handleOnSubmit(e),
  };
};
