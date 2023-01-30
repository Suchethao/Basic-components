import PropTypes from "prop-types"

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    email: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          placeholder= "Email"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        </label>
        </form>
  );
};

export default Form;


