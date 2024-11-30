// Tarjeta para mostrar una receta individual.
import React from 'react';

const RecipeCard = ({ title, image, description }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default RecipeCard;  // Asegúrate de tener esta línea
