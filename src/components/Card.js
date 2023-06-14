import React from 'react';
import { Link } from 'react-router-dom';

function Card({ property }) {
  // Récupérer la première image de la liste
  const imageUrl = property.pictures[0];

  return (
    <div className="card-container">
      <Link to={`/accommodation/${property.id}`}>
        <div className="card">
          {/* Ajoutez une balise img pour afficher l'image */}
          <img src={imageUrl} alt={property.title} />
          <h2 className="card-title">{property.title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Card;
