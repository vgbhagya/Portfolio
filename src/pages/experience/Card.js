import React from 'react';

const Card = ({ title, explanation }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{explanation}</p>
    </div>
  );
};

export default Card;
