import React from 'react';
import { NavLink } from 'react-router-dom';

// Crée un composant fonctionnel NavBar
function NavBar() {
  return (
    // Renvoie le rendu de la barre de navigation avec le logo et les liens
    <nav>
      <div className='bloc-logo'>
        {/* Affiche le logo avec un lien vers la page d'accueil */}
        <NavLink to="/" className="logo-link">
          <img src="/logo.png" alt="Logo" />
        </NavLink>
      </div>
      <div className='menu'>
        {/* Crée un lien vers la page d'accueil */}
        <NavLink exact="true" to="/" className={({ isActive }) => (isActive ? "active-link" : "menu-link")}>Accueil</NavLink>
        {/* Crée un lien vers la page "A propos" */}
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "menu-link")}>A propos</NavLink>
      </div>
    </nav>
  );
}

// Exporte le composant NavBar pour être utilisé dans d'autres parties de l'application
export default NavBar;
