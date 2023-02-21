import React from 'react';
import './Buttons.css';

const Button = ({ color }) => {
  const buttonClass = `basic ${color}`;

  return (
    <div>
      <button className={buttonClass}>Do Something</button>
      <button className={`hover ${color}`}>Do Something</button>
      <button className={`wire ${color}`}>Do Something</button>
      <button className={`soft ${color}`}>Do Something</button>
      <button className={`largeBasic ${color}`}>Do Something</button>
      <button className={`largeSoft ${color}`}>Do Something</button>
      <button className={`largeWire ${color}`}>Do Something</button>
      <button className={`addToCart ${color}`}> Add To Cart</button>
      <button className={`addToFavorites ${color}`}>Add To Favorites</button>
      <button className={`heart ${color}`}>heart</button>
      <button className={`cart ${color}`}>cart</button>
    </div>
  );
};

export default Button;
