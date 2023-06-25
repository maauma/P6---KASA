import React from 'react';
import '../css/style.css';

// Crée un composant fonctionnel Rating
const Rating = ({ rating }) => {
  const stars = [];
  // Boucle pour générer les étoiles en fonction de la note
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      // Ajoute une étoile remplie si l'index est inférieur à la note
      stars.push(<span className="star-filled" key={i}>★</span>);
    } else {
      // Ajoute une étoile non remplie si l'index est supérieur ou égal à la note
      stars.push(<span className="star-filled-grey" key={i}>★</span>);
    }
  }

  // Renvoie le rendu des étoiles
  return <div>{stars}</div>;
};

// Exporte le composant Rating pour être utilisé dans d'autres parties de l'application
export default Rating;