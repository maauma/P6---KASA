import React from 'react';
import { Link } from 'react-router-dom';

// Crée un composant fonctionnel NotFound
function NotFound() {
  return (
    // Renvoie le rendu de la page d'erreur 404 avec un lien pour retourner à la page d'accueil
    <div className='error'>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

// Exporte le composant NotFound pour être utilisé dans d'autres parties de l'application
export default NotFound;