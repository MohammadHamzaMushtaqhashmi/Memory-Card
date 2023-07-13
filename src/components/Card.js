import React from 'react';
import '../CSS/card.css';


const Card = ({ id, image, text, handleClick }) => {
  return (
    <div className="card" onClick={() => handleClick(id)}>
      <img src={image} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default Card;
