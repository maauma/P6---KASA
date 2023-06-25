import { Link } from 'react-router-dom';

// Crée un composant fonctionnel NavBar
function NavBar() {
  return (
    // Renvoie le rendu de la barre de navigation avec le logo et les liens
    <nav>
      <div className='bloc-logo'>
        {/* Affiche le logo */}
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className='menu'>
        {/* Crée un lien vers la page d'accueil */}
        <Link to="/">Accueil</Link>
        {/* Crée un lien vers la page "A propos" */}
        <Link to="/about">A propos</Link>
      </div>
    </nav>
  );
}

// Exporte le composant NavBar pour être utilisé dans d'autres parties de l'application
export default NavBar;