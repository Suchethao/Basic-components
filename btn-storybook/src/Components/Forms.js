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
        <div>
        <label htmlFor="name">Email:</label>
        </div>
        <input type="text" id="name" name="name" placeholder='Email' /><br />
      </form>
      <form>
        <div>
        <label htmlFor="name">Select Input:</label>
        </div>
        <input type="text" id="name" name="name" placeholder='Select Input' /><br />
      </form>
      <form>
        <div>
        <label htmlFor="name">Number Input:</label>
        </div>
        <input type="text" id="name" name="name" placeholder='Number Input' /><br />
      </form>
      <form>
        <div>
        <label htmlFor="name">Text Input with Button:</label>
        </div>
        <input type="text" id="name" name="name" placeholder='Text Input with Button' /><br />
      </form>
      <form>
        <div>
        <label htmlFor="name">Checkbox:</label>
        </div>
        <input type="text" id="name" name="name" placeholder='Checkbox' /><br />
      </form>
    </div>
  );
};


export default Forms;
