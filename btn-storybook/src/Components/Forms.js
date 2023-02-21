import React from 'react';
import './Forms.css';

const Forms = ({ size }) => {
  const formClass = `basic ${size}`;

  const submitForm = () => {
    console.log('Form submitted!');
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" /><br />
      </form>
    </div>
  );
};

export default Forms;
