import React from 'react';
import { Link } from 'react-router-dom';

// Crée un composant fonctionnel Card
function Card({ property }) {
  // Récupère la première image de la liste
  const imageUrl = property.pictures[0];

  return (
    <div className="card-container">
      {/* Crée un lien vers la page de détails de l'hébergement */}
      <Link to={`/accommodation/${property.id}`}>
        <div className="card">
          {/* Ajoute une balise img pour afficher l'image */}
          <div className="image-container">
            <img src={imageUrl} alt={property.title} />
            {/* Affiche le titre de la propriété sur l'image */}
            <h2 className="card-title">{property.title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Exporte le composant Card pour être utilisé dans d'autres parties de l'application
export default Card;