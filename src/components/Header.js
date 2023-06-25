import React from 'react';
import { Link } from 'react-router-dom';

// Crée un composant fonctionnel Header
function Header() {
  return (
    // Renvoie le rendu de l'en-tête avec la navigation
    <header>
      <nav>
        <ul>
          {/* Crée un lien vers la page d'accueil */}
          <li><Link to="/">Home</Link></li>
          {/* Crée un lien vers la page "À propos" */}
          <li><Link to="/about">About</Link></li>
          // autres liens ici
        </ul>
      </nav>
    </header>
  );
}

// Exporte le composant Header pour être utilisé dans d'autres parties de l'application
export default Header;